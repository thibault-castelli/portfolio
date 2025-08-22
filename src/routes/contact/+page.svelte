<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Mail, MapPin, Phone } from '@lucide/svelte';
	import DotCube from '$lib/components/3d/DotCube.svelte';
	import { fade } from 'svelte/transition';
	import ContactCard from '$lib/components/cards/ContactCard.svelte';
</script>

<PageTitle title="Contact" />

<div class="flex flex-col gap-5 md:flex-row md:gap-20">
	<section class="space-y-6">
		<ContactCard>
			{#snippet icon()}
				<Mail class="fade-to-orange" />
			{/snippet}
			{#snippet text()}
				<a href="mailto:thibault.castelli@pm.me" class="hover:text-primary hover:underline">
					thibault.castelli@pm.me
				</a>
			{/snippet}
		</ContactCard>

		<ContactCard>
			{#snippet icon()}
				<Phone class="fade-to-orange" />
			{/snippet}
			{#snippet text()}
				<a href="tel:+33649385562" class="hover:text-primary hover:underline">+33649385562</a>
			{/snippet}
		</ContactCard>

		<ContactCard>
			{#snippet icon()}
				<MapPin class="fade-to-orange" />
			{/snippet}
			{#snippet text()}
				<p>Keizer Karel V Singel 8-04, 5615PE, Eindhoven, Netherlands</p>
			{/snippet}
		</ContactCard>
	</section>

	<div class="h-auto w-full md:min-h-[60vh] md:w-1/2" in:fade={{ duration: 800 }}>
		<DotCube zoom={2} dotSize={0.04} controlSpeed={0.15} />
	</div>
</div>
