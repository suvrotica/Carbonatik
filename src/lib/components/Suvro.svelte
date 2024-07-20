<script lang="ts">
	import { imgURL18 } from '$lib/global'; 
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Suvro Ghosh',
		subheading: 'CHIEF SCIENTIFIC OFFICER',
		content: `Suvro Ghosh, as the Chief Scientific Officer of Carbonatik, stands at the forefront of our innovative approach to carbon offset solutions. With a distinguished background in environmental science and climate research, Suvro brings cutting-edge scientific expertise to Carbonatik's mission of combating climate change.

His role is pivotal in developing and validating Carbonatik's carbon offset methodologies, ensuring that our approaches are grounded in the latest scientific understanding and meet the highest standards of efficacy and reliability. Suvro leads our research and development efforts, constantly exploring new technologies and strategies to enhance the impact of our carbon reduction initiatives.

Under Suvro's guidance, Carbonatik has made significant strides in quantifying and verifying carbon offsets across various sectors. His work has been instrumental in developing advanced modeling techniques and data analysis tools that provide unprecedented accuracy in measuring the impact of our projects.

Suvro's commitment to scientific integrity and innovation has not only strengthened Carbonatik's position as a leader in the carbon offset market but has also contributed significantly to the broader scientific community's understanding of effective climate change mitigation strategies. His expertise is frequently sought after in international climate forums and scientific conferences, further cementing Carbonatik's reputation as a scientifically-driven organization.`,
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