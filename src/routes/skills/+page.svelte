<script lang="ts">
	import { Code, Cloud, Database } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import SkillCard from '$lib/components/cards/SkillCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import type { BadgeLink } from '$lib/types/BadgeLink';

	const frontendBadges: BadgeLink[] = [
		{ text: 'React', link: 'https://react.dev/' },
		{ text: 'Redux', link: 'https://redux.js.org/' },
		{ text: 'NextJS', link: 'https://nextjs.org/' },
		{ text: 'VueJS', link: 'https://vuejs.org/' },
		{ text: 'Svelte', link: 'https://svelte.dev/' },
		{ text: 'TypeScript', link: 'https://www.typescriptlang.org/' }
	];
	const backendBadges: BadgeLink[] = [
		{ text: '.Net Core', link: 'https://dotnet.microsoft.com/en-us/apps/aspnet' },
		{ text: 'NestJS', link: 'https://nestjs.com/' },
		{ text: 'Express', link: 'https://expressjs.com/' },
		{ text: 'Laravel', link: 'https://laravel.com/' },
		{ text: 'MySQL', link: 'https://www.mysql.com/' },
		{ text: 'PostgreSQL', link: 'https://www.postgresql.org/' },
		{ text: 'MongoDB', link: 'https://www.mongodb.com/' },
		{ text: 'Supabase', link: 'https://supabase.com/' }
	];
	const devOpsBadges: BadgeLink[] = [
		{ text: 'Docker', link: 'https://www.docker.com/' },
		{ text: 'Git', link: 'https://git-scm.com/' },
		{ text: 'GitHub Actions', link: 'https://github.com/features/actions' },
		{ text: 'Linux', link: 'https://en.wikipedia.org/wiki/Linux' },
		{ text: 'Vercel', link: 'https://vercel.com/' },
		{ text: 'Vite', link: 'https://vite.dev/' }
	];
</script>

<svelte:head>
	<title>Skills | Thibault Castelli</title>
</svelte:head>

<PageTitle title="Skills" />

<section class="mb-10 text-center">Add something here</section>

<section class="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3" in:fade>
	<SkillCard title="Frontend Development" badges={frontendBadges}><Code /></SkillCard>
	<SkillCard title="Backend Development" badges={backendBadges}><Database /></SkillCard>
	<SkillCard title="Cloud & DevOps" badges={devOpsBadges}><Cloud /></SkillCard>
</section>
