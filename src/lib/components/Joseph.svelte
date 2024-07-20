<script lang="ts">
	import { imgURL12 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Joseph Kamalesh Swaminathan',
		subheading: 'CHAIRMAN AND CEO',
		content: `As the Chairman and CEO of Carbonatik, Joseph Kamalesh Swaminathan brings a wealth of expertise and visionary leadership to the forefront of the mining industry. His journey in responsible resource extraction is marked by an exceptional blend of innovative thinking and strategic execution. Joseph's profound understanding of global mineral markets and his ability to devise effective mining strategies have been instrumental in establishing Carbonatik as a pioneer in sustainable mining solutions.

Joseph's approach is rooted in a comprehensive grasp of geology, mining technology, and market dynamics. His keen ability to identify emerging trends in the industry and adapt Carbonatik's strategies accordingly has consistently positioned the company at the cutting edge of mining technologies and methodologies. Under his guidance, Carbonatik has developed a diverse portfolio of high-value mineral extraction projects across various sectors, including graphite, mica, quartz, and granite, spanning multiple geographies.

As a leader, Joseph is committed to driving Carbonatik beyond mere resource extraction. His vision encompasses a holistic approach to responsible mining, fostering partnerships with local communities, governments, and industry stakeholders to create lasting, positive impact. He has been pivotal in integrating advanced technologies and data-driven approaches into Carbonatik's operations, ensuring the highest standards of safety, efficiency, and environmental stewardship in our mining initiatives.

Joseph's leadership extends beyond the boardroom, actively engaging in global mining forums and policy discussions. His expertise and insights have made him a respected voice in the international dialogue on sustainable resource management. Through his efforts, Carbonatik has not only achieved remarkable growth but also set new benchmarks in responsible mining practices and socio-economic development in the regions where we operate.`,
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
