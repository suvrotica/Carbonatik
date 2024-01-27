<script lang="ts">
	import { imgURL14 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Managing Risk',
		subheading: 'OPTIMIZED',
		content: `We recognize that effective risk management is pivotal in safeguarding our clients' assets and maximizing their investment potential. Our comprehensive risk management strategies encompass thorough market analysis, thorough due diligence, project feasibility studies, and ongoing monitoring of operational and market risks. By continually assessing and managing risks, we strive to protect and enhance the value of our portfolio while delivering steady and reliable returns.`,
		image: imgURL14
	};
</script>

<section>
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		imageClass="imgPhoto"
		mediaColumns="md:col-span-3"
		contentColumns="md:col-span-9"
		alignment="right"
	/>
</section>
