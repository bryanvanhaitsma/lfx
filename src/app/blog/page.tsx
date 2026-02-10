import type { Metadata } from 'next'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity'

type BlogPostListItem = {
  _id: string
  title: string
  slug: { current: string }
  publishDate: string
  seoDescription?: string
}

const blogPostsQuery = groq`
  *[_type == "blogPost" && defined(slug.current)]
  | order(publishDate desc)
  {
    _id,
    title,
    slug,
    publishDate,
    seoDescription
  }
`

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights and updates from Lake FX Media.',
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value))
}

export default async function BlogPage() {
  const posts = await client.fetch<BlogPostListItem[]>(blogPostsQuery)

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Stories, insights, and behind-the-scenes notes from our studio.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-gray-400">No posts yet. Check back soon.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="border border-white/10 rounded-2xl p-6 hover:border-orange-400/60 transition-colors"
              >
                <div className="text-sm text-gray-500 mb-3">
                  {formatDate(post.publishDate)}
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="hover:text-orange-300 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                {post.seoDescription && (
                  <p className="text-gray-400">{post.seoDescription}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
