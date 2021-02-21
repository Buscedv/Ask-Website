<template>
	<footer>
		<div class="row" id="inner">
			<div class="col-xs-12">
				<p id="copyright" :v-text="'&copy; Edvard Busck-Nielsen ' + year"></p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: '',
		}
	},
	mounted() {
		const d = new Date()
		this.year = d.getFullYear()
	}
}
</script>

<style scoped>
footer {
	height: fit-content;
	padding: 40px;
	padding-bottom: 20px;
	background-color: var(--white);
	text-align: center;
}

#copyright {
	opacity: .6;
}
</style>
