<script lang="ts">
	import { imgURL7 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';

	let quoteProps = {
		id: 'portfolio',
		heading: 'Luxury and Elegance',
		subheading: 'PORTFOLIO',
		content: `At BFJK Corp, our portfolio is a reflection of our commitment to redefining luxury real estate. We meticulously manage a diverse collection of properties, each selected for its unique character and potential to offer an unparalleled experience.

Our portfolio of luxury hotels stands as a cornerstone of our asset management excellence. Each hotel is a masterpiece, embodying a perfect blend of comfort, elegance, and world-class amenities.

In the bustling heart of America's cities like New York, Chicago, and Los Angeles, our urban hotels offer a sanctuary of luxury amidst the city's energy. These properties combine modern sophistication with timeless elegance, catering to both business and leisure travelers.

Our international collection includes serene getaways in locales like Bali, Maldives, and the French Riviera. These resorts are oases of tranquility, offering stunning natural landscapes, unmatched privacy, and luxurious comfort.

We are expanding our portfolio with high-end commercial properties, including state-of-the-art office spaces and retail hubs. These projects are designed with a focus on sustainability, technological integration, and architectural innovation.
`,
		image: imgURL7
	};
</script>

<HeroTemplate
	id={quoteProps.id}
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	image={quoteProps.image}
	alignment="right"
/>
