<script lang="ts">
	import { imgURL19} from '$lib/global';
	import HeroTemplate from '$lib/components/HeroTemplate.svelte';
	let additionalContent = `
		<br class="mb-12" />
		<a href="mailto:bf@bfjkcorp.com" class="email">@BRENDAN</a>
		<a href="mailto:jk@bfjkcorp.com" class="email">@JOSEPH</a>
	`;
	let quoteProps = {
		heading: 'Contact Us',
		subheading: 'NOW',
		content: `<section>${additionalContent}</section> <br> <p>Let’s discuss your real estate aspirations. At BFJK, we understand that finding the perfect property or making a wise investment is about more than just business—it's about realizing your dreams and building your future.

Contact us today for an in-depth conversation about your specific needs and desires. Whether you are interested in exploring our extensive portfolio of properties, seeking lucrative investment opportunities, or simply wish to schedule a personalized consultation to discuss your options, our dedicated team is here to guide you every step of the way.

Our expertise spans a wide range of real estate sectors, including residential, commercial, and luxury properties. We pride ourselves on our ability to match discerning clients with exceptional properties that meet their lifestyle and investment goals.

If you have any questions, need detailed information, or want to arrange a meeting with one of our skilled real estate advisors, please don't hesitate to reach out. Please give us a call, or drop by our office. We are committed to providing you with tailored advice and exceptional service, ensuring a seamless and satisfying experience.

At BFJK, your real estate vision is our passion. Let us help you turn your aspirations into reality.</p>

`,
		image: imgURL19
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
