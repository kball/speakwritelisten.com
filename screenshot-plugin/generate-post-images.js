const screenshot = require('./screenshot')
const posts = require('../src/routes/blog/_posts.js');

const screenshots = [];
posts.forEach(post => {
  screenshots.push([
    `posts/${post.slug}`,
    post.title,
    post.subtitle
  ])
})

;(async function() {
  await screenshot(
    screenshots,
    false
  )
})()
