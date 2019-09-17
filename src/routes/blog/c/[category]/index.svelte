<script context="module">
  import categories from '/_data/categories.json';
  export function preload({ params, query }) {
    const category = categories[params.category];
    return this.fetch(`blog/c/${category.slug}/feed.xml`).then(() => {
      return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
        const applicablePosts = posts.filter((post) => {
          return post.categories.some(c => c.slug === category.slug);
        });
        return { posts: applicablePosts, category: category };
      });
    });
  }
</script>

<script>
  export let category
  export let posts;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>{category.name}</title>
</svelte:head>

<div class="container">
  <h1>{category.name}</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
