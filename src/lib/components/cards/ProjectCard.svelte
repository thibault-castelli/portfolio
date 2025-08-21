<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Snippet } from 'svelte';
	import { Github, Wifi } from '@lucide/svelte';
	import type { BadgeLink } from '$lib/types/BadgeLink';
	import { Badge } from '$lib/components/ui/badge';

	interface Props {
		icon: Snippet;
		title: string;
		description: Snippet;
		badges: BadgeLink[];
		image: Snippet;
		githubLink: string;
		liveLink?: string;
	}

	const { icon, title, description, badges, image, githubLink, liveLink }: Props = $props();
</script>

<Card.Root
	class="h-full w-full bg-secondary-foreground transition select-none hover:border-primary hover:shadow-sm hover:shadow-primary"
>
	<Card.Header>
		<Card.Title class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3">
					{@render icon()}
				</div>
				{title}
			</div>
			<div class="flex gap-3">
				<a href={githubLink} target="_blank" class="transition hover:text-primary">
					<Github />
				</a>
				{#if liveLink}
					<a href={liveLink} target="_blank" class="transition hover:text-primary">
						<Wifi />
					</a>
				{/if}
			</div>
		</Card.Title>
		<Card.Description>
			{#each badges as badge, index (index)}
				<a href={badge.link} target="_blank">
					<Badge
						class="hover:text-shadow mx-2 transition hover:border-primary hover:bg-background hover:text-primary hover:shadow-sm hover:shadow-primary"
					>
						{badge.text}
					</Badge>
				</a>
			{/each}
		</Card.Description>
	</Card.Header>
	<Card.Content>
		<div>
			{@render description()}
		</div>
		<div class="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
			{@render image()}
		</div>
	</Card.Content>
	<Card.Footer></Card.Footer>
</Card.Root>
