<script lang="ts">
	import GoldLine from '$lib/components/GoldLine.svelte';

	const sectionStyle =
		'bg-neutral-200 bg-contain bg-repeat bg-blend-soft-light light-bg dark:bg-neutral-950 dark:bg-blend-overlay dark:dark-bg3';
</script>

<GoldLine></GoldLine>

<section id="ContactUs" class={sectionStyle}>
	<h2
		class="classico-bold text-8xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100"
	>
		Contact Us
	</h2>

	<p class="lara-light text-2xl text-neutral-600 dark:text-neutral-300">
		Let’s discuss your real estate aspirations. Contact us for more information on our properties,
		investment opportunities, or to schedule a consultation.
	</p>
</section>
