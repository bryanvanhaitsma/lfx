# LFX Concept Site

A Next.js site powered by Sanity CMS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- A Sanity account (free at [sanity.io](https://www.sanity.io))

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up Sanity**
   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Create a new project (or use an existing one)
   - Copy your Project ID

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your Sanity project details:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Update Sanity configuration**
   
   Edit the following files with your project ID:
   - `sanity.config.ts`
   - `src/lib/sanity.ts`

5. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to see the site
   
   Open [http://localhost:3000/studio](http://localhost:3000/studio) to access Sanity Studio

## 📁 Project Structure

```
lfx/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── studio/       # Sanity Studio (at /studio route)
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   └── lib/
│       └── sanity.ts     # Sanity client configuration
├── sanity/
│   └── schemas/          # Sanity content schemas
│       ├── index.ts
│       └── page.ts       # Page schema
├── sanity.config.ts      # Sanity Studio configuration
├── next.config.ts        # Next.js configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🎨 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Sanity CMS** - Headless CMS with real-time editing
- **Tailwind CSS** - Utility-first CSS framework
- **next-sanity** - Sanity integration for Next.js

## 📝 Content Management

The Sanity Studio is embedded in the Next.js app at `/studio`. You can:

1. Access it at `http://localhost:3000/studio`
2. Create and edit content
3. Define custom schemas in `sanity/schemas/`
4. Query content using the Sanity client in `src/lib/sanity.ts`

### Example: Querying Content

```typescript
import { client } from '@/lib/sanity'

// Fetch all pages
const pages = await client.fetch('*[_type == "page"]')
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy Sanity Studio

The Sanity Studio is embedded in the Next.js app, so it deploys automatically with your site.

## 📚 Next Steps

1. Customize the schema in `sanity/schemas/`
2. Add more content types (posts, projects, etc.)
3. Create pages that fetch and display Sanity content
4. Customize the design and styling
5. Add images using Sanity's image pipeline

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

