<script lang="ts">
	import { imgURL18 } from '$lib/global'; 
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Suvro Ghosh',
		subheading: 'CHIEF SCIENTIFIC OFFICER',
		content: `Suvro Ghosh, as the Chief Scientific Officer of Carbonatik, spearheads our innovative approach to responsible and efficient mining operations. With a distinguished background in geology and environmental science, Suvro brings cutting-edge scientific expertise to Carbonatik's mission of sustainable resource extraction.

His role is pivotal in developing and implementing advanced geological assessment methodologies, ensuring that our mining approaches are grounded in the latest scientific understanding and meet the highest standards of efficiency and environmental responsibility. Suvro leads our research and development efforts, constantly exploring new technologies and strategies to enhance the precision and sustainability of our mineral extraction processes.

Under Suvro's guidance, Carbonatik has made significant strides in optimizing mining operations across various mineral sectors, including graphite, mica, quartz, and granite. His work has been instrumental in developing advanced geological modeling techniques and data analysis tools that provide unprecedented accuracy in resource assessment and extraction planning.

Suvro's commitment to scientific integrity and innovation has not only strengthened Carbonatik's position as a leader in responsible mining practices but has also contributed significantly to the broader scientific community's understanding of sustainable resource management. His expertise is frequently sought after in international geology forums and scientific conferences, further cementing Carbonatik's reputation as a scientifically-driven organization at the forefront of the mining industry.`,
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