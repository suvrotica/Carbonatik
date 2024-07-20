<script lang="ts">
	import { imgURL18 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Anand Malaimegam',
		subheading: 'CHIEF OPERATING OFFICER - MENA AND ASIA PACIFIC',
		content: `Anand Malaimegam, as the Chief Operating Officer for MENA and Asia Pacific at Carbonatik, brings a wealth of experience in managing complex operations across diverse regions. His expertise in streamlining processes and optimizing resources has been crucial in expanding Carbonatik's presence in these key markets.

With a deep understanding of the unique environmental challenges and regulatory landscapes in MENA and Asia Pacific, Anand plays a pivotal role in tailoring Carbonatik's carbon offset solutions to meet regional needs. His strategic approach ensures that our initiatives are not only effective but also culturally and economically aligned with local contexts.

Anand's leadership is characterized by his ability to build strong teams and foster innovation. He has been instrumental in developing partnerships with local businesses, governments, and environmental organizations, creating a robust network that amplifies Carbonatik's impact in reducing carbon footprints across these regions.

His commitment to operational excellence and sustainable practices has significantly contributed to Carbonatik's reputation as a reliable and forward-thinking partner in the fight against climate change in MENA and Asia Pacific.`,
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