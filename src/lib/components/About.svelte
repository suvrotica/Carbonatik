<script lang="ts">
	import { imgURL1, imgURL2 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Strategy from '$lib/components/Strategy.svelte';
	import Global from '$lib/components/Global.svelte';

	let quoteProps = {
    heading: 'Responsible Mining',
    subheading: 'Carbonatik',
    content: `At Carbonatik, we are committed to responsible mining practices that prioritize environmental stewardship and community well-being. Our operations span diverse mineral resources including graphite, mica, quartz, and granite. We believe in transparency and genuine sustainability efforts, moving beyond superficial claims to implement concrete measures that minimize our environmental impact.

Our approach includes:
• Advanced technologies for efficient resource extraction
• Comprehensive land rehabilitation programs
• Community engagement and local economic development initiatives
• Rigorous environmental monitoring and reporting

We're dedicated to setting new industry standards for responsible mining, ensuring that our operations contribute positively to both local communities and the global economy while respecting our planet's resources.`,
    image: imgURL1
  };
</script>

<section id="about">
	<PanAcross />

	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		video="Videos/gem.mp4"
		alignment="right"
		quote_string="Turning carbon footprints into stepping stones for a sustainable future, Carbonatik leads the way in innovative offset solutions."
	/>
	<Strategy />
	<Global />
</section>