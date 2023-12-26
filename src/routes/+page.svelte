<script>
	// You can import other components or scripts here
	import Mosaic from '$lib/components/Mosaic.svelte';
</script>

<Mosaic />

<section id="featured-project">
	<hr />
	<h5>Featured Project</h5>
	<figure class="grid">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			class="grid-image"
			src="https://wqz50k0spm0gyalr.public.blob.vercel-storage.com/h4-68kTUjbmKkvtPmmFBiHaB1Vr1M0pDS.png"
			alt="Laptop"
		/>
		<figcaption class="grid-text">
			<p>
				Our firm excels in the dynamic field of office and corporate real estate, specializing in
				the acquisition and development of premier commercial properties. We understand the evolving
				needs of modern businesses, and thus, we focus on strategically located, high-grade office
				spaces that promise both functionality and style. Our portfolio features state-of-the-art
				buildings equipped with cutting-edge amenities, designed to foster productivity and
				innovation. From sleek, contemporary office complexes in bustling urban centers to sprawling
				corporate campuses set in serene environments, we offer versatile solutions that cater to a
				diverse range of corporate clients. By combining aesthetic appeal with practical design, we
				create workspaces that not only meet the current demands of businesses but also anticipate
				future trends, ensuring our properties remain at the forefront of the commercial real estate
				market.
			</p>
		</figcaption>
	</figure>
</section>

<style>
	section,
	h5,
	p {
		background: linear-gradient(to bottom, black, rgb(15, 14, 14));
		padding-left: 5px;
	}
	p {
		padding: 1px;
	}
	img {
		margin-left: 5px;
		padding-bottom: 10px;
	}
</style>
