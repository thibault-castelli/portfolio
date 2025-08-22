<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { fade } from 'svelte/transition';
	import EducationCard from '$lib/components/cards/EducationCard.svelte';
	import { Computer, Speaker, FlaskConical } from '@lucide/svelte';
	import DotCube from '$lib/components/3d/DotCube.svelte';
</script>

<svelte:head>
	<title>Education | Thibault Castelli</title>
</svelte:head>

<PageTitle title="Education" />

<section class="grid grid-cols-1 place-items-center gap-6 lg:grid-cols-2 xl:grid-cols-3" in:fade>
	<EducationCard
		title="DEC - Computer Science"
		school={{
			text: 'Cégep Garneau, Canada',
			link: 'https://www.cegepgarneau.ca/programmes/tous-les-programmes/informatique/'
		}}
		dates="2022 - 2025"
		description="Canadian diploma, comparable to 2 years of HBO."
	>
		{#snippet text()}
			<li>Received the <em>Excellence Scholarship</em>.</li>
			<li>
				Application, Web and Mobile development using <strong>.Net Core</strong>,
				<strong>VueJS</strong>,
				<strong>Express</strong>, <strong>Python</strong>, <strong>Kotlin</strong>.
			</li>
			<li>
				Database <strong>MySQL</strong>, <strong>Oracle</strong>, <strong>MongoDB</strong>
			</li>
		{/snippet}
		{#snippet icon()}<Computer class="fade-to-orange" />{/snippet}
	</EducationCard>

	<EducationCard
		title="BTS Audiovisual - Sound engineering"
		school={{
			text: 'A.I&S, France',
			link: 'https://www.ais-formation.com/formations/bts-metiers-du-son'
		}}
		dates="2015 - 2017"
		description="French diploma, comparable to 2 years of HBO."
	>
		{#snippet text()}
			<li>
				<strong>Recording</strong>, <strong>mixing</strong> and <strong>mastering</strong> music and
				movies using <em>Pro Tools</em>.
			</li>
			<li>
				<strong>Live</strong> music mixing using <em>Yamaha</em> and <em>Midas</em> mixing boards.
			</li>
		{/snippet}
		{#snippet icon()}<Speaker class="fade-to-orange" />{/snippet}
	</EducationCard>

	<EducationCard
		title="Scientific Baccalaureate"
		school={{
			text: 'Lycée Pierre Mendes, France',
			link: 'https://www.site.ac-aix-marseille.fr/lyc-mendesfrance-vitrolles/spip/'
		}}
		dates="2012 - 2015"
		description="French diploma, comparable to a VWO diploma."
	>
		{#snippet text()}
			<li><em>Electronic</em> and <em>mechanical</em> speciality.</li>
		{/snippet}
		{#snippet icon()}<FlaskConical class="fade-to-orange" />{/snippet}
	</EducationCard>
</section>

<section class="mx-auto mt-8 h-20 w-full" in:fade={{ duration: 800 }}>
	<DotCube zoom={65} dotSize={0.35} controlSpeed={0.02} />
</section>

<style>
	strong,
	em {
		color: var(--primary);
	}
</style>
