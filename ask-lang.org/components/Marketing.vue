<template>
	<div id="info">
		<section class="left vc">
			<div>
				<h2>Development</h2>
				<div class="row">
					<div class="col-sm-8 col-xs-12">
						<p>
							Ask's syntax is heavily based on and inspired by Python, and can almost be considered to be a
							superset of Python. This means that picking up Ask is super easy if you’re already familiar with
							Python.
							<br>
							<br>
							The main idea behind Ask is to simplify common backend actions (e.g. working with databases).
							Building a full database CRUD REST API with JWT authentication is very straight forward and
							simple and requires virtually zero lines of boilerplate code and no setup when using Ask.
						</p>
					</div>
	
					<div class="col-sm-4 col-xs-12 list-area vc">
						<div class="list">
							<p>Lorem ipsum</p>
							<p>Test</p>
							<p>Dolor sit amet</p>
							<p>Test</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="right vc">
			<div>
				<h2>Deployment</h2>
				<div class="row">
					<div class="col-sm-4 col-xs-12 list-area vc">
						<div class="list">
							<p>Lorem ipsum</p>
							<p>Test</p>
							<p>Dolor sit amet</p>
						</div>
					</div>
					<div class="col-sm-8 col-xs-12">
						<p>
							Ask is a transpiled language (kind of like TypeScript) which means that it compiles the source
							code to
							another language that has a similar level of abstraction. In Ask's case the traget language is
							Python, more specifically a Flask app.
							<br>
							<br>
							Flask is a very popular and well established web framework for Python, so there's already a lot
							of
							tools, and services for deploying Flask apps.
							<br>
							<br>
							The transpiled app is completely standalone and doesn't require Ask in any way. The output code
							is also
							readable and well organized, so switching to Ask from Flask is basically zero commitment since
							you can
							always go back to Flask by just continuing work on the transpiled code and pretending that Ask
							never was
							involved.
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Marketing"
}
</script>

<style scoped>
section {
	min-height: 50vh;
	padding: 50px 50px;
	color: var(--light-gray);
}

h2 {
	color: var(--palette-pink-white);
}

p {
	color: var(--light-gray);
}

.left {
	background-color: var(--palette-green-dark);
}

.right {
	text-align: right;
	background-color: var(--palette-pink-white);
}

.right h2 {
	color: var(--palette-green-dark);
}

.right p {
	color: var(--dark);
}

.list {
	margin: 0 auto;
	width: fit-content;
}

.list p {
	width: fit-content;
}

.left .list {
	text-align: right;
}

.right .list {
	text-align: left;
}
</style>
