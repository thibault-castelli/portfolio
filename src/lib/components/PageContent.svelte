<script lang="ts">
	import typewriter from '$lib/utils/typewritter';

	let { children } = $props();
</script>

<div in:typewriter={{ delay: 100, speed: 10 }}>
	<span class="text-muted">$content = [</span>
	{@render children?.()}
	<span class="text-muted">];</span>
</div>
