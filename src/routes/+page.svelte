<script>
	import { Alert, Button } from 'flowbite-svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Feature1 from '$lib/components/Feature1.svelte';
	import Feature2 from '$lib/components/Feature2.svelte';
	import Fearure3 from '$lib/components/Feature3.svelte';
	import Feature4 from '$lib/components/Feature4.svelte';
	import CTA1 from '$lib/components/CTA1.svelte';
	import CTA2 from '$lib/components/CTA2.svelte';
	import Content1 from '$lib/components/Content1.svelte';
	import Gallery1 from '$lib/components/Gallery1.svelte';
	import Stat from '$lib/components/Stat.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	let colorOrder = 1;
</script>

<Navigation />
<Hero />
<Feature1 />
<CTA1 />
<Pricing />
<Feature2 />
<Stat />
<Gallery1 />
<CTA2 />
<Fearure3 />
<Content1 />
<Feature4 />
<Testimonials />
<Footer />
