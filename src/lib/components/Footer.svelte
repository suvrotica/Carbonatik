<script>
	import Logo from './Logo.svelte';
</script>

<footer class="mt-16 bg-white p-4 sm:p-6 dark:bg-neutral-900">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="/contact" class="flex items-center">
					<Logo />
				</a>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Resources
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-4">
							<a href="/contact" class="hover:underline">Real Estate Guides</a>
						</li>
						<li>
							<a href="/contact" class="hover:underline">BFJK Blog</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Follow us
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-4">
							<a href="/contact" class="hover:underline">Twitter</a>
						</li>
						<li>
							<a href="/contact" class="hover:underline">Facebook</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-neutral-900 dark:text-white">
						Legal
					</h2>
					<ul class="text-neutral-600 dark:text-neutral-400">
						<li class="mb-4">
							<a href="/contact" class="hover:underline">Privacy Policy</a>
						</li>
						<li>
							<a href="/contact" class="hover:underline">Terms &amp; Conditions</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr class="my-6 border-neutral-200 sm:mx-auto lg:my-8 dark:border-neutral-700" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-neutral-500 sm:text-center dark:text-neutral-400"
				>© 2024 <a href="/contact" class="hover:underline">BFJK</a>. All Rights Reserved.
			</span>
			<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
				<!-- Insert social media icons and links here -->
			</div>
		</div>
	</div>
</footer>
