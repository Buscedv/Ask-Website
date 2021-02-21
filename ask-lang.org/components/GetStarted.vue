<template>
	<div id="main">
		<div id="square"></div>
		<div id="square-2"></div>
		
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
	</div>
</template>

<script>
export default {
	name: "GetStarted"
}
</script>

<style scoped>
#main {
	max-width: 100vw;
	position: relative;
	overflow: hidden;
}

#get-started {
	padding: 50px 50px;
	text-align: center;
	margin: 0 auto;
	max-width: 70vw;
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

#square, #square-2 {
	position: absolute;
	height: 300px;
	width: 1000px;
	z-index: -1;
}

#square {
	background-color: var(--palette-pink-light);
	right: 0;
	transform: rotate(-40deg);
}

#square-2 {
	width: 150vw;
	height: 300px;
	left: -50vw;
	background-color: var(--palette-green-light);
	transform: rotate(30deg);
}

@media screen and (max-width: 870px) {
	#square-2 {
		width: 150vw;
		height: 200px;
		left: -50px;
	}
	
	.btn {
		margin: 10px auto;
	}
	
	h2 {
		color: var(--white-on-white);
	}
}
</style>
