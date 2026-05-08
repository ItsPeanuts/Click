import type { MetadataRoute } from 'next'
import { allToolSlugs } from '@/lib/tools-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vorzapdf.com'
  const now = new Date()

  const toolPages: MetadataRoute.Sitemap = allToolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...toolPages,
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
