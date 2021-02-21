<template>
	<nav class='row'>
		<div id='inner' class='col-xs-12 row'>
			<div id="logo" class='col-sm-6 col-xs-12 vc'>
				<a href="/"><img alt='Ask Programming Language' src='../static/icon-transparent.png'></a>
				<h1>Ask</h1>
			</div>
			<div class='col-sm-6 col-xs-12 vc'>
				<div class='row nav-items vc'>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link' href="https://docs.ask-lang.org" target="_blank">Docs</a>
					</div>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link' href="https://github.com/Buscedv/Ask" target="_blank">Project</a>
					</div>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link' href="#">Articles</a>
					</div>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link' href="https://github.com/Buscedv/Ask" target="_blank">Contribute</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar'
}
</script>

<style scoped>
nav {
	width: 100%;
	padding: 8px;
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	text-align: center;
	background-color: var(--black);
}

#inner {
	max-width: 90vw;
	margin: 0 auto;
}

#logo img {
	max-height: 50px;
}

#logo a:hover {
	cursor: pointer;
}

h1 {
	color: var(--white);
	display: block;
	font-size: 1.5em;
	margin-block-start: 0.67em;
	margin-block-end: 0.67em;
	margin-inline-start: 0;
	margin-inline-end: 0;

	padding-left: 15px;
	font-weight: normal;
}

.nav-items {
	width: 100%;
}

.nav-item {
	width: 100%;
	text-align: center;
}

.nav-link {
	color: var(--white);
}

.nav-link:hover {
	cursor: pointer;
	opacity: .7;
}

@media screen and (max-width: 870px) {
	nav {
		position: absolute;
	}
	
	#logo {
		max-width: fit-content;
		padding-bottom: 5px;
		margin: 0 auto;
	}
	
	#logo h1 {
		display: none;
	}
	
	.nav-items {
		padding-bottom: 5px;
	}
}
</style>
