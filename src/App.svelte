<script>
	import {Topbar, VncViewer} from '@unyw/ui'
	import Unyw from '@unyw/api'
	

	const bashStr = str => `'${str.replaceAll(`'`, `'"'"'`)}'`
</script>

<main>
	<Topbar>
		<h3>My App</h3>
	</Topbar>

</main>

<style>


	:global(body){
		margin: 0px;
		padding: 0px;
		font-family: 'Roboto', 'Arial', sans-serif;
		--color-primary: rgb(22, 131, 0);
		-webkit-tap-highlight-color: transparent;
		overflow: hidden;
	}

	main {
		display: flex;
		flex-direction: column;
		height: 100%;
		align-content: center;
	}

</style>
