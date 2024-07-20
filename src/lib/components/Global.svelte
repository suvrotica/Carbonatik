<script lang="ts">
	import { imgURL10 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import Leaflet from '$lib/components/Leaflet.svelte';

	let quoteProps = {
		heading: 'Presence',
		subheading: 'GLOBAL',
		content: `Our mining operations span key international locations, establishing a global footprint that leverages localized expertise while capitalizing on global mineral trends. With strategic presence in the USA, India, Sri Lanka, and Dubai, our dedicated teams possess intimate knowledge of local geological landscapes and regulatory environments, securing unique mining opportunities and providing a competitive advantage in navigating complex mineral extraction and processing scenarios across borders.

Explore our global reach through our interactive world map:

1. Global Overview: Pins highlight our operational hubs in the USA, India, Sri Lanka, and Dubai, showcasing our international presence.

2. Sri Lanka Focus: Zoom in to see detailed locations of our diverse mining operations across Sri Lanka.

3. Mine-Specific Information: Click on each pin to reveal:
   - Mine type (graphite, gold mica, ruby granite, quartz, or gemstones)
   - Current production capacity
   - Estimated reserves
   - Key technologies employed
   - Environmental initiatives

This interactive feature provides a comprehensive view of our global mining operations, emphasizing our strong presence in Sri Lanka and our commitment to transparent, technologically advanced, and environmentally conscious mining practices across all our locations.`,
		image: imgURL10
	};
</script>
<Leaflet />
<section id="Strategy">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="right"
	/>
</section>