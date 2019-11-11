<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`recent-tips.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  export let posts
  import SharedHead from '/components/SharedHead.svelte';
  import EmailSignup from '../components/EmailSignup.svelte';
</script>

<style type="text/sass">
h1 {
  font-size: 2rem;
}
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

</style>
<SharedHead title="SpeakWriteListen.com Newsletter"
  description="A short email each week with communication tips, tactic, mental models, and ideas for improvement.  No fluff, all focused on helping you improve."
/>

<div class="container">
  <h1>Weekly Communication Tips</h1>
  <p>I send out a short email each week with communication tips, tactic, mental models, and ideas for improvement.  No fluff, all focused on helping you improve.</p>

  <EmailSignup />

  {#if posts.length}
  <h2>Recent Tips</h2>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}

  <a href="blog/c/weekly-tips">See all &rsaquo;</a>
  {/if}
</div>

