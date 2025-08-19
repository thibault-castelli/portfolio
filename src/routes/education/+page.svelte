<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { fade } from 'svelte/transition';
	import EducationCard from '$lib/components/cards/EducationCard.svelte';
	import { Computer, Speaker, FlaskConical } from '@lucide/svelte';
</script>

<PageTitle title="Education" />

<section class="mb-5 text-center">Add something here</section>

<section class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 xl:grid-cols-3" in:fade>
	<EducationCard
		title="DEC - Computer Science"
		school="Cégep Garneau"
		dates="2022 - 2025"
		description="Canadian diploma"
		animationDelay={0}
	>
		<Computer />
	</EducationCard>

	<EducationCard
		title="BTS Audiovisual - Sound speciality"
		school="Les Atelier de l'Image et du Son"
		dates="2015 - 2017"
		description="French diploma"
		animationDelay={200}
	>
		<Speaker />
	</EducationCard>

	<EducationCard
		title="Scientific Baccalaureate"
		school="Lycée Pierre Mendes"
		dates="2012 - 2015"
		description="French diploma"
		animationDelay={400}
	>
		<FlaskConical />
	</EducationCard>
</section>
