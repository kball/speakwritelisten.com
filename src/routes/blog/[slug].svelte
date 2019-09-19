<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Bio from '/components/Bio.svelte'
  import EmailSignup from '/components/EmailSignup.svelte'
  import SharedHead from '/components/SharedHead.svelte';
  export let post
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #AAA;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }
  .category a {
    margin-right: 1rem;
    margin-left: 1rem;
    position: relative;
    display: inline-block
  }

</style>

<SharedHead title={post.title}
  description={post.excerpt}
  blogPost={post}
/>

<header>
  <p>{post.printDate} ~ {post.printReadingTime}</p>
  <h1>{post.title}</h1>
  <p class="category">
  {#each post.categories as category}
    <a href="/blog/c/{category.slug}">{category.name}</a>
    {/each}
  </p>
  <hr />
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
  <hr />
  <p>Like what you read? You might be interested in my daily communication tips. I send out a short email each weekday with communication tips, tactic, mental models, and ideas for improvement.  No fluff, all focused on helping you improve.
  </p>
  <EmailSignup />
  <hr/>
  <Bio />
</div>
