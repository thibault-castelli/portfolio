<script lang="ts">
	import { Code, Computer, Cloud, Database } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import SkillCard from '$lib/components/cards/SkillCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

	const frontendBadges = ['React', 'NextJS', 'VueJS', 'Svelte', 'TypeScript', 'TailwindCss'];
	const backendBadges = [
		'.Net Core',
		'NestJS',
		'Express',
		'Node.JS',
		'Laravel',
		'MySQL',
		'PostgreSQL',
		'MongoDB',
		'REST APIs'
	];
	const devOpsBadges = ['Docker', 'CI/CD', 'Git', 'Linux'];
	const toolBadges = ['JetBrains', 'Jest', 'Redux', 'Vercel', 'Vite'];
</script>

<svelte:head>
	<title>Skills | Thibault Castelli</title>
</svelte:head>

<PageTitle title="Skills" />

<section class="mb-10 text-center">Add something here</section>

<section
	class="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
	in:fade
>
	<SkillCard title="Frontend Development" badgeNames={frontendBadges}><Code /></SkillCard>
	<SkillCard title="Backend Development" badgeNames={backendBadges}><Database /></SkillCard>
	<SkillCard title="Cloud & DevOps" badgeNames={devOpsBadges}><Cloud /></SkillCard>
	<SkillCard title="Tools & Technologies" badgeNames={toolBadges}><Computer /></SkillCard>
</section>
