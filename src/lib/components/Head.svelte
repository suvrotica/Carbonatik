<script lang="ts">
	import ToggleDark from './ToggleDark.svelte';
	import Logo from './Logo.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import GoldLine from './GoldLine.svelte';

	let isNavOpen = writable(false); // State to toggle the nav menu

	function toggleNav() {
		isNavOpen.update((n) => !n); // Toggle the navigation menu
	}

	// Close the nav menu when the window is resized to a wider screen
	onMount(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 768) {
				isNavOpen.set(false);
			}
		});
	});
</script>

<nav>
	<Logo />
	<div class="flex md:order-2">
		<ToggleDark />

		<button
			on:click={toggleNav}
			data-collapse-toggle="navbar-sticky"
			type="button"
			class="hamburger"
			aria-controls="navbar-sticky"
			aria-expanded={$isNavOpen}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 17 14"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 1h15M1 7h15M1 13h15"
				/>
			</svg>
		</button>
	</div>
	<div
		class:hidden={!$isNavOpen}
		class="w-full items-center justify-between md:order-1 md:flex md:w-auto"
		id="navbar-sticky"
	>
		<ul
			class="m-0 flex flex-col rounded-lg border border-neutral-200 p-0 font-medium md:flex-row md:space-x-8 md:border-0 dark:border-neutral-600"
		>
			<li>
				<a href="/" aria-current="page">Home</a>
			</li>
			<li>
				<a href="/">About Us</a>
			</li>
			<li>
				<a href="/">Executive Team</a>
			</li>
			<li>
				<a href="/">Portfolio</a>
			</li>
			<li>
				<a href="/#ContactUs">Contact Us</a>
			</li>
		</ul>
	</div>
</nav>
<GoldLine />
