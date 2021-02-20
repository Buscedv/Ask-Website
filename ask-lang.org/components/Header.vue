<template>
	<header>
		<div id='inner'>
			<p>Ask is a modern open source transpiled <strong>programming language</strong>, designed for building
				<strong>backend services</strong> and <strong>APIs</strong>.</p>
			<div class='row'>
				<div class='col-sm-6 col-xs-12 vc'>
					<ul>
						<li>Built-in JWT Authentication.</li>
						<li>Super Simple Database Management.</li>
						<li>Syntax Inspired by Python.</li>
						<li>Built-in CORS Support.</li>
						<li>Reduces Boilerplate.</li>
					</ul>
				</div>
				<div class='col-sm-6 col-xs-12 vc'>
					<button class='btn btn-primary btn-large'>Get Started</button>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style scoped>
header {
	padding: 105px 50px 60px 50px;
	background-color: var(--bg);
	box-shadow: 0 1px 1px var(--light-gray);
}

#inner {
	max-width: 80vw;
	margin: 0 auto;
}

p {
	font-size: 24px;
}

p strong {
	font-weight: 600;
}

ul {
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 0;
	list-style-type: none;
}

ul > li {
	text-indent: -5px;
}

ul > li:before {
	content: "- ";
	text-indent: -5px;
}

li {
	font-size: 20px;
	opacity: .7;
}

.btn {
	margin: 0 auto;
}
</style>
