<script lang="ts">
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

<nav class="fixed left-0 top-0 z-20 w-full bg-neutral-100 dark:bg-neutral-800">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-0">
		<a href="/" class="flex items-center">
			<Logo />
		</a>
		<div class="flex md:order-2">
			<ToggleDark />

			<button
				data-collapse-toggle="navbar-sticky"
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 md:hidden dark:text-neutral-400 dark:hover:bg-neutral-600 dark:focus:ring-neutral-500"
				aria-controls="navbar-sticky"
				aria-expanded="false"
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
			class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
			id="navbar-sticky"
		>
			<ul
				class="mt-4 flex flex-col rounded-lg border border-neutral-200 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 dark:border-neutral-600"
			>
				<li>
					<a
						href="/"
						class="lara-light block rounded bg-neutral-300
                                py-1 pl-3 pr-4 text-neutral-950 hover:bg-neutral-400 md:bg-transparent md:text-neutral-600 md:hover:bg-transparent md:hover:text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300"
						aria-current="page">Home</a
					>
				</li>
				<li>
					<a
						href="#AboutUs"
						class="lara-light block rounded py-1 pl-3 pr-4 text-neutral-600 hover:bg-neutral-200 md:hover:bg-transparent md:hover:text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300"
						>About Us</a
					>
				</li>
				<li>
					<a
						href="#ExecutiveTeam"
						class="lara-light block rounded py-1 pl-3 pr-4 text-neutral-600 hover:bg-neutral-200 md:hover:bg-transparent md:hover:text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300"
						>Executive Team</a
					>
				</li>
				<li>
					<a
						href="#Portfolio"
						class="lara-light block rounded py-1 pl-3 pr-4 text-neutral-600 hover:bg-neutral-200 md:hover:bg-transparent md:hover:text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300"
						>Portfolio</a
					>
				</li>
				<li>
					<a
						href="#ContactUs"
						class="lara-light block rounded py-1 pl-3 pr-4 text-neutral-600 hover:bg-neutral-200 md:hover:bg-transparent md:hover:text-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-neutral-300"
						>Contact Us</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
