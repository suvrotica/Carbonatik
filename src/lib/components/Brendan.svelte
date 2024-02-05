<script lang="ts">
	import { imgURL18 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Brendan Fitzpatrick ( BF ) ',
		subheading: 'FOUNDER',
		content: `Brendan Fitzpatrick, co-founder of BFJK Corp, stands as a beacon of innovation and excellence in the real estate asset management industry. With a rich background in real estate finance and development, Brendan has been a key architect in building BFJK's prestigious portfolio. His expertise lies in leveraging financial acumen and market insight to drive growth and maximize asset value.

Brendan's strategic leadership has been crucial in navigating the complexities of the real estate market, consistently delivering results that exceed investor expectations. His forward-thinking approach has led BFJK Corp to embrace technological advancements, ensuring efficiency and competitiveness in a rapidly evolving industry.

At the core of Brendan's philosophy is a commitment to building lasting relationships with investors, clients, and communities. He champions a holistic approach to asset management, emphasizing not only financial performance but also social responsibility and sustainability. This has established BFJK Corp as a trusted and responsible player in the asset management landscape.`,
		image: imgURL18
	};
</script>

<a href="mailto:bf@bfjkcorp.com" class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-full text-xs">bf@bfjkcorp.com</a>

<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	image={quoteProps.image}
	imageClass="imgPhoto"
	mediaColumns="md:col-span-3"
	contentColumns="md:col-span-9"
	alignment="left"
/>
