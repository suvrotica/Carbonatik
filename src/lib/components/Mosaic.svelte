<script>
	// @ts-nocheck

	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	// Animation properties
	const opacity = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	const scale = tweened(0.5, {
		duration: 400,
		easing: cubicOut
	});
	onMount(() => {
		opacity.set(1);
		scale.set(1);
	});
</script>

<div class="grid-container">
	<div class="cell a">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/v2-V2vqJLtwJb3xS9pw8fyTFnjqBttSFx.png"
			alt="abstract building"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>
	<div class="cell b">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/v3-RCcUyTCArztMREhnyVe2veykQFW8s4.png"
			alt="dna building"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>
	<div class="cell c">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/h2-bn24LsV96AKFqQroMginji6ROHC9j8.png"
			alt="horizontal city"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>
	<div class="cell d">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/v0-KTJUDrbFVaC1B7CCqS8giVtfUzjq4f.png"
			alt="geometric"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>
	<div class="cell g">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/DALL%C2%B7E%202023-12-18%2008.36.03%20-%20A%20modern%20commercial%20building%20designed%20for%20office%20space,%20featuring%20a%20sleek%20and%20innovative%20architectural%20style.%20The%20building%20has%20a%20glass%20facade,%20with%20a%20-X4zbI7uG4QUeB7OjnE7Vj8TfCgFjfK.png"
			alt="square building"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>

	<div class="cell j">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/v1-cF8BNZFx7vc3pDzEEhae61oT3zdQgw.png"
			alt="tall building"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>
	<div class="cell k">
		<img
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/h1-BOaxQdeQqOiACnf1NfdNSHHjHT01y0.png"
			alt="wide building"
			style:opacity={$opacity}
			style:transform={`scale(${$scale})`}
		/>
	</div>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: repeat(4, 1fr); /* Adjust the number of rows as needed */
		grid-gap: 0px;
		padding: 0px;
		background-color: #f4f4f4;
	}

	/* Assign grid areas */
	.grid-container {
		grid-template-areas:
			'a a a b c c c c'
			'a a a d d d j j'
			'g g g d d d j j'
			'k k k k k k j j';
	}

	/* Style for each cell */
	.cell {
		padding: 1px;
		/* display: flex;
            align-items: center;
            justify-content: center;
            height: 100px; Adjust height as needed */
	}

	.cell img {
		transition:
			opacity 0.4s cubic-out,
			transform 0.4s cubic-out;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Colors for cells */
	.a {
		background-color: black;
		grid-area: a;
	}
	.b {
		background-color: black;
		grid-area: b;
	}
	.c {
		background-color: black;
		grid-area: c;
	}
	.d {
		background-color: black;
		grid-area: d;
	}

	.g {
		background-color: black;
		grid-area: g;
	}
	.j {
		background-color: black;
		grid-area: j;
	}
	.k {
		background-color: black;
		grid-area: k;
	}
	.cell img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
