import posts from './blog/_posts.js';

const pages = [
  '',
  'blog/',
  'about/',
  'newsletter/',
]

const render = (pages, categories, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(page=> `
    <url><loc>https://www.speakwritelisten.com/${page}</loc></url>
  `).join('\n')}
  ${categories.map(cat=> `
    <url><loc>https://www.speakwritelisten.com/blog/c/${cat.slug}/</loc></url>
  `).join('\n')}
  ${posts.map(post => `
    <url>
      <loc>https://www.speakwritelisten.com/blog/${post.slug}/</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
    </url>
  `).join('\n')}
</urlset>
`;

export function get(req, res, next) {

  res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader('Content-Type', 'application/rss+xml');
  let categories = {};
  posts.forEach(post => {
    post.categories.forEach((category) => {
      categories[category.slug] = category;
    });
  });


  const feed = render(pages, Object.values(categories), posts);
  res.end(feed);
}

