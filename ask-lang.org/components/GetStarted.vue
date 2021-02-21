<template>
	<div id="get-started">
		<h2>Get Started</h2>
		<div class="row">
			<div class="col-sm-4 col-xs-12">
				<a class="btn btn-primary" href="https://docs.ask-lang.org" target="_blank"><font-awesome-icon icon="newspaper"/> Articles</a>
			</div>
			<div class="col-sm-4 col-xs-12">
				<a class="btn btn-primary" href="https://docs.ask-lang.org" target="_blank"><font-awesome-icon icon="book"/> Docs</a>
			</div>
			<div class="col-sm-4 col-xs-12">
				<a class="btn btn-primary" href="https://docs.ask-lang.org" target="_blank"><font-awesome-icon icon="code-branch"/> Contribute</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "GetStarted"
}
</script>

<style scoped>
#get-started {
	padding: 50px 50px;
	text-align: center;
	margin: 0 auto;
	width: 70vw;
}

h2 {
	margin: 0;
	padding-bottom: 20px;
}

.btn {
	width: fit-content;
	margin: 0 auto;
	box-shadow: none;
}

@media screen and (max-width: 870px) {
	.btn {
		margin: 10px auto;
	}
}
</style>
