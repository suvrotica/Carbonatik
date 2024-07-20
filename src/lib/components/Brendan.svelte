<script lang="ts">
	import { imgURL18 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Brendan T Fitzpatrick',
		subheading: 'PRESIDENT',
		content:`Brendan T Fitzpatrick, President of Carbonatik, is a key driving force behind the company's mission to provide innovative and sustainable mining solutions. With his extensive experience in business strategy and responsible resource extraction, Brendan plays a crucial role in shaping Carbonatik's approach to addressing global mineral demands while maintaining environmental stewardship.

As President, Brendan works closely with CEO Joseph Kamalesh Swaminathan and the rest of the executive team to steer Carbonatik's strategic direction. His leadership is instrumental in developing and implementing sustainable mining practices that make a real impact on resource efficiency and environmental preservation across our graphite, mica, quartz, and granite operations worldwide.

Brendan's expertise lies in bridging the gap between geological science and practical business solutions. He has been pivotal in establishing Carbonatik as a leader in the mining industry, ensuring that the company's extraction methodologies are not only scientifically sound and environmentally responsible but also economically viable and easily implementable for diverse mining projects.

Under Brendan's guidance, Carbonatik has developed a reputation for integrity, innovation, and measurable results in sustainable mining. His commitment to transparency and efficacy in resource extraction strategies has set new standards in the industry, making Carbonatik a trusted partner for organizations seeking to balance mineral production with environmental stewardship.

Brendan's vision aligns perfectly with Carbonatik's mission to create a sustainable future in the mining sector. He continues to drive the company forward, fostering partnerships with local communities and industry stakeholders, encouraging research and development in mining technologies, and ensuring that Carbonatik remains at the forefront of responsible resource extraction in the global mining industry.`,
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