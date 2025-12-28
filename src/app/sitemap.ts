import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Use the environment variable or fallback to the deployed URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-documentary-imran-8c699078b06e.herokuapp.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}