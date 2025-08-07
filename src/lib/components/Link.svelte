<script lang="ts">
	interface Props {
		href: string;
		text: string;
	}

	const { href, text }: Props = $props();
</script>

<a {href} class="hover:underline">{text}</a>
