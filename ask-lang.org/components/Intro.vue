<template>
	<div id="intro" class="vc">
		<div class="row" id="inner">
			<div class="col-sm-4 col-xs-12 card">
				<h1><font-awesome-icon icon="check-circle"/></h1>
				<h3>Focus on The Right Things</h3>
				<p>Ask hides away all initial configurations & boilerplate code. This ensures that all the code you write is actually related to building functionality.</p>
			</div>
			<div class="col-sm-4 col-xs-12 card">
				<h1><font-awesome-icon icon="project-diagram"/></h1>
				<h3>Don't Waste Time</h3>
				<p>Less code means less things to worry about. It's easier to find bugs in smaller code bases, and managing less code also makes it easier to add new features.</p>
			</div>
			<div class="col-sm-4 col-xs-12 card">
				<h1><font-awesome-icon icon="plug"/></h1>
				<h3>Extendable & Customizable</h3>
				<p>Simple doesn't mean basic. You can actually import external modules written in Python to Ask. This means that Ask can in practice do anything Python can.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Intro"
}
</script>

<style scoped>
#intro {
	min-height: 55vh;
}

#inner {
	padding: 50px 0;
	max-width: 85vw;
	margin: 0 auto;
}

#inner {
	text-align: center;
}

h1 {
	color: var(--dark);
	margin: 0;
	padding-bottom: 15px;
}

h3, p {
	margin: 0;
}

p {
	padding-top: 5px;
}

@media screen and (max-width: 870px) {
	.card {
		padding-bottom: 40px;
	}
}
</style>
