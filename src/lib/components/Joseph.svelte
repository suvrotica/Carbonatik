<script lang="ts">
	import { imgURL12 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Joseph Kamalesh Swaminathan',
		subheading: 'CHAIRMAN AND CEO',
		content: `As the Chairman and CEO of Carbonatik, Joseph Kamalesh Swaminathan brings a wealth of expertise and visionary leadership to the forefront of the carbon offset industry. His journey in environmental sustainability is marked by an exceptional blend of innovative thinking and strategic execution. Joseph's profound understanding of global climate challenges and his ability to devise effective carbon reduction strategies have been instrumental in establishing Carbonatik as a pioneer in carbon offset solutions.

Joseph's approach is rooted in a comprehensive grasp of environmental science, policy, and market dynamics. His keen ability to identify emerging trends in sustainability and adapt Carbonatik's strategies accordingly has consistently positioned the company at the cutting edge of carbon offset technologies and methodologies. Under his guidance, Carbonatik has developed a diverse portfolio of impactful carbon reduction projects across various sectors and geographies.

As a leader, Joseph is committed to driving Carbonatik beyond mere carbon offsetting. His vision encompasses a holistic approach to environmental stewardship, fostering partnerships with businesses, governments, and communities to create lasting, positive change. He has been pivotal in integrating advanced technologies and data-driven approaches into Carbonatik's operations, ensuring the highest standards of transparency and efficacy in carbon reduction initiatives.

Joseph's leadership extends beyond the boardroom, actively engaging in global climate forums and policy discussions. His expertise and insights have made him a respected voice in the international dialogue on climate change mitigation. Through his efforts, Carbonatik has not only achieved remarkable growth but also set new benchmarks in sustainable business practices and environmental impact.`,
		image: imgURL12
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
