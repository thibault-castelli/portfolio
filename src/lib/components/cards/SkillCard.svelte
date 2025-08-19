<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { slide } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		title: string;
		badgeNames: string[];
	}

	const { children, title, badgeNames }: Props = $props();
</script>

<Card.Root
	class="h-full w-full max-w-96 min-w-56 bg-secondary-foreground transition hover:border-primary hover:shadow-2xl"
>
	<Card.Header>
		<Card.Title class="flex items-center gap-3">
			<div class="inline-block rounded-2xl border bg-accent p-3">{@render children?.()}</div>
			{title}
		</Card.Title>
	</Card.Header>
	<Card.Content>
		<div in:slide={{ duration: 800 }}>
			{#each badgeNames as badgeName, index (index)}
				<Badge
					class="hover:text-shadow mx-1 cursor-default transition hover:border-primary hover:bg-accent-foreground hover:text-primary hover:shadow-2xl"
					>{badgeName}</Badge
				>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
