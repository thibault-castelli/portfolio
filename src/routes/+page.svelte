<script lang="ts">
	import CodeBlock from '$lib/components/codeBlock/CodeBlock.svelte';
	import CodeVariable from '$lib/components/codeBlock/CodeVariable.svelte';
	import CodeString from '$lib/components/codeBlock/CodeString.svelte';
	import CodeValue from '$lib/components/codeBlock/CodeValue.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import CodeComment from '$lib/components/codeBlock/CodeComment.svelte';
	import DotCube from '$lib/components/3d/DotCube.svelte';
	import { fade } from 'svelte/transition';
	import typewriter from '$lib/utils/typewritter';
	import ThibaultCastelli from '$lib/assets/thibault-castelli.jpg';
	import AnotherCssBox from '$lib/assets/another-css-box.png';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
</script>

<svelte:head>
	<title>Thibault Castelli</title>
</svelte:head>

<PageTitle title="Home" />

<p class="mb-5 text-2xl" in:typewriter={{ delay: 0, speed: 35 }}>
	Hi! I'm <strong>Thibault</strong>. Welcome to my <em>portfolio</em>!
</p>

<div class="flex flex-col gap-5 lg:flex-row">
	<CodeBlock title="">
		<div class="space-y-5">
			<p><CodeVariable>name</CodeVariable>: <CodeString>'Thibault Castelli'</CodeString>,</p>
			<p>
				<CodeVariable>title</CodeVariable>: <CodeString>'Full-Stack Web Developer'</CodeString>,
			</p>
			<p><CodeVariable>yearsOfExperience</CodeVariable>: <CodeValue>2</CodeValue>,</p>
			<p>
				<CodeVariable>adaptability</CodeVariable>: <CodeValue>true</CodeValue>, <CodeComment
					>I embrace change and value <em>constructive criticism</em> as a means to continuously enhance
					my skills and performance.</CodeComment
				>
			</p>

			<p>
				<CodeVariable>teamWorker</CodeVariable>: <CodeValue>true</CodeValue>, <CodeComment
					>I thrive in <em>multidisciplinary teams</em>, learning from the expertise of my
					colleagues. I am an <em>attentive listener</em> and willing to contribute to ideas and projects.</CodeComment
				>
			</p>
			<p>
				<CodeVariable>spiritOfSynthesis</CodeVariable>: <CodeValue>true</CodeValue>, <CodeComment
					>I strive to develop <em>simple and intuitive solutions</em> that address complex problems.</CodeComment
				>
			</p>

			<img
				class="mx-auto block max-w-50 rounded-lg shadow-2xl"
				src={ThibaultCastelli}
				alt="thibault castelli"
			/>
		</div>
	</CodeBlock>

	<div class="h-40 w-full lg:h-auto lg:w-1/3" in:fade={{ duration: 800 }}>
		<DotCube zoom={5} dotSize={0.05} controlSpeed={0.15} />
	</div>
</div>

<style>
	em,
	strong {
		color: var(--primary);
	}
</style>
