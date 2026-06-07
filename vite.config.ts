import fs from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'

function siteUrlPlugin(siteUrl: string): Plugin {
  return {
    name: 'site-url',
    transformIndexHtml(html) {
      return html.replaceAll('%SITE_URL%', siteUrl)
    },
    closeBundle() {
      const dist = path.resolve(__dirname, 'dist')
      const today = new Date().toISOString().split('T')[0]

      fs.writeFileSync(
        path.join(dist, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      )
      fs.writeFileSync(
        path.join(dist, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
      )
    },
  }
}

const siteUrl = process.env.VITE_SITE_URL ?? 'https://joecpdev.vercel.app'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), siteUrlPlugin(siteUrl)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
