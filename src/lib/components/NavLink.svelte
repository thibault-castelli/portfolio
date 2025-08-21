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
		'transition hover:text-primary hover:underline',
		$page.url.pathname === href && ' text-primary'
	]}
>
	{text}
</a>
