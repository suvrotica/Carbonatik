<script lang="ts">
	import { imgURL18 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Anand Malaimegam',
		subheading: 'CHIEF OPERATING OFFICER - MENA AND ASIA PACIFIC',
		content: `Anand Malaimegam, as the Chief Operating Officer at Carbonatik, brings a wealth of experience in managing complex mining operations. His expertise in streamlining processes and optimizing resources has been crucial in expanding Carbonatik's presence in these key markets.

With a deep understanding of the unique geological challenges and regulatory landscapes in MENA and Asia Pacific, Anand plays a pivotal role in tailoring Carbonatik's mining strategies to meet regional needs. His strategic approach ensures that our operations are not only efficient but also culturally sensitive and economically viable within local contexts.

Anand's leadership is characterized by his ability to build strong teams and foster innovation in mining techniques. He has been instrumental in developing partnerships with local businesses, governments, and geological institutions, creating a robust network that amplifies Carbonatik's impact in responsible mineral extraction across these regions.

His commitment to operational excellence and sustainable mining practices has significantly contributed to Carbonatik's reputation as a reliable and forward-thinking partner in the mining industry throughout MENA and Asia Pacific. Under Anand's guidance, Carbonatik has successfully implemented state-of-the-art technologies and environmentally conscious extraction methods, setting new standards for responsible mining in the region.`,
		image: imgURL18
	};
</script>

<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	imageClass="imgPhoto"
	mediaColumns="md:col-span-0"
	contentColumns="md:col-span-12"
	alignment="right"
/>