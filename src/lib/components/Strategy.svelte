<script lang="ts">
	import { imgURL9 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Strategic',
		subheading: 'FOCUS',
		content: `Our strategic focus lies in identifying and acquiring prime real estate assets in key global markets, leveraging our extensive network and deep market insights. We employ rigorous due diligence processes to ensure that our investments align with our strict criteria for quality, growth potential, and long-term value creation. Our team of experienced professionals meticulously evaluates opportunities across various geographies, selecting assets that exhibit strong appreciation potential and resilient cash flow generation.`,
		image: imgURL9
	};
</script>

<section id="Strategy">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="left"
	/>
</section>
