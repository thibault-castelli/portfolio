<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { Snippet } from 'svelte';
	import type { BadgeLink } from '$lib/types/BadgeLink';

	interface Props {
		children: Snippet;
		title: string;
		badges: BadgeLink[];
	}

	const { children, title, badges }: Props = $props();
</script>

<Card.Root
	class="h-full w-full bg-secondary-foreground transition hover:border-primary hover:shadow-2xl"
>
	<Card.Header>
		<Card.Title class="flex items-center gap-3">
			<div class="inline-block rounded-2xl border bg-accent p-3">{@render children?.()}</div>
			{title}
		</Card.Title>
	</Card.Header>
	<Card.Content>
		<div>
			{#each badges as badge, index (index)}
				<a href={badge.link} target="_blank">
					<Badge
						class="hover:text-shadow mx-1 cursor-default transition hover:border-primary hover:bg-accent-foreground hover:text-primary hover:shadow-2xl"
					>
						{badge.text}
					</Badge>
				</a>
			{/each}
		</div>
	</Card.Content>
</Card.Root>
