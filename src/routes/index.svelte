<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`feed.xml`).then(() => {
      return this.fetch('sitemap.xml')
    });
  }
</script>
<style>
  .hero {
    z-index: 1;
    position: relative;
    margin-bottom: 2em;
  }
  .hero:after {
    content: " ";
    display: block;
    background-color: #c9f4f6;
    width: 100vw;
    left: 0;
    top: 0;
    height: 100%;
    position: absolute;
    margin-left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
    margin-right: 4em;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: .8em;
    font-style: italic;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
      margin-right: 0;
    }
  }
  .prompt {
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #ddd;
  }
</style>

<script>
import EmailSignup from '../components/EmailSignup.svelte';
import SharedHead from '/components/SharedHead.svelte';
</script>

<SharedHead image='logo-512.png' />

<div class="hero">
<div class="home-container">
  <div class="home-copy">
    <h1>Speak. Write. Listen.</h1>
    <p>Improve your career, your relationships, and your self-confidence by becoming
    a better communicator.</p>
  </div>

  <figure>
    <img alt='People presenting' src='undraw_presentation.svg'>
  </figure>
</div>
</div>
<div class="container prompt">
  <h3>Get Weekly Communication Tips</h3>
  <p>I send out a short email each week with communication tips, tactic, mental models, and ideas for improvement.  No fluff, all focused on helping you improve.</p>
   <EmailSignup/>
 </div>

 <div class="container">
   <h3>About SpeakWriteListen.com</h3>
    <p>This website is about making you a better communicator. It's filled with techniques, lessons learned, and quick tips that you can use to improve your life.</p>
    <p>The premise is simple:</p>

    <ol>
      <li>We all communicate</li>
      <li>Better communication means better lives</li>
      <li>Communication skills are learnable</li>
    </ol>

    <p>Right now, the best place to get started is by checking out out some of our <a href="/blog">recent articles</a>.</p>

 </div>
