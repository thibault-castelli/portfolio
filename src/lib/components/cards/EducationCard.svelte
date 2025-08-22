<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Snippet } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { BadgeLink } from '$lib/types/BadgeLink';

	interface Props {
		icon: Snippet;
		title: string;
		school: BadgeLink;
		dates: string;
		text?: Snippet;
		description: string;
	}

	const { icon, title, school, dates, text, description }: Props = $props();
</script>

<Card.Root
	class="h-full w-full bg-secondary-foreground transition hover:scale-[1.03] hover:border-primary hover:shadow-md hover:shadow-primary"
>
	<Card.Header class="px-3 sm:px-6">
		<Card.Title class="flex items-center gap-3">
			<div class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3">
					{@render icon()}
				</div>
				{title}
			</div>
		</Card.Title>
		<Card.Description>
			<div class="mt-3 flex flex-col items-center justify-between sm:flex-row">
				<a href={school.link} target="_blank">
					<Badge
						class="hover:text-shadow transition hover:border-primary hover:bg-background hover:text-primary hover:shadow-sm hover:shadow-primary"
					>
						{school.text}
					</Badge>
				</a>
				<p>{dates}</p>
			</div>
		</Card.Description>
	</Card.Header>
	<Card.Content class="px-3 sm:px-6">
		{#if text}
			<ul class="mb-3 list-disc space-y-3 px-1 sm:px-5">
				{@render text?.()}
			</ul>
		{/if}
		<p class="text-xs italic">{description}</p>
	</Card.Content>
</Card.Root>
