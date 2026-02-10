export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold gradient-text font-space-grotesk">Lake FX Media</div>
        <div className="flex gap-3 text-sm text-gray-400">
          <a
            href="#"
            aria-label="Instagram"
            className="h-10 w-10 rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-orange-400/60 transition-colors flex items-center justify-center"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.4-2.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="h-10 w-10 rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-orange-400/60 transition-colors flex items-center justify-center"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M13.5 9.5V8c0-.9.6-1.5 1.5-1.5H17V4h-2.6C12 4 10.5 5.6 10.5 7.8V9.5H9v3h1.5V20h3v-7.5H16l.5-3h-3Z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-md border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-orange-400/60 transition-colors flex items-center justify-center"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
              <path
                fill="currentColor"
                d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm5.2 5.5H8V20h2.5v-5.6c0-1.5.7-2.4 2-2.4 1.4 0 1.7 1 1.7 2.5V20h2.5v-6c0-2.8-1.5-4.5-4-4.5-1.4 0-2.5.7-3 1.7V9.5Z"
              />
            </svg>
          </a>
        </div>
        <div className="text-sm text-gray-400">
          © 2026 Lake FX Media. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
