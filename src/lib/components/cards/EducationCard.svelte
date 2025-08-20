<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Snippet } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { BadgeLink } from '$lib/types/BadgeLink';

	interface Props {
		children: Snippet;
		title: string;
		school: BadgeLink;
		dates: string;
		description: string;
	}

	const { children, title, school, dates, description }: Props = $props();
</script>

<Card.Root
	class="h-full w-full bg-secondary-foreground transition hover:border-primary hover:shadow-2xl"
>
	<Card.Header>
		<Card.Title class="flex items-center gap-3">
			<div class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3">
					{@render children?.()}
				</div>
				{title}
			</div>
		</Card.Title>
		<Card.Description>
			<div class="mt-3 flex items-center justify-between">
				<a href={school.link} target="_blank">
					<Badge
						class="hover:text-shadow mx-1 cursor-default transition hover:border-primary hover:bg-accent-foreground hover:text-primary hover:shadow-2xl"
					>
						{school.text}
					</Badge>
				</a>
				<p>{dates}</p>
			</div>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="text-xs italic">{description}</p>
	</Card.Content>
</Card.Root>
