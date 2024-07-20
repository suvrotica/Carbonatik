<script lang="ts">
	const imgSide= '/Images/goldmica.png' ;
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Strategic',
		subheading: 'FOCUS',
		content: `Our strategic focus centers on identifying and developing high-potential mineral deposits across our diverse portfolio of graphite, gold mica, ruby granite, quartz, and gemstone operations. We leverage cutting-edge geological surveying techniques and data analytics to pinpoint promising sites, ensuring optimal resource utilization. Our team of experienced geologists and mining engineers employs rigorous evaluation processes, considering factors such as mineral quality, extraction feasibility, and market demand.

We prioritize sustainable mining practices, integrating advanced technologies like autonomous drilling systems and AI-powered sorting processes to maximize efficiency while minimizing environmental impact. Our strategic approach extends to processing and refining, where we invest in state-of-the-art facilities to enhance the value of our extracted minerals. In our gemstone division, we focus on ethical sourcing and cutting-edge processing techniques to produce premium quality stones.

By strategically balancing our operations across various minerals and geographical locations, we maintain a resilient portfolio that can adapt to market fluctuations and ensure long-term value creation for our stakeholders. Our forward-thinking approach also involves continuous exploration and research into emerging mineral markets, positioning us at the forefront of the evolving global mining industry.`,
		image: imgSide
	};
</script>

<section id="Strategy">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="left"
	/>
</section>