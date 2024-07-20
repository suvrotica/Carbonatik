<script lang="ts">
	import { imgURL11 } from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	import PanAcross from '$lib/components/PanAcross.svelte';
	import Vision from '$lib/components/Vision.svelte';
	import Risk from '$lib/components/Risk.svelte';
	import ClientSatisfaction from '$lib/components/ClientSatisfaction.svelte';
	import Responsible from '$lib/components/Responsible.svelte';

	let quoteProps = {
		heading: 'Portfolio',
		subheading: 'PORTFOLIO OF INNOVATION',
		content: `Our mining operations showcase a pioneering integration of cutting-edge technologies, setting new industry standards for efficiency, safety, and sustainability. We've deployed advanced robotics systems across our diverse portfolio of graphite, gold mica, granite, quartz, and gemstone mines. Autonomous drilling rigs and robotic sorting systems enhance precision and productivity in our extraction processes. In our underground operations, we utilize remote-controlled robots for exploration and mapping, significantly reducing risks to human personnel.

Our commitment to innovation extends to data-driven decision making. We've implemented AI-powered predictive maintenance systems that optimize equipment performance and minimize downtime. In our gemstone division, we employ state-of-the-art spectroscopic technology and machine learning algorithms for rapid, accurate gemstone classification and quality assessment.

Environmental stewardship is enhanced through our use of drone technology for real-time monitoring of environmental impacts, coupled with IoT sensors that provide continuous data on air and water quality. This proactive approach ensures we maintain the highest standards of environmental responsibility while maximizing operational efficiency.

By continually investing in and developing these new technological capabilities, we not only enhance our competitive edge but also drive the entire mining industry towards a more efficient, safe, and sustainable future.`,
		image: imgURL11
	};
</script>

<section id="portfolio">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="left"
	/>
</section>
<Risk />
<ClientSatisfaction />
<Responsible />