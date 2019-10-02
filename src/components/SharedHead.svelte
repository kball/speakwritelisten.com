<script>
import { stores } from '@sapper/app';
const { preloading, page, session } = stores();
export let title = "Speak. Write. Listen. ";
export let description = "Become a better communicator. Improve your career, your relationships, and your self-confidence.";
export let author = "Kevin Ball";
export let authorTwitter = "@kbal11"
export let blogPost = null;
export let image = null;


let finalImage = image;

let path;
$: url = `https://www.speakwritelisten.com${path}`
page.subscribe((obj) => {
  path = obj.path;
});
let ldJson = {}
let ldJsonStr = 'foo';
$: {
  ldJson = {
    "@context":"http://schema.org",
    author: {"@type":"Person",name: author},
    headline: title,
    description,
    url
  };
  if (page.path === '/') {
    ldJson["@type"] = "WebSite";
  } else if (blogPost) {
    ldJson["@type"] = "BlogPosting";
    ldJson.datePublished = blogPost.date;
    ldJson.dateModified = blogPost.date;
    ldJson.mainEntityOfPage = {
      "@type": "WebPage",
      "@id": url,
    }

    if (blogPost.image) {
      finalImage = blogPost.image;
      ldJson.image = blogPost.image;
    }
  } else {
    ldJson["@type"] = "WebPage";
  }
  if(image) {
    ldJson.image = image;
  }
  ldJsonStr= '<script type="application/ld+json">' + JSON.stringify(ldJson) + '<\/script>';
}
</script>

<svelte:head>
  <meta name="author" content="{author}" />
  <title>{title}</title>
  <link rel="canonical" href="{url}" />
  <meta property="og:url" content="{url}" />
  <meta property="og:title" content="{title}" />
  {#if finalImage}
  <meta property="og:image" content="{finalImage}" />
  <meta property="twitter:image" content="{finalImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  {:else}
  <meta name="twitter:card" content="summary" />
  {/if}
  <meta property="og:title" content="{title}" />
  <meta name="description" content="{description}" />
  <meta name="og:description" content="{description}" />
  <meta name="twitter:site" content="@speakwritelist" />
  <meta name="twitter:creator" content="{authorTwitter}" />
  {#if blogPost}
  <meta property="og:type" content="article" />
  {/if}
  {@html ldJsonStr}
</svelte:head>
