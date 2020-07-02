import axios from "axios";

export default async (req, res) => {
  
  if (!res) return {};
  try {
    
    let domain = 'https://www.vitaverde.ch'
    let siteXML = ""
    let angeboteXML = ""
    const API_URL = process.env.API_URL;
    
    const resSitemap = await axios.get(`${API_URL}/sitemaps`);
    
    resSitemap.data.map(sitemap => {
      const sitemapURL = `${domain}${sitemap.slug}`;
      siteXML += `
      <url>
        <loc>${sitemapURL}</loc>
        <lastmod>${sitemap.last_update}</lastmod>
        <priority>${sitemap.prio}</priority>
      </url>
    `
    })

    const resAngebote = await axios.get(`${API_URL}/angebots`);
    resAngebote.data.map(angebot => {
      const angeboteURL = `${domain}/${angebot.slug}`
      angeboteXML += `
        <url>
          <loc>${angeboteURL}</loc>
          <lastmod>${angebot.updated_at}</lastmod>
          <priority>0.8</priority>
        </url>
      `
    })

    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${siteXML}${angeboteXML}</urlset>`
    res.setHeader('content-type', 'text/xml');
    res.send(sitemapXML)

  } catch (e) {
    res.status(500).end();
  }
}