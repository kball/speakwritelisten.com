import posts from '../../_posts.js';

const render = (category, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>SpeakWriteListen.com (${category})</title>
  <link>https://www.speakwritelisten.com/c/${category}</link>
	<description>Posts from ${category} on SpeakWriteListen.com</description>
	${posts.map(post => `
		<item>
			<title>${post.title}</title>
			<link>https://www.speakwritelisten.com/blog/${post.slug}</link>
      <description><![CDATA[
        ${post.html}
			]]></description>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</item>
	`).join('\n')}
</channel>
</rss>`;

export function get(req, res, next) {
  const { category } = req.params;

	res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader('Content-Type', 'application/rss+xml');
  const applicablePosts = posts.filter((post) => {
    return post.categories.some(c => c.slug === category);
  });
  const feed = render(category, applicablePosts);
  res.end(feed);
}
