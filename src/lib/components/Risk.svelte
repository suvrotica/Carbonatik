<script lang="ts">
	const imgSide='/Images/mine.jpg';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';

	let quoteProps = {
		heading: 'Risk',
		subheading: 'MITIGATION',
		content: `Our mining operations in Sri Lanka face specific challenges that we address with cutting-edge technologies and robust strategies. Geological risks are managed using advanced 3D seismic imaging and Ground Penetrating Radar (GPR) to accurately map ore bodies and identify potential hazards. We employ real-time monitoring systems, including wireless sensor networks and SCADA systems, to detect early signs of ground instability or water ingress.

Environmental risks, particularly in our graphite and gemstone operations, are mitigated through state-of-the-art water treatment plants using reverse osmosis and activated carbon filtration. We've implemented dry-stack tailings management systems to reduce water usage and minimize the risk of tailings dam failures.

To address operational risks, we utilize IoT-enabled equipment with predictive maintenance algorithms, reducing unexpected downtime. Our fleet management system, powered by GPS and AI, optimizes haulage routes and equipment utilization. We've also implemented a blockchain-based supply chain tracking system to ensure the traceability and authenticity of our gemstones.

Market risks, including price volatility in graphite and precious stones, are hedged through a combination of forward contracts and options. Our in-house market intelligence team uses machine learning algorithms to forecast market trends and adjust production accordingly.

Regulatory compliance in Sri Lanka's evolving mining sector is ensured through our custom-built compliance management software, which tracks all relevant regulations and our adherence to them in real-time. This system interfaces directly with local regulatory bodies for seamless reporting.`,
		image: imgSide
	};
</script>

<section>
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		video="Videos/mica.mp4"
		
		mediaColumns="md:col-span-5"
		contentColumns="md:col-span-7"
		alignment="left"
	/>
</section>