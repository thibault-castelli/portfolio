<script lang="ts">
	import typewriter from '$lib/utils/typewritter';

	let { children } = $props();
</script>

<div in:typewriter={{ delay: 100, speed: 10 }}>
	<span class="text-muted-foreground">$content = &#123;</span>
	{@render children?.()}
	<span class="text-muted-foreground">&#125;;</span>
</div>
