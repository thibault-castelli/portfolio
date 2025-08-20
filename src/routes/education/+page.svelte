<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { fade } from 'svelte/transition';
	import EducationCard from '$lib/components/cards/EducationCard.svelte';
	import { Computer, Speaker, FlaskConical } from '@lucide/svelte';
</script>

<PageTitle title="Education" />

<section class="mb-5 text-center">Add something here</section>

<section class="grid grid-cols-1 place-items-center gap-6 lg:grid-cols-2" in:fade>
	<EducationCard
		title="DEC - Computer Science"
		school={{
			text: 'Cégep Garneau, Canada',
			link: 'https://www.cegepgarneau.ca/programmes/tous-les-programmes/informatique/'
		}}
		dates="2022 - 2025"
		description="Canadian diploma"
	>
		<Computer />
	</EducationCard>

	<EducationCard
		title="BTS Audiovisual - Sound engineering"
		school={{
			text: "Les Atelier de l'Image et du Son, France",
			link: 'https://www.ais-formation.com/formations/bts-metiers-du-son'
		}}
		dates="2015 - 2017"
		description="French diploma"
	>
		<Speaker />
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
		<FlaskConical />
	</EducationCard>
</section>
