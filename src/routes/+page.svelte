<script lang="ts">
	import CodeBlock from '$lib/components/codeBlock/CodeBlock.svelte';
	import CodeKeyword from '$lib/components/codeBlock/CodeKeyword.svelte';
	import CodeVariable from '$lib/components/codeBlock/CodeVariable.svelte';
	import CodeString from '$lib/components/codeBlock/CodeString.svelte';
	import CodeValue from '$lib/components/codeBlock/CodeValue.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<svelte:head>
	<title>Thibault Castelli</title>
</svelte:head>

<PageTitle title="Home" />

<div class="flex gap-5">
	<CodeBlock title="profile.js">
		<p><CodeKeyword>const</CodeKeyword> profile = &#123;</p>
		<div class="ml-8">
			<p><CodeVariable>name</CodeVariable>: <CodeString>'Thibault Castelli'</CodeString>,</p>
			<p>
				<CodeVariable>title</CodeVariable>: <CodeString>'Full-Stack Web Developer'</CodeString>,
			</p>
			<p><CodeVariable>adaptability</CodeVariable>: <CodeValue>true</CodeValue></p>
			<p><CodeVariable>teamWorker</CodeVariable>: <CodeValue>true</CodeValue></p>
			<p><CodeVariable>spiritOfSynthesis</CodeVariable>: <CodeValue>true</CodeValue></p>
			<p><CodeVariable>yearsOfExperience</CodeVariable>: <CodeValue>1.5</CodeValue>,</p>
			<p>
				<CodeVariable>description</CodeVariable>:
				<CodeString>
					'Hello! My name is Thibault Castelli, and I am French, but don't worry - I'm a nice
					person!
				</CodeString>
			</p>
		</div>
		<p>&#125;;</p>
	</CodeBlock>

	<div class="w-1/3">
		<p>Add something here</p>
	</div>
</div>
