import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.majesticmountainmovers.com'
  const pages = [
    { url: '', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/moving-quote', priority: 0.9 },
    { url: '/contact', priority: 0.7 },
    { url: '/interstate-movers-summit-county', priority: 0.9 },
    { url: '/local-movers-summit-county', priority: 0.9 },
    { url: '/white-glove-movers-vail-colorado', priority: 0.9 },
    { url: '/vacation-home-movers-colorado', priority: 0.9 },
    { url: '/furniture-delivery-vail-breckenridge', priority: 0.9 },
    { url: '/packing-services', priority: 0.7 },
    { url: '/breckenridge-movers', priority: 0.9 },
    { url: '/vail-movers', priority: 0.9 },
    { url: '/silverthorne-movers', priority: 0.8 },
    { url: '/frisco-movers', priority: 0.8 },
    { url: '/keystone-movers', priority: 0.8 },
    { url: '/dillon-movers', priority: 0.7 },
    { url: '/copper-mountain-movers', priority: 0.7 },
    { url: '/denver-movers', priority: 0.8 },
    { url: '/aspen-movers', priority: 0.8 },
    { url: '/buena-vista-movers', priority: 0.7 },
  ]
  return pages.map(p => ({
    url: `${base}${p.url}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p.priority,
  }))
}
