<script lang="ts">
	import { Speaker, Database } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import ExperienceCard from '$lib/components/cards/ExperienceCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

	const logixJobDescriptions = [
		'Collaborate on multiple full-stack .Net Core and React web applications,contributing to both back-end and front-end development.',
		'Incorporate SOLID principles into development practices to ensure high quality code and adherence to software design best practices.',
		'Apply Test-Driven Development (TDD) and Domain-Driven Design (DDD) methodologies to improve code robustness and ensure good application architecture practices are followed.'
	];

	const mceJobDescriptions = [
		'Developed and demonstrated end-to-end testing solutions using TestCafe and Playwright, validating their effectiveness in a proof-of-concept environment.',
		'Designed and implemented Azure pipelines and Docker containers to seamlessly incorporate end-to-end testing into the continuous integration and deployment workflow.',
		'Converted a legacy Classic ASP website into a robust MVC .Net Core platform, improving user experience and code structure.'
	];

	const soundEngineerDescriptions = [
		'Add hard skill',
		'Demonstrated strong stress management skills during live performances while consistently meeting tight project deadlines.',
		'Collaborated with cross-functional teams to achieve common goals and deliver successful recording projects, following artistic direction.'
	];
</script>

<PageTitle title="Experience" />

Add emphasis on keywords
<section class="grid grid-cols-1 place-items-center gap-4 xl:grid-cols-2" in:fade>
	<ExperienceCard
		title="Full-Stack Web Developer"
		company={{ text: 'Logix Opérations, Canada', link: 'https://logixoperations.com/' }}
		dates="2025/01 - Present"
		descriptions={logixJobDescriptions}
	>
		<Database />
	</ExperienceCard>

	<ExperienceCard
		title="Full-Stack Web Developer"
		company={{
			text: 'Ministry of the Executive Council of Quebec, Canada',
			link: 'https://www.quebec.ca/en/gouvernement/ministere/conseil-executif'
		}}
		dates="2024/06 - 2025/01"
		descriptions={mceJobDescriptions}
	>
		<Database />
	</ExperienceCard>

	<ExperienceCard
		title="Sound engineer (live/recording)"
		company={{ text: 'Freelance, France', link: 'https://www.youtube.com/watch?v=L-HpgNX6j0s' }}
		dates="2017/06 - 2022/06"
		descriptions={soundEngineerDescriptions}
	>
		<Speaker />
	</ExperienceCard>
</section>
