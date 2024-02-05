<script lang="ts">
	import { imgURL12 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Joseph Kamalesh ( JK ) ',
		subheading: 'FOUNDER',
		content: `As a co-founder and pivotal force behind BFJK Corp, Joseph Kamalesh brings a profound depth of knowledge and experience in real estate and asset management. His journey in the industry is marked by an exceptional blend of strategic insight and pragmatic decision-making. Joseph's expertise in identifying and capitalizing on lucrative real estate opportunities has been instrumental in cementing BFJK Corp's reputation as a leader in the asset management sector.

Joseph's approach is rooted in a comprehensive understanding of market dynamics and a keen eye for properties with untapped potential. His ability to foresee market trends and adapt strategies accordingly has consistently generated significant returns for BFJK's diverse portfolio, which includes luxury residential complexes, commercial hubs, and hotel properties.

Under Joseph's leadership, BFJK Corp has not only achieved remarkable growth but also set new standards in sustainable and ethical asset management. His vision for the company extends beyond financial success, encompassing a commitment to community development and environmental stewardship.`,
		image: imgURL12
	};
</script>

<a href="mailto:jk@bfjkcorp.com" class="bg-neutral-500 hover:bg-neutral-700 text-neutral-100 p-4 m-4 rounded-full text-xs">jk@bfjkcorp.com</a>


<HeroTemplate
	heading={quoteProps.heading}
	subheading={quoteProps.subheading}
	content={quoteProps.content}
	imageClass="imgPhoto"
	mediaColumns="md:col-span-0"
	contentColumns="md:col-span-12"
	alignment="right"
/>
