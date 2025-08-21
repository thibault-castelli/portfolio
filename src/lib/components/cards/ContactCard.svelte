<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		icon: Snippet;
		text: Snippet;
	}

	const { icon, text }: Props = $props();
</script>

<div
	class="flex items-center gap-3 rounded-2xl border bg-background p-3 pr-4 shadow-2xl transition hover:scale-[1.03] hover:border-primary"
>
	<div class="inline-block">
		{@render icon()}
	</div>
	{@render text()}
</div>
