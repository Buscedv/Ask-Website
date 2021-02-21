<template>
	<footer>
		<div id="inner" class="row">
			<div class="col-xs-12">
				<p class="copyright">Ask is released under the GNU GPL v3.0</p>
				<p class="copyright" v-html="'&copy; Edvard Busck-Nielsen ' + year"></p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data() {
		return {
			year: ''
		}
	},
	mounted() {
		const date = new Date();
		this.year = date.getFullYear();
	},
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

.copyright {
	opacity: .6;
}
</style>
