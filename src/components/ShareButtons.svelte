
<script>
  export let title;
  export let url;
  export let via = 'speakwritelisten'

  const encodedTitle =encodeURIComponent(title);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}&via=${via}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
	const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodedTitle}`
  const mailtoUrl = `mailto:?subject=Article:+${encodedTitle}&body=${url}`

	// https://gist.github.com/joshcarr/2f861bd37c3d0df40b30
	function windowHeightAndWidth() {
		const w = window,
			d = document,
			e = d.documentElement,
			g = d.getElementsByTagName('body')[0],
			width=w.innerWidth||e.clientWidth||g.clientWidth,
			height=w.innerHeight||e.clientHeight||g.clientHeight;
		return {height, width};
	}

	function openFacebook(e) {
		const dims = windowHeightAndWidth();
		window.open(facebookUrl, 'fbShareWindow', 'height=450, width=550, top=' + (dims.height / 2 - 275) + ', left=' + (dims.width / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	}
	function openTwitter(e) {
const dims = windowHeightAndWidth();
		window.open(twitterUrl, 'twitterShareWindow', 'height=600, width=600, top=' + (dims.height / 2 - 300) + ', left=' + (dims.width / 2 - 300) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	}

  function openLinkedin(e) {
    const dims = windowHeightAndWidth();
		window.open(linkedinUrl, 'linkedinShareWindow', 'height=600, width=600, top=' + (dims.height / 2 - 300) + ', left=' + (dims.width / 2 - 300) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  }
</script>

<style>
	.social {
		display: flex;
		justify-content: center;
	}
  .social img {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 4px;
    padding: 5px;
  }
  .twitter {
    background-color: #1DA1F2;
  }
  .facebook {
    background-color: #4172B8;
  }
  .linkedin {
    background-color: #0077B5;
    padding: 5px 5px 10px;
  }
  .email {
    background-color: #888;
  }
</style>


<span class="social">
  <a target="_blank" on:click="{openTwitter}" href="{twitterUrl}"><img class="twitter" src="twitter.svg" alt="tweet" /></a>
  <a target="_blank" on:click="{openFacebook}" href="{facebookUrl}"><img class="facebook" src="facebook.svg" alt="post to facebook"/></a>
  <a target="_blank" on:click="{openLinkedin}" href="{linkedinUrl}"><img class="linkedin" src="linkedin.svg" alt="post to linkedin"/></a>
  <a target="_blank" href="{mailtoUrl}"><img class="email" src="email.svg" alt="send in email"/></a>
</span>

