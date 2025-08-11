<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		tabCount?: number;
	}
	const { children, tabCount = 0 }: Props = $props();
</script>

<span class={['text-blue-400', tabCount === 1 && 'ml-8']}>{@render children?.()}</span>
