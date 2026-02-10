import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity'

type BlogPost = {
	title: string
	publishDate: string
	seoTitle?: string
	seoDescription?: string
	content: Array<Record<string, unknown>>
}

const blogPostQuery = groq`
	*[_type == "blogPost" && slug.current == $slug][0] {
		title,
		publishDate,
		seoTitle,
		seoDescription,
		content
	}
`

const blogPostMetaQuery = groq`
	*[_type == "blogPost" && slug.current == $slug][0] {
		title,
		seoTitle,
		seoDescription
	}
`

const portableTextComponents = {
	block: {
		h2: ({ children }: { children: ReactNode }) => (
			<h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4">{children}</h2>
		),
		h3: ({ children }: { children: ReactNode }) => (
			<h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4">{children}</h3>
		),
		normal: ({ children }: { children: ReactNode }) => (
			<p className="text-lg text-gray-200 leading-relaxed mb-6">{children}</p>
		),
		blockquote: ({ children }: { children: ReactNode }) => (
			<blockquote className="border-l-2 border-orange-400/70 pl-4 italic text-gray-300 mb-6">
				{children}
			</blockquote>
		),
	},
	list: {
		bullet: ({ children }: { children: ReactNode }) => (
			<ul className="list-disc list-inside text-lg text-gray-200 mb-6 space-y-2">
				{children}
			</ul>
		),
	},
	marks: {
		link: ({ children, value }: { children: ReactNode; value?: { href?: string } }) => (
			<a
				href={value?.href}
				className="text-orange-300 underline underline-offset-4 hover:text-orange-200"
				rel="noreferrer"
				target="_blank"
			>
				{children}
			</a>
		),
	},
}

function formatDate(value: string) {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(new Date(value))
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ post: string }>
}): Promise<Metadata> {
	const { post: slug } = await params

	if (!slug) {
		return { title: 'Blog post' }
	}

	const data = await client.fetch<{
		title?: string
		seoTitle?: string
		seoDescription?: string
	}>(blogPostMetaQuery, { slug })

	if (!data?.title) {
		return { title: 'Post not found' }
	}

	return {
		title: data.seoTitle || data.title,
		description: data.seoDescription,
	}
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ post: string }>
}) {
	const { post: slug } = await params

	if (!slug) {
		notFound()
	}

	const post = await client.fetch<BlogPost | null>(blogPostQuery, {
		slug,
	})

	if (!post) {
		notFound()
	}

	return (
		<main className="min-h-screen px-6 py-24">
			<article className="max-w-3xl mx-auto">
				<header className="mb-10">
					<div className="text-sm text-gray-500 mb-3">
						{formatDate(post.publishDate)}
					</div>
					<h1 className="text-4xl md:text-5xl font-bold font-space-grotesk">
						{post.title}
					</h1>
					{post.seoDescription && (
						<p className="text-gray-400 mt-4 text-lg">{post.seoDescription}</p>
					)}
				</header>

				<div>
					<PortableText value={post.content} components={portableTextComponents} />
				</div>
			</article>
		</main>
	)
}
