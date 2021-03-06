import posts from '../../__sapper__/export/blog.json'

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    slug: post.slug,
    category: post.category,
    excerpt: post.excerpt,
    printDate: post.printDate,
  };
}));

exports.handler = function(event, context, callback) {
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: contents
    });
}
