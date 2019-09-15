<script context="module">
  export function preload({ params, query }) {
    const { category } = params;
    return this.fetch(`blog/c/${category}/rss`).then(() => {
      return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
        return { posts: posts.filter(post => post.category == category), category: params.category };
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
  <title>{category}</title>
</svelte:head>

<div class="container">
  <h1>{category}</h1>
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
