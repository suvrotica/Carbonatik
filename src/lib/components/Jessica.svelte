<script lang="ts">
	import { imgURL18 } from '$lib/global'; 
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Jessica Jason',
		subheading: 'VICE PRESIDENT - BUSINESS DEVELOPMENT AND PUBLIC RELATIONS',
		content: `Jessica Jason, as the Vice President of Business Development and Public Relations at Carbonatik, plays a crucial role in expanding our global reach and enhancing our public image in the mining industry. With her extensive experience in corporate communications and strategic partnerships, Jessica has been instrumental in positioning Carbonatik as a leading voice in responsible and innovative mining practices.

Her expertise lies in crafting compelling narratives around Carbonatik's mission and achievements, effectively communicating the importance of our sustainable mining solutions to a diverse range of stakeholders. Jessica's leadership in business development has been key to forging strategic alliances with corporations, governments, and industry bodies, significantly expanding Carbonatik's client base and project portfolio across our graphite, mica, quartz, and granite operations.

Under Jessica's guidance, Carbonatik has seen remarkable growth in its market presence and brand recognition within the global mining sector. Her innovative approach to public relations has not only raised awareness about our state-of-the-art mining initiatives but has also contributed to broader public understanding of responsible resource extraction and its role in sustainable economic development.

Jessica's commitment to transparency and stakeholder engagement has been crucial in building trust and credibility in the mining industry. Her efforts have been pivotal in showcasing Carbonatik's success stories and demonstrating the tangible impact of our environmentally conscious mining projects. Through her work, Jessica has been inspiring more organizations to adopt responsible mining practices, setting new standards for the industry.`,
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