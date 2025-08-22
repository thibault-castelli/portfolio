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
		description="Canadian diploma"
	>
		<Computer class="fade-to-orange" />
	</EducationCard>

	<EducationCard
		title="BTS Audiovisual - Sound engineering"
		school={{
			text: 'A.I&S, France',
			link: 'https://www.ais-formation.com/formations/bts-metiers-du-son'
		}}
		dates="2015 - 2017"
		description="French diploma"
	>
		<Speaker class="fade-to-orange" />
	</EducationCard>

	<EducationCard
		title="Scientific Baccalaureate"
		school={{
			text: 'Lycée Pierre Mendes, France',
			link: 'https://www.site.ac-aix-marseille.fr/lyc-mendesfrance-vitrolles/spip/'
		}}
		dates="2012 - 2015"
		description="French diploma"
	>
		<FlaskConical class="fade-to-orange" />
	</EducationCard>
</section>

<section class="mx-auto mt-10 h-20 w-full xl:h-[198px]" in:fade={{ duration: 800 }}>
	<DotCube zoom={35} dotSize={0.2} controlSpeed={0.02} />
</section>
