<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Link from '$lib/components/Link.svelte';

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

<header class="space-y-6 p-6">
	<h1 class="text-2xl">&gt thibault castelli</h1>
	<nav>
		<span class="text-muted">$pages = [</span>
		{#each links as link (link.href)}
			<Link href={link.href} text={link.text} />,
		{/each}
		<span class="text-muted">];</span>
	</nav>
</header>

<main class="p-6">
	{@render children?.()}
</main>

<footer></footer>
