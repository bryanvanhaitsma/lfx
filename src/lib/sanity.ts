import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // API version - use the date when you first create your dataset or the latest API version
  // See: https://www.sanity.io/docs/api-versioning
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true in production for faster, cached responses
})
