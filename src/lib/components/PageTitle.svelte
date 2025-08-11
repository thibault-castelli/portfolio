<script lang="ts">
	import typewriter from '$lib/utils/typewritter';

	interface Props {
		title: string;
	}

	const { title }: Props = $props();
</script>

<h2 in:typewriter={{ delay: 0, speed: 10 }}>
	<span class="text-muted-foreground">$title = </span>
	{title}<span class="text-muted-foreground">;</span>
</h2>
