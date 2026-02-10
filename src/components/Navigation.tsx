import Link from 'next/link'

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/logo.webp" alt="Lake FX" className="h-9 w-auto" />
        </Link>
        <div className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-orange-300 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/get-started"
          className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full text-sm font-medium text-black hover:shadow-lg hover:shadow-orange-500/40 transition-all"
        >
          Get Started
        </Link>
      </div>
    </nav>
  )
}
