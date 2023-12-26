<script lang="ts">
	const phoneNumber = '+919840848800';

	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		ImagePlaceholder,
		Skeleton,
		TextPlaceholder
	} from 'flowbite-svelte';
</script>

<div class="relative px-8">
	<Navbar class="fixed start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4">
		<NavBrand href="/">
			<img
				src="/images/flowbite-svelte-icon-logo.svg"
				class="me-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Flowbite</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi href="/" active={true}>Home</NavLi>
			<NavLi href="/about">About</NavLi>
			<NavLi href="/docs/components/navbar">Navbar</NavLi>
			<NavLi href="/pricing">Pricing</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</Navbar>
	<div style="height:300px;" class="overflow-scroll pb-16">
		<Skeleton class="mb-8 mt-16" />
		<ImagePlaceholder class="my-8" />
		<TextPlaceholder class="my-8" />
	</div>
</div>

<nav>
	<NavUl>
		<NavLi>
			<img
				width="100px"
				src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/IMG-20231218-WA0002-HDmA8qZrZUZuAU3SECsRJyZaNVCT0m.jpg"
				alt="jf"
			/>
		</NavLi>
	</NavUl>
	<ul>
		<li><a href="/">BFJK</a></li>
		<li><a href="/">Projects</a></li>
		<li>
			<a href={`https://wa.me/${phoneNumber}`} target="_blank" class="secondary">
				<i class="fab fa-whatsapp"></i> Chat
			</a>
		</li>
	</ul>
</nav>
