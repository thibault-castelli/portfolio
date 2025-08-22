<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import NavLink from '$lib/components/NavLink.svelte';
	import { Linkedin, Github, Menu } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import { goto } from '$app/navigation';

	let { children } = $props();

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/experience', text: 'Experience' },
		{ href: '/skills', text: 'Skills' },
		{ href: '/projects', text: 'Projects' },
		{ href: '/education', text: 'Education' },
		{ href: '/contact', text: 'Contact' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Thibault Castelli</title>
	<meta name="description" content="Thibaut Castelli Portfolio - Full-Stack Web Developer" />
</svelte:head>

<header
	class="sticky top-0 z-10 flex items-center justify-between space-y-6 border-b border-b-primary bg-background px-6 py-4 shadow-2xl md:block xl:flex"
>
	<a href="/" class="mb-0">
		<h1 class="mb-0 text-3xl">
			<span class=" text-primary">&gt</span> thibault castelli<span class="blink text-primary"
				>_</span
			>
		</h1>
	</a>

	<nav class="mt-5 mb-0 xl:mt-0">
		<div class="hidden md:block">
			<span class="text-muted-foreground">$pages = [</span>
			{#each links as link, i (link.href)}
				<NavLink href={link.href} text={link.text} />{#if i === links.length - 1}{:else}<span
						class="text-muted-foreground">,&nbsp;</span
					>
				{/if}
			{/each}
			<span class="text-muted-foreground">];</span>
		</div>
	</nav>

	<div class="md:hidden">
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger><Menu /></Menubar.Trigger>
				<Menubar.Content>
					{#each links as link (link.href)}
						<Menubar.Item onclick={() => goto(link.href)}
							><NavLink href={link.href} text={link.text} /></Menubar.Item
						>
					{/each}
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>
	</div>
</header>

<main class="container mx-auto grow p-6">
	{@render children?.()}
</main>

<footer
	class="sticky bottom-0 z-10 flex items-center justify-between border-t border-t-primary bg-background px-6 py-3"
>
	<a href="/CASTELLI%20Thibault%20-%20CV%202025.pdf" download="">
		<Button class="hover:cursor-pointer">getResume()</Button>
	</a>

	<div class="flex gap-3">
		<a
			href="https://www.linkedin.com/in/thibault-castelli/"
			target="_blank"
			class="transition hover:text-primary"
		>
			<Linkedin />
		</a>
		<a
			href="https://github.com/thibault-castelli"
			target="_blank"
			class="transition hover:text-primary"
		>
			<Github />
		</a>
	</div>
</footer>

<style>
	.blink {
		animation: blink-animation 1.5s steps(2, start) infinite;
	}

	@keyframes blink-animation {
		to {
			visibility: hidden;
		}
	}
</style>
