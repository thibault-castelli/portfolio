<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Dog, Code, Pickaxe } from '@lucide/svelte';
	import ResponsiveCarousel from '$lib/components/ResponsiveCarousel.svelte';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { fade } from 'svelte/transition';
	import ProjectCard from '$lib/components/cards/ProjectCard.svelte';
	import type { BadgeLink } from '$lib/types/BadgeLink';
	import DoggomodoroHome from '$lib/assets/doggomodoro.png';
	import DoggomodoroStats from '$lib/assets/doggomodoro-stats.png';
	import DoggomodoroPresets from '$lib/assets/doggomodoro-presets.png';
	import AnotherCssBorder from '$lib/assets/another-css-border.png';
	import AnotherCssBox from '$lib/assets/another-css-box.png';
	import AnotherCssGradient from '$lib/assets/another-css-gradient.png';
	import Minedock from '$lib/assets/minedock.png';
	import MinedockCreate from '$lib/assets/minedock-create.png';
	import MinedockDelete from '$lib/assets/minedock-delete.png';
	import DotCube from '$lib/components/3d/DotCube.svelte';

	const doggomodoroBadges: BadgeLink[] = [
		{ text: 'Svelte', link: 'https://svelte.dev/' },
		{ text: 'Laravel', link: 'https://laravel.com/' },
		{ text: 'SQLite', link: 'https://sqlite.org/' }
	];

	const anotherCssGeneratorBadges: BadgeLink[] = [{ text: 'React', link: 'https://react.dev/' }];

	const minedockBadges: BadgeLink[] = [
		{ text: 'VueJS', link: 'https://vuejs.org/' },
		{ text: 'NestJS', link: 'https://nestjs.com/' }
	];
</script>

<PageTitle title="Projects" />

<section in:fade>
	<ResponsiveCarousel>
		{#snippet carouselItems()}
			<Carousel.Item>
				<ProjectCard
					title="Doggomodoro"
					githubLink="https://github.com/thibault-castelli/doggomodoro"
					badges={doggomodoroBadges}
				>
					{#snippet icon()}<Dog class="fade-to-orange" />{/snippet}
					{#snippet description()}
						<p>
							A fully customisable <strong>Pomodoro timer</strong> that lets you pet the dog! Create
							your own
							<em>timer presets</em> and track your completed work sessions with satisfying
							<em>charts and statistics</em>.
						</p>
					{/snippet}
					{#snippet image()}
						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={DoggomodoroHome}
									alt="Doggomodoro home page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={DoggomodoroHome}
									alt="Doggomodoro home page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>

						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={DoggomodoroStats}
									alt="Doggomodoro dashboard page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={DoggomodoroStats}
									alt="Doggomodoro dashboard page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>

						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={DoggomodoroPresets}
									alt="Doggomodoro preset page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={DoggomodoroPresets}
									alt="Doggomodoro preset page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>
					{/snippet}
				</ProjectCard>
			</Carousel.Item>

			<Carousel.Item>
				<ProjectCard
					title="Another CSS Generator"
					githubLink="https://github.com/thibault-castelli/another_css_generator"
					liveLink="https://another-css-generator.netlify.app"
					badges={anotherCssGeneratorBadges}
				>
					{#snippet icon()}<Code class="fade-to-orange" />{/snippet}
					{#snippet description()}
						<p>
							Move sliders, and get instant and <em>visual effects</em> that you can easily copy and
							paste into your <strong>CSS sheet</strong>. Box shadow, borders, gradient, transforms,
							and much more!
						</p>
					{/snippet}
					{#snippet image()}
						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={AnotherCssBox}
									alt="Another CSS Generator box page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={AnotherCssBox}
									alt="Another CSS Generator box page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>

						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={AnotherCssBorder}
									alt="Another CSS Generator border page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={AnotherCssBorder}
									alt="Another CSS Generator border page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>

						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={AnotherCssGradient}
									alt="Another CSS Generator gradient page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={AnotherCssGradient}
									alt="Another CSS Generator gradient page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>
					{/snippet}
				</ProjectCard>
			</Carousel.Item>

			<Carousel.Item>
				<ProjectCard
					title="Minedock"
					githubLink="https://github.com/thibault-castelli/minedock"
					badges={minedockBadges}
				>
					{#snippet icon()}<Pickaxe class="fade-to-orange" />{/snippet}
					{#snippet description()}
						<p>
							Create and maintain <strong>local Minecraft servers</strong> easily with Minedock and Docker
							Desktop!
						</p>
					{/snippet}
					{#snippet image()}
						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={Minedock}
									alt="Minedock home page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={Minedock}
									alt="Minedock home page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>

						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={MinedockCreate}
									alt="Minedock create page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={MinedockCreate}
									alt="Minedock create page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>

						<Dialog.Root>
							<Dialog.Trigger>
								<img
									src={MinedockDelete}
									alt="Minedock delete page"
									class="rounded-lg shadow-2xl transition hover:scale-[1.03]"
								/>
							</Dialog.Trigger>
							<Dialog.Content class="min-w-[80vw]">
								<img
									src={MinedockDelete}
									alt="Minedock delete page"
									class="mx-auto rounded p-4 shadow-2xl"
								/>
							</Dialog.Content>
						</Dialog.Root>
					{/snippet}
				</ProjectCard>
			</Carousel.Item>
		{/snippet}
	</ResponsiveCarousel>
</section>

<section class="mx-auto mt-4 h-12 w-full" in:fade={{ duration: 800 }}>
	<DotCube zoom={120} dotSize={0.6} controlSpeed={0.01} />
</section>

<style>
	strong,
	em {
		color: var(--primary);
	}
</style>
