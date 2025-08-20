<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Snippet } from 'svelte';
	import { Badge } from '$lib/components/ui/badge';
	import type { BadgeLink } from '$lib/types/BadgeLink';

	interface Props {
		icon: Snippet;
		title: string;
		company: BadgeLink;
		dates: string;
		descriptions: Snippet;
	}

	const { icon, title, company, dates, descriptions }: Props = $props();
</script>

<Card.Root
	class="h-full w-full bg-secondary-foreground transition hover:scale-[1.03] hover:border-primary hover:shadow-md hover:shadow-primary"
>
	<Card.Header>
		<Card.Title class="flex items-center gap-3">
			<div class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3">
					{@render icon()}
				</div>
				{title}
			</div>
		</Card.Title>
		<Card.Description>
			<div class="mt-3 flex items-center justify-between">
				<a href={company.link} target="_blank">
					<Badge
						class="hover:text-shadow transition hover:border-primary hover:bg-background hover:text-primary hover:shadow-sm hover:shadow-primary"
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
			{@render descriptions()}
		</ul>
	</Card.Content>
</Card.Root>
