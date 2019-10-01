<script>
  import Bio from '/components/Bio.svelte';
  import SharedHead from '/components/SharedHead.svelte';
</script>
<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>

<SharedHead title="About SpeakWriteListen.com"
  description="This website is about making you a better communicator. It's filled with techniques, lessons learned, and quick tips that you can use to improve your life."
  image="rsz_florian-klauer-489-unsplash.jpg"
/>

<div class="container">
  <h1>About</h1>
  <figure>
    <img src='rsz_florian-klauer-489-unsplash.jpg' alt='Image of a vintage typewriter.'>
    <figcaption>Photo by <a href="https://unsplash.com/@florianklauer" target="_blank">Florian Klauer</a> on Unsplash</figcaption>
  </figure>

  <p>This website is about making you a better communicator. It's filled with techniques, lessons learned, and quick tips that you can use to improve your life.</p>
  <p>The premise is simple:</p>

	<ol>
		<li>We all communicate</li>
		<li>Better communication means better lives</li>
		<li>Communication skills are learnable</li>
	</ol>

  <h3>We all communicate</h3>
  <p>We text, we tweet, we gossip, we grunt, we yell, we beg. From the moment we're born, even before we learn to speak, we're communicating our thoughts and intentions.</p>
  <p>Communication is part of being human.</p>

  <p>But just because we all communicate doesn't mean communication is <i>easy</i>.</p>
  <p>Speaking, writing, and listening effectively is incredibly hard for most of us.</p>

  <p>Public speaking is the <a
  href="https://www.psychologytoday.com/us/blog/the-real-story-risk/201211/the-thing-we-fear-more-death">number one
  fear in America</a>.

  <p>This stuff is hard. But we all do it.</p>

  <h3>Better communication means better lives</h3>

  <p>Communication is key to healthy relationships, career advancement, and self-expression.</p>

  <p>Communication skills are consistently one of the <a href="https://www.thebalancecareers.com/top-skills-employers-want-2062481">top in-demand skills for
  employers</a>.</p>

  <p>On the flip side, communication issues (or <i>lack</i> of communication skills) are one of the <a href="https://www.psychologytoday.com/us/blog/communication-success/201507/top-10-reasons-relationships-fail">top
  reasons for couples therapy and divorce</a>.</p>

  <h3>Communication skills are learnable</h3>

  <p>If you're not a natural communicator, you may feel like communication skills are a black box.</p>

  <p>Online articles about communication are usually filled with vague and generic advice, with little that is actionable.</p>

  <p>The <a
  href="https://garfinkleexecutivecoaching.com/articles/improve-your-communication-skills/9-tips-for-improving-your-communications-skills">top
  ranking article on Google</a> for the search term "improving your communication skills" at the time this site is starting contains
  advice like "Make communication a priority" and "Develop your listening skills, too".</p>

  <p>Sure, these things are great,
  but they're not very actionable. They're kind of like saying your key to getting in shape is to "make getting in shape a
  priority" and "develop your exercising skills too".</p>

  <p>This type of vague and general advice does learners a disservice. </p>

  <p>I believe communication skills are learnable, and the articles on this site are all focused on giving you concrete things you
  can do to improve either your understanding or your skills.</p>

  <h3>About Me</h3>

  <Bio longform="true"/>

</div>
