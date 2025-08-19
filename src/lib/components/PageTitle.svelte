<script lang="ts">
	import typewriter from '$lib/utils/typewritter';

	interface Props {
		title: string;
	}

	const { title }: Props = $props();
</script>

<h2 class="mb-5 text-lg">
	<span class="text-muted-foreground">$title = </span>
	<span in:typewriter={{ delay: 0, speed: 55 }}>{title}</span><span class="text-muted-foreground"
		>;</span
	>
</h2>
