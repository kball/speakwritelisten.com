<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: white;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #777;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>
<svelte:head>
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Speak. Write. Listen." />
  <meta name="twitter:site" content="@speakwritelist" />
</svelte:head>


<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} SpeakWriteListen.com.
      A project of <a href="https://zendev.com" target="_blank">ZenDev, LLC</a>.
    </span>
  </footer>
</div>
