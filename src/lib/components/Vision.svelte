<script lang="ts">
	import { imgURL2 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	let quoteProps = {
		id: 'vision',
		heading: 'Our Vision',
		subheading: 'MAJESTIC',
		content: `At BFJK Corp, we redefine luxury real estate. Our portfolio spans majestic hotel chains in the heart of America’s bustling cities and serene international locales. Our vision is to be the gold standard in luxury property management, where each asset is a testament to our commitment to excellence.

We pride ourselves on our strategic approach to asset management, which goes beyond traditional property management. We focus on maximizing value and returns for our investors while ensuring the highest level of service and experience for guests and residents. Our properties are not just buildings; they are vibrant ecosystems that blend seamlessly into their local communities, adding value and prestige.

Our team of experts specializes in identifying and capitalizing on unique investment opportunities. We offer a full spectrum of asset management services, including market analysis, property acquisition, development, and operational management. Our approach is tailored to each property, ensuring that we leverage local insights and global trends to maintain and enhance the value of our assets.

Innovation is at the heart of everything we do at BFJK Corp. We embrace cutting-edge technology and sustainable practices to create properties that are not only luxurious but also environmentally responsible and future-proof. Our commitment to sustainability reflects our dedication to being a responsible steward of the properties we manage and the communities they serve.

Whether it's a luxury hotel in a metropolitan city or a tranquil resort in an exotic location, each BFJK property is a unique masterpiece, crafted with attention to detail and a relentless pursuit of perfection. Our mission is to create unparalleled experiences for our guests, setting new benchmarks in luxury and hospitality.

Partner with BFJK Corp and experience the pinnacle of luxury real estate. Let us show you how our assets can enrich your investment portfolio and elevate your lifestyle.

`,
		image: imgURL2
	};
</script>

<HeroTemplate
	id={quoteProps.id}
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	image={quoteProps.image}
	alignment="left"
/>
