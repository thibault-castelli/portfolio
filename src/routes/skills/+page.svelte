<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Code, Computer, Cloud, Database } from '@lucide/svelte';
	import { fade, slide } from 'svelte/transition';
	import { Badge } from '$lib/components/ui/badge/index.js';
</script>

<svelte:head>
	<title>Skills | Thibault Castelli</title>
</svelte:head>

<section
	class="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	in:fade
>
	<Card.Root class="h-full w-full max-w-96 min-w-56 bg-secondary-foreground">
		<Card.Header>
			<Card.Title class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3"><Code /></div>
				Frontend Development
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div in:slide={{ duration: 700 }}>
				<Badge>React</Badge>
				<Badge>NextJS</Badge>
				<Badge>VueJS</Badge>
				<Badge>Svelte</Badge>
				<Badge>TypeScript</Badge>
				<Badge>Tailwind CSS</Badge>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root class="h-full w-full max-w-96 min-w-56 bg-secondary-foreground">
		<Card.Header>
			<Card.Title class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3"><Database /></div>
				Backend Development
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div in:slide={{ duration: 700 }}>
				<Badge>.Net Core</Badge>
				<Badge>NestJS</Badge>
				<Badge>Express</Badge>
				<Badge>Laravel</Badge>
				<Badge>MySQL</Badge>
				<Badge>PostgreSQL</Badge>
				<Badge>MongoDB</Badge>
				<Badge>REST APIs</Badge>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root class="h-full w-full max-w-96 min-w-56 bg-secondary-foreground">
		<Card.Header>
			<Card.Title class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3"><Cloud /></div>
				Cloud & DevOps
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div in:slide={{ duration: 700 }}>
				<Badge>Docker</Badge>
				<Badge>CI/CD</Badge>
				<Badge>Git</Badge>
				<Badge>Linux</Badge>
			</div>
		</Card.Content>
	</Card.Root>

	<Card.Root class="h-full w-full max-w-96 min-w-56 bg-secondary-foreground">
		<Card.Header>
			<Card.Title class="flex items-center gap-3">
				<div class="inline-block rounded-2xl border bg-accent p-3"><Computer /></div>
				Tools & Technologies
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<div in:slide={{ duration: 700 }}>
				<Badge>JetBrain</Badge>
				<Badge>Jest</Badge>
				<Badge>Redux</Badge>
				<Badge>Vercel</Badge>
				<Badge>Vite</Badge>
			</div>
		</Card.Content>
	</Card.Root>
</section>
