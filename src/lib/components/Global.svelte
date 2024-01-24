<script lang="ts">
	import { imgURL10 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Presence',
		subheading: 'GLOBAL',
		content: `With a strong presence in key international markets, we have established a global footprint that enables us to capitalize on localized expertise while staying attuned to global trends. Our dedicated teams of professionals possess an intimate knowledge of local market dynamics, securing unique investment opportunities and providing a competitive advantage in navigating complex real estate landscapes across borders.`,
		image: imgURL10
	};
</script>

<section id="Strategy">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="right"
	/>
</section>
