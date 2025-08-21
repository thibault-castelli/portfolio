<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import type { Snippet } from 'svelte';

	interface Props {
		carouselItems: Snippet;
	}

	const { carouselItems }: Props = $props();

	let api = $state<CarouselAPI>();

	const count = $derived(api ? api.scrollSnapList().length : 0);
	let current = $state(0);

	$effect(() => {
		if (api) {
			current = api.selectedScrollSnap() + 1;
			api.on('select', () => {
				current = api!.selectedScrollSnap() + 1;
			});
		}
	});
</script>

<Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="mx-auto w-[90%]">
	<Carousel.Content>
		{@render carouselItems()}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
<div class="py-3 text-center text-sm text-muted-foreground">
	Slide {current} of {count}
</div>
