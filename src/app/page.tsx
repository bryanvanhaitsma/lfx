export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">LFX</h1>
          <p className="text-gray-300 mt-1">Concept Site</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Welcome to LFX</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a Next.js site powered by Sanity CMS. The base setup is complete and ready for configuration.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                <li>Configure your Sanity project settings in <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">sanity.config.ts</code></li>
                <li>Set up environment variables in <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">.env.local</code></li>
                <li>Run <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">npm run sanity</code> to start the Sanity Studio</li>
                <li>Start customizing your content schema in the <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">sanity/schemas</code> directory</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">📝 Next.js</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Modern React framework with server-side rendering and static site generation.
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🎨 Sanity CMS</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Powerful headless CMS with real-time collaboration and flexible content modeling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-6 px-4 mt-12">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>Built with Next.js and Sanity CMS</p>
        </div>
      </footer>
    </div>
  );
}
