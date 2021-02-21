<template>
	<div id="contact">
		<h2>Get in Touch</h2>
		<p>Help, Bug Reports, & Feature Requests</p>
		<div class="row">
			<div class="col-sm-4 col-xs-12">
				<a class="btn btn-primary" href="https://github.com/Buscedv/Ask" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/> GitHub</a>
			</div>
			<div class="col-sm-4 col-xs-12">
				<a class="btn btn-primary" href="mailto:me@edvard.dev"><font-awesome-icon icon="envelope"/> Email</a>
			</div>
			<div class="col-sm-4 col-xs-12">
				<a class="btn btn-primary" href="#" target="_blank"><font-awesome-icon :icon="['fab', 'python']"/> PyPI</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact"
}
</script>

<style scoped>
#contact {
	padding: 80px 50px;
	text-align: center;
	max-width: 70vw;
	margin: 0 auto;
}

h2 {
	margin: 0;
}

.btn {
	width: fit-content;
	margin: 10px auto;
}
</style>
