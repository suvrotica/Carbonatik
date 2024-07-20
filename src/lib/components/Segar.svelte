<script lang="ts">
	import { imgURL18 } from '$lib/global'; 
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Segar Muthumurugesu',
		subheading: 'VICE PRESIDENT - OPERATIONS - SRI LANKA',
		content: `Segar Muthumurugesu, serving as the Vice President of Operations at Carbonatik. His deep understanding of the country's geological landscape, regulatory environment, and business ecosystem has been invaluable in establishing and expanding Carbonatik's presence in the region.

Segar's role is crucial in implementing Carbonatik's mining strategies in Sri Lanka, ensuring that our operations are optimized to meet the unique challenges of the local terrain while adhering to international standards of quality and safety. His leadership has been instrumental in developing partnerships with local industries, government bodies, and communities, creating a strong network that supports our responsible mining initiatives.

With a keen focus on operational efficiency and sustainability, Segar has been at the forefront of introducing innovative mining techniques and environmental management practices in Sri Lanka. His efforts have significantly contributed to optimizing our extraction processes for graphite, quartz, and other minerals, while minimizing environmental impact and fostering positive relationships with local communities.

Segar's commitment to fostering a culture of operational excellence and environmental responsibility within Carbonatik's Sri Lankan operations has not only driven our company's growth but also contributed to the overall economic development of the region. Under his guidance, our mining projects in Sri Lanka have become models of sustainable resource extraction, balancing productivity with environmental stewardship.`,
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