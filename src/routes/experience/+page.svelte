<script lang="ts">
	import { Speaker, Database } from '@lucide/svelte';
	import { fade } from 'svelte/transition';
	import ExperienceCard from '$lib/components/cards/ExperienceCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import DotCube from '$lib/components/3d/DotCube.svelte';
	import ResponsiveCarousel from '$lib/components/ResponsiveCarousel.svelte';
</script>

<PageTitle title="Experience" />

<section in:fade>
	<ResponsiveCarousel>
		{#snippet carouselItems()}
			<Carousel.Item>
				<ExperienceCard
					title="Full-Stack Web Developer"
					company={{ text: 'Logix Opérations, Canada', link: 'https://logixoperations.com/' }}
					dates="2025/01 - Present"
				>
					{#snippet icon()}
						<Database class="fade-to-orange" />
					{/snippet}
					{#snippet descriptions()}
						<li>
							Collaborate on multiple full-stack <strong>.Net Core</strong> and
							<strong>React</strong>
							web applications,contributing to both <em>back-end</em> and <em>front-end</em> development.
						</li>
						<li>
							Incorporate <strong>SOLID principles</strong> into development practices to ensure
							<em>high quality code</em>
							and adherence to <em>software design</em> best practices.
						</li>
						<li>
							Apply <strong>Test-Driven Development (TDD)</strong> and
							<strong>Domain-Driven Design (DDD)</strong> methodologies to improve
							<em>code robustness</em>
							and ensure good <em>application architecture</em> practices are followed.
						</li>
					{/snippet}
				</ExperienceCard>
			</Carousel.Item>

			<Carousel.Item>
				<ExperienceCard
					title="Full-Stack Web Developer"
					company={{
						text: 'Ministry of the Executive Council of Quebec, Canada',
						link: 'https://www.quebec.ca/en/gouvernement/ministere/conseil-executif'
					}}
					dates="2024/06 - 2025/01"
				>
					{#snippet icon()}
						<Database class="fade-to-orange" />
					{/snippet}
					{#snippet descriptions()}
						<li>
							Developed and demonstrated <em>end-to-end testing</em> solutions using
							<strong>TestCafe</strong>
							and <strong>Playwright</strong>, validating their effectiveness in a proof-of-concept
							environment.
						</li>
						<li>
							Designed and implemented <strong>Azure pipelines</strong> and <strong>Docker</strong>
							containers to seamlessly incorporate end-to-end testing into the
							<em>continuous integration</em>
							and <em>deployment workflow</em>.
						</li>
						<li>
							Converted a legacy Classic ASP website into a robust <strong>MVC .Net Core</strong>
							platform, improving <em>user experience</em> and <em>code structure</em>.
						</li>
					{/snippet}
				</ExperienceCard>
			</Carousel.Item>
			<Carousel.Item>
				<ExperienceCard
					title="Sound engineer (live/recording)"
					company={{
						text: 'Freelance, France',
						link: 'https://www.youtube.com/watch?v=L-HpgNX6j0s'
					}}
					dates="2017/06 - 2022/06"
				>
					{#snippet icon()}
						<Speaker class="fade-to-orange" />
					{/snippet}
					{#snippet descriptions()}
						<li>
							Used <em>industry-standard</em> software and plugins such as
							<strong>Pro Tools</strong>, <strong>Ableton</strong>, <strong>Waves Audio</strong> and
							<strong>Izotope</strong> for recording, mixing, and mastering music.
						</li>
						<li>
							Demonstrated strong <em>stress management</em> skills during live performances while
							consistently <em>meeting tight project deadlines</em>.
						</li>
						<li>
							Collaborated with <em>cross-functional teams</em> to achieve common goals and deliver successful
							recording projects, following artistic direction.
						</li>
					{/snippet}
				</ExperienceCard>
			</Carousel.Item>
		{/snippet}
	</ResponsiveCarousel>
</section>

<section class="mx-auto mt-8 h-12 w-full" in:fade={{ duration: 800 }}>
	<DotCube zoom={120} dotSize={0.6} controlSpeed={0.01} />
</section>

<style>
	strong,
	em {
		color: var(--primary);
	}
</style>
