import { MetadataRoute } from 'next'
import { flagshipProjects } from '../data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://charukhesh.github.io'

  const routes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${baseUrl}/projects/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/leadership/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/publications/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
  ]

  // Automatically add all your detailed case study pages!
  const projectRoutes = flagshipProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  return [...routes, ...projectRoutes]
}