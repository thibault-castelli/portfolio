<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/3d/Scene.svelte';
	import { fade } from 'svelte/transition';

	interface Props {
		children: Snippet;
		title: string;
	}

	const { children, title }: Props = $props();
</script>

<div
	class="h-full w-full rounded-lg border border-b-secondary-foreground bg-background shadow-lg"
	in:fade
>
	<section class="flex items-center rounded-t-lg bg-secondary-foreground">
		<div class="absolute ml-3 h-3 w-3 rounded-full bg-red-500"></div>
		<div class="absolute ml-8 h-3 w-3 rounded-full bg-yellow-500"></div>
		<div class="absolute ml-13 h-3 w-3 rounded-full bg-green-500"></div>
		<h2 class=" px-20 py-2">{title}</h2>
	</section>

	<article class="relative px-4 py-4 sm:px-6 sm:py-6">
		{@render children?.()}

		<div class="top-0 left-0 hidden h-full w-full lg:absolute lg:block">
			<Canvas>
				<Scene />
			</Canvas>
		</div>
	</article>
</div>
