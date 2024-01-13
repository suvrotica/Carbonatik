<script>
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
	import ToggleDark from './ToggleDark.svelte';
	import Logo from './Logo.svelte';
</script>

<Navbar
	class="fixed start-0 top-0 z-20 w-full border-b bg-white px-2 py-2.5 sm:px-4 dark:bg-neutral-900"
>
	<Logo />
	<!-- <NavHamburger /> -->
	<!-- <NavUl>
		<NavLi href="/" active={true}>Home</NavLi>

		<NavLi href="/contact">Contact</NavLi>
	</NavUl> -->
	<ToggleDark />
</Navbar>
