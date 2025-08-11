<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavLink from '$lib/components/NavLink.svelte';
	import { Linkedin, Github } from '@lucide/svelte';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/3d/Scene.svelte';
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();

	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/skills', text: 'Skills' },
		{ href: '/experience', text: 'Experience' },
		{ href: '/education', text: 'Education' },
		{ href: '/projects', text: 'Projects' },
		{ href: '/contact', text: 'Contact' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="items-center justify-between space-y-6 px-6 pt-6 pb-3 xl:flex">
	<h1 class="mb-0 text-3xl">
		<span class="text-primary">&gt</span> thibault castelli<span class="blink text-primary">_</span>
	</h1>
	<nav class="mt-5 xl:mt-0">
		<span class="text-muted-foreground">$pages = [</span>
		{#each links as link, i (link.href)}
			<NavLink href={link.href} text={link.text} />{#if i === links.length - 1}{:else},&nbsp;
			{/if}
		{/each}
		<span class="text-muted-foreground">];</span>
	</nav>
</header>

<main class="container mx-auto p-6">
	{@render children?.()}
</main>

<footer class="mb-3 flex items-center justify-between border-t px-6 pt-3">
	<a href="/CASTELLI%20Thibault%20-%20CV%202025.pdf" download="">
		<Button>getResume()</Button>
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
