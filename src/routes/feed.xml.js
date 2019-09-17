import posts from './blog/_posts.js';

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
	<title>SpeakWriteListen.com</title>
  <link>https://www.speakwritelisten.com/blog</link>
	<description>Posts from SpeakWriteListen.com</description>
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

	res.setHeader('Cache-Control', `max-age=0, s-max-age=${600}`); // 10 minutes
	res.setHeader('Content-Type', 'application/rss+xml');
  const feed = render(posts);
  res.end(feed);
}
