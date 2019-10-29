<script context="module">
  export async function preload({ path, params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    const url = `https://www.speakwritelisten.com${path}`;

    if (res.status === 200) {
      return { post: data, url: url };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Bio from '/components/Bio.svelte'
  import EmailSignup from '/components/EmailSignup.svelte'
  import SharedHead from '/components/SharedHead.svelte';
  import ShareButtons from '/components/ShareButtons.svelte';
  export let post
  export let url
  if (post.twitter && typeof(document) !== 'undefined') {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = '//platform.twitter.com/widgets.js'
    document.getElementsByTagName('head')[0].appendChild(s)
  }

  if (post.changelog && typeof(document) !== 'undefined') {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = '//cdn.changelog.com/embed.js'
    document.getElementsByTagName('head')[0].appendChild(s)
  }
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
  <ShareButtons url={url} title={post.title} />
  <hr />
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
  <hr />
  <ShareButtons url={url} title={post.title} />
  <hr />
  <p>Like what you read? You might be interested in my daily communication tips. I send out a short email each weekday with communication tips, tactic, mental models, and ideas for improvement.  No fluff, all focused on helping you improve.
  </p>
  <EmailSignup />
  <hr/>
  <Bio />
</div>
