<script lang="ts">
	import { onMount, onDestroy, type Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		onEnter: () => void;
	}

	const { children, onEnter }: Props = $props();

	const threshold = 0.2;
	const rootMargin = '0px';

	let htmlElement: HTMLElement;
	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					onEnter();
					observer.unobserve(entry.target);
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(htmlElement);
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<div bind:this={htmlElement}>
	{@render children?.()}
</div>
