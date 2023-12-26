<<<<<<< HEAD
<script>
	import '../app.pcss';
</script>

<slot />
=======
<script lang="ts">
	import '../app.pcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
	/>
	<title>Brendan Fitzpatrick and Joseph Kamalesh © BFJK 2024</title>
	<!-- <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"> -->
</svelte:head>

<main class="container">
	<article>
		<header><Header></Header></header>

		<slot />
		<footer><Footer></Footer></footer>
	</article>
</main>

<style>
	:global(html, header) {
		background: linear-gradient(
				rgba(0, 0, 0, 0.788),
				/* Semi-transparent black */ rgba(0, 0, 0, 0.5)
			),
			url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/solid-concrete-wall-textured-backdrop%20(2)-lYSbVWMRdqU0JyrNgVYaUd3H9v9TJN.jpg');

		background-repeat: repeat;
	}
	:global(article) {
		background: linear-gradient(
				rgba(0, 0, 0, 0.788),
				/* Semi-transparent black */ rgba(0, 0, 0, 0.5)
			),
			url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/R-1Aw8TAwKbV3IU2OLbTX8vGFjJ77R3c.jpg');
	}
	:global(header, footer) {
		background-image: url('https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/b1-Ex5Dj5hJO0OYCKmFcx1jRSt57q5aUl.png');
		background-repeat: repeat;
	}
	:global(nav, ul) {
		background-color: rgb(3, 3, 3);
		margin: 10px;
		padding: 5px;
		padding: auto;
		margin-bottom: 10px;
	}
	:global(a, li) {
		margin: 0px;
		padding: 0px;
	}
	:global(a) {
		text-decoration: none;
		color: white;
	}

	:global(p) {
		text-align: justify;
		color: white;
	}

	@media (max-width: 1480px) {
		:global(p) {
			font-size: 16px;
		}
	}
	@media (max-width: 480px) {
		:global(p) {
			font-size: 12px;
		}
	}

	:global(.grid-section) {
		display: grid;
		grid-template-columns: 2fr 6fr;
		gap: 20px;
		align-items: center;
	}

	:global(.grid-image img) {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	/* Additional styling for the text and other elements */
	:global(.grid-text) {
		padding: 0px;
		margin: 0px;
	}
</style>
>>>>>>> 7a452f58cb61ed64cf66102480dd01b6b2494841
