import posts from '../../_posts.js';

const render = (category, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>SpeakWriteListen.com (${category})</title>
  <link>https://www.speakwritelisten.com/c/${category}</link>
	<description>Posts from ${category} on SpeakWriteListen.com</description>
	${posts.map(post => `
		<post>
			<title>${post.title}</title>
			<link>https://www.speakwritelisten.com/blog/${post.slug}</link>
      <description><![CDATA[
        ${post.description}
			]]></description>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</post>
	`).join('\n')}
</channel>
</rss>`;

export function get(req, res, next) {
  const { category } = req.params;

	res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`); // 10 minutes
	res.setHeader('Content-Type', 'application/rss+xml');
  const feed = render(category, posts.filter(post => post.category == category));
  res.end(feed);
}
