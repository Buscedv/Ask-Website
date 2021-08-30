<template>
	<header>
		<div id='inner'>
			<h1>Ask<span>.</span></h1>
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
					<div class="row" id="download-area">
						<div class="col-xs-12">
							<a class='btn btn-primary btn-large' href="https://pypi.org/project/ask-lang/" target="_blank"><font-awesome-icon icon="leaf"/> Install Ask</a>
						</div>
						<div class="col-xs-12">
							<p>v1.4.3</p>
						</div>
					</div>
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
	padding: 105px 0;
	background-color: var(--palette-pink-white);
	box-shadow: 0 2px 2px var(--light-gray);
}

#inner {
	max-width: 70vw;
	margin: 0 auto;
}

h1 span {
	color: var(--palette-green-dark);
}

p {
	font-size: 24px;
}

p strong {
	font-weight: 600;
	color: var(--dark);
}

.btn {
	margin: 0 auto;
}

#download-area {
	width: 100%;
	text-align: center;
}

#download-area p {
	font-size: 1rem;
	padding-top: 3px;
	margin: 0;
	opacity: .6;
}

@media screen and (max-width: 870px) {
	header {
		padding-top: 150px;
	}
	
	#inner {
		max-width: 80vw;
	}
}
</style>
