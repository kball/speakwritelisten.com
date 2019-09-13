import posts from './blog/_posts.js';
// Posts should come in already ordered in descending order
let recentTips = posts.filter(post => {
  return post.category === 'daily-tips';
}).slice(0, 7);

const contents = JSON.stringify(recentTips);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
