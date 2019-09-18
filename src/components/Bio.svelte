<script>
  export let longform = false;
</script>
<style>
  div {
    align-items: center;
  }
  @media (min-width: 640px) {
    div {
      display: flex;
    }
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    /* border: 3px solid #fd6378; */
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 640px) {
    img {
      margin-left: 0;
      margin-right: 20px;
    }
  }

  p {
    font-size: 1.125rem;
  }
</style>
{#if longform}
<div>
  <img src="profile-pic.jpg" alt="Kevin Ball">
  <p>
    Hi, I'm Kevin Ball (alias <strong>KBall</strong>). I'm a software engineer turned trainer and coach focused on
    communication and leadership skills, and I started SpeakWriteListen.com because I was frustrated about the lack of
    practical, actionable resources for people interested in learning better communication skills.
  </p>
</div>
<p>
  Along with healthy portions of luck and hard work, I believe a focus on communication skills has been fundamental to
  my personal and professional success. My ability to speak, write, and listen effectively is a huge part of why I've
  been able to run my own business at <a href="https://zendev.com">ZenDev, LLC</a>, speak around the world at
  conferences, be a regular contributor on a <a href="https://changelog.com/jsparty">popular podcast</a>, and celebrate over 20 years in a stable romantic relationship.

</p>
<p>
With SpeakWriteListen.com, my goal is to share the lessons I've learned along the way, as well as create a place to <a
href="https://www.swyx.io/writing/learn-in-public/">learn in public</a> about communication skills. Through the articles, daily tips, and linked resources you can learn to speak better, write better, and listen better so that you can live a fuller, more empowered, and happier life.
</p>

{:else}
<div>
  <img src="profile-pic.jpg" alt="Kevin Ball">
  <p>
    Hi, I'm Kevin Ball (alias <strong>KBall</strong>). I'm a software engineer turned trainer and coach focused on
    communication and leadership skills.
    You can follow me on <a href="https://www.twitter.com/kbal11" target="_blank">Twitter</a>,
    or check out my software-focused work at <a href="https://www.zendev.com" target="_blank">Zendev.com</a>.
  </p>
</div>
{/if}
