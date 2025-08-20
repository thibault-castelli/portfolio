<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Snippet } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { BadgeLink } from '$lib/types/BadgeLink';

	interface Props {
		children: Snippet;
		title: string;
		company: BadgeLink;
		dates: string;
		descriptions: string[];
	}

	const { children, title, company, dates, descriptions }: Props = $props();
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
				<a href={company.link} target="_blank">
					<Badge
						class="hover:text-shadow mx-1 cursor-default transition hover:border-primary hover:bg-accent-foreground hover:text-primary hover:shadow-2xl"
					>
						{company.text}
					</Badge>
				</a>
				<p>{dates}</p>
			</div>
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<ul class="list-disc space-y-3 px-5">
			{#each descriptions as description, index (index)}
				<li>{description}</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
