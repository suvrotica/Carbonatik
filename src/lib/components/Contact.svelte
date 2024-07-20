<script lang="ts">
	const imgSide='/Images/sem1.png';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	let additionalContent = `
		<br class="mb-12" />
		<a href="mailto:jks@minecorp.com" class="email">@JOSEPH</a>
		<a href="mailto:btf@minecorp.com" class="email">@BRENDAN</a>
		<a href="mailto:am@minecorp.com" class="email">@ANAND</a>
		<a href="mailto:sm@minecorp.com" class="email">@SEGAR</a>
		<a href="mailto:sg@minecorp.com" class="email">@SUVRO</a>
		<a href="mailto:jj@minecorp.com" class="email">@JESSICA</a>
	`;
	let quoteProps = {
		heading: 'Contact Us',
		subheading: 'COLLABORATE',
		content: `<section>${additionalContent}</section> <br> <p>Let's explore the possibilities in mining and mineral resources. At our company, we understand that finding the right mining opportunities or making strategic investments in minerals is about more than just business—it's about unlocking the earth's potential and building a sustainable future.

Contact our leadership team directly to discuss specific aspects of our operations:

- Joseph Kamalesh Swaminathan (Chairman and CEO): For strategic partnerships and overall company vision
- Brendan T Fitzpatrick (President): For operational overview and investment opportunities
- Anand Malaimegam (COO - MENA and Asia Pacific): For operations in the MENA and Asia Pacific regions
- Segar Muthumurugesu (VP Operations - Sri Lanka): For our Sri Lankan operations
- Suvro Ghosh (Chief Scientific Officer): For technological innovations and research collaborations
- Jessica Jason (VP Business Development and PR): For business inquiries and media relations

Whether you're looking to explore our diverse portfolio of mineral resources, seeking lucrative investment opportunities in graphite, gold mica, ruby granite, quartz, or precious gemstones, or wish to discuss potential collaborations, our dedicated team is here to guide you.

Our expertise spans a wide range of mining operations, from large-scale graphite production to specialized gemstone extraction and processing. We pride ourselves on our ability to match discerning clients and partners with exceptional mineral resources that meet their industrial needs or investment goals.

If you have any questions about our mining technologies, need detailed information on our mineral reserves, or want to arrange a meeting with one of our mining experts, please don't hesitate to reach out. We are committed to providing you with tailored advice and exceptional service, ensuring a productive and satisfying partnership.

At our company, your vision for mineral resource utilization is our passion. Let us help you turn your mining aspirations into reality.</p>

`,
		image: imgSide
	};
</script>

<section id="contact">
	<HeroTemplate
		heading={quoteProps.heading}
		subheading={quoteProps.subheading}
		content={quoteProps.content}
		image={quoteProps.image}
		alignment="right"
	/>
</section>