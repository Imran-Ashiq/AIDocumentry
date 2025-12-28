import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Use the environment variable or fallback to localhost for dev
  // On Heroku, set NEXT_PUBLIC_APP_URL to your app's URL (e.g., https://my-app.herokuapp.com)
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}