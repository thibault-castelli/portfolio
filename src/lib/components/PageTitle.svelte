<script lang="ts">
	import typewriter from '$lib/utils/typewritter';

	interface Props {
		title: string;
	}

	const { title }: Props = $props();
</script>

<h2 class="mb-5">
	<span class="text-lg text-muted-foreground">$page_title = </span>
	<span class="text-primary" in:typewriter={{ delay: 0, speed: 55 }}>{title}</span><span
		class="text-muted-foreground">;</span
	>
</h2>
