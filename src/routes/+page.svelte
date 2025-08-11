<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import PageContent from '$lib/components/PageContent.svelte';
	import { Button } from '$lib/components/ui/button';
	import CodeBlock from '$lib/components/codeBlock/CodeBlock.svelte';
	import CodeKeyword from '$lib/components/codeBlock/CodeKeyword.svelte';
	import CodeVariable from '$lib/components/codeBlock/CodeVariable.svelte';
	import CodeString from '$lib/components/codeBlock/CodeString.svelte';
	import CodeValue from '$lib/components/codeBlock/CodeValue.svelte';
	import profilePicture from '$lib/assets/profile.png';
</script>

<div class="flex gap-5">
	<CodeBlock title="developer.js">
		<p><CodeKeyword>const</CodeKeyword> profile = &#123;</p>
		<div class="ml-8">
			<p><CodeVariable>name</CodeVariable>: <CodeString>'Thibault Castelli'</CodeString>,</p>
			<p>
				<CodeVariable>title</CodeVariable>: <CodeString>'Full-Stack Web Developer'</CodeString>,
			</p>
			<p>
				<CodeVariable>skills</CodeVariable>: [
				<br />
				<CodeString tabCount={1}>'React'</CodeString>,
				<CodeString>'NextJS'</CodeString>,
				<CodeString>'Redux'</CodeString>,
				<CodeString>'Svelte'</CodeString>,
				<CodeString>'Vue'</CodeString>,
				<CodeString>'TypeScript'</CodeString>,
				<br />
				<CodeString tabCount={1}>'.NET Core'</CodeString>,
				<CodeString>'Laravel'</CodeString>,
				<CodeString>'Express'</CodeString>,
				<br />
				<CodeString tabCount={1}>'MySQL'</CodeString>,
				<CodeString>'PostgreSQL'</CodeString>,
				<br />
				<CodeString tabCount={1}>'Docker'</CodeString>,
				<CodeString>'Git'</CodeString>,
				<CodeString>'Linux'</CodeString>
				<br />
				],
			</p>
			<p><CodeVariable>adaptability</CodeVariable>: <CodeValue>true</CodeValue></p>
			<p><CodeVariable>teamWorker</CodeVariable>: <CodeValue>true</CodeValue></p>
			<p><CodeVariable>spiritOfSynthesis</CodeVariable>: <CodeValue>true</CodeValue></p>
			<p><CodeVariable>yearsOfExperience</CodeVariable>: <CodeValue>1.5</CodeValue>,</p>
			<p>
				<CodeVariable>description</CodeVariable>:
				<CodeString>
					'Hello! My name is Thibault Castelli, and I am a highly motivated full stack web developer
					with over a year of professional experience. Having recently moved to Eindhoven, I am
					seeking a challenging role within a collaborative team where I can leverage my skills to
					develop innovative web applications.'
				</CodeString>
			</p>
			<p>
				<CodeVariable>picture</CodeVariable>:
				<img alt="Thibault Castelli" src={profilePicture} class="w-32" />
			</p>
		</div>
		<p>&#125;;</p>
	</CodeBlock>

	<div class="w-1/3">
		<p>add something here</p>
	</div>
</div>
