<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		href: string;
		text: string;
	}

	const { href, text }: Props = $props();
</script>

<a
	{href}
	class={[
		'transition hover:text-accent hover:underline',
		$page.url.pathname === href && 'text-accent'
	]}
>
	{text}
</a>
