import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://mattiaverzelettipt.com'

// Files to exclude from sitemap
const EXCLUDED_FILES = [
  'layout',
  'loading',
  'error',
  'not-found',
  'template',
  'default',
  'sitemap',
  'robots',
  'manifest',
  'icon',
  'apple-icon',
  'opengraph-image',
  'twitter-image',
]

// Folders to exclude (private routes, api, etc.)
const EXCLUDED_FOLDERS = ['api', '_components', '_lib', '_utils']

function getRoutes(dir: string, basePath: string = ''): string[] {
  const routes: string[] = []
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name)
      
      if (entry.isDirectory()) {
        // Skip excluded folders and private folders (starting with _)
        if (EXCLUDED_FOLDERS.includes(entry.name) || entry.name.startsWith('_')) {
          continue
        }
        
        // Skip route groups (folders in parentheses)
        if (entry.name.startsWith('(') && entry.name.endsWith(')')) {
          // Still scan inside route groups, but don't add to path
          routes.push(...getRoutes(fullPath, basePath))
        } else {
          // Regular folder - add to path
          const newPath = `${basePath}/${entry.name}`
          routes.push(...getRoutes(fullPath, newPath))
        }
      } else if (entry.isFile()) {
        const fileName = entry.name.replace(/\.(tsx?|jsx?|mdx?)$/, '')
        
        // Check if it's a page file
        if (fileName === 'page') {
          routes.push(basePath || '/')
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error)
  }
  
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')
  const routes = getRoutes(appDir)
  
  // Remove duplicates and sort
  const uniqueRoutes = Array.from(new Set(routes))
  
  const sitemapEntries: MetadataRoute.Sitemap = uniqueRoutes.map((route) => {
    const isHome = route === '/'
    
    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: isHome ? 'weekly' : 'monthly',
      priority: isHome ? 1.0 : 0.8,
    }
  })
  
  // Sort to ensure home is first
  sitemapEntries.sort((a, b) => {
    if (a.url === BASE_URL || a.url === `${BASE_URL}/`) return -1
    if (b.url === BASE_URL || b.url === `${BASE_URL}/`) return 1
    return a.url.localeCompare(b.url)
  })
  
  return sitemapEntries
}
