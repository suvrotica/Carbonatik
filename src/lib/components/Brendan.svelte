<script lang="ts">
	import { imgURL18 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Brendan T Fitzpatrick',
		subheading: 'PRESIDENT',
		content: `Brendan T Fitzpatrick, President of Carbonatik, is a key driving force behind the company's mission to provide innovative carbon offset solutions. With his extensive experience in business strategy and environmental initiatives, Brendan plays a crucial role in shaping Carbonatik's approach to addressing global climate challenges.

As President, Brendan works closely with CEO Joseph Kamalesh Swaminathan and the rest of the executive team to steer Carbonatik's strategic direction. His leadership is instrumental in developing and implementing sustainable practices that make a real impact on reducing carbon footprints for businesses and individuals worldwide.

Brendan's expertise lies in bridging the gap between environmental science and practical business solutions. He has been pivotal in establishing Carbonatik as a leader in the carbon offset market, ensuring that the company's methodologies are not only scientifically sound but also economically viable and easily implementable for clients.

Under Brendan's guidance, Carbonatik has developed a reputation for integrity, innovation, and measurable results in carbon offsetting. His commitment to transparency and efficacy in carbon reduction strategies has set new standards in the industry, making Carbonatik a trusted partner for organizations seeking to make a genuine environmental impact.

Brendan's vision aligns perfectly with Carbonatik's mission to create a sustainable future. He continues to drive the company forward, fostering partnerships, encouraging research and development, and ensuring that Carbonatik remains at the forefront of the global effort to combat climate change.`,
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