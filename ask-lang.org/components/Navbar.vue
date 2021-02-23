<template>
	<nav class='row'>
		<div id='inner' class='col-xs-12 row'>
			<a href="/" id="logo" class='col-sm-6 col-xs-12 vc'>
				<img alt='Ask Programming Language' src='../static/icon-transparent.png'>
				<h1>Ask</h1>
			</a>
			<div class='col-sm-6 col-xs-12 vc'>
				<div class='row nav-items vc'>
					<a class='col-xs-3 nav-item' @click.prevent="$router.push('/')">Home</a>
					<a class='col-xs-3 nav-item' href="https://docs.ask-lang.org" target="_blank">Docs</a>
					<a class='col-xs-3 nav-item' @click.prevent="$router.push('/project')">Project</a>
<!--					<div class='col-xs-3 nav-item'>-->
<!--						<a class='nav-link' href="#">Articles</a>-->
<!--					</div>-->
					<a class='col-xs-3 nav-item' href="https://github.com/Buscedv/Ask" target="_blank">Contribute</a>
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
	z-index: 99;
}

#inner {
	max-width: 90vw;
	margin: 0 auto;
}

#logo img {
	max-height: 50px;
}

#logo:hover {
	cursor: pointer;
}

h1 {
	color: var(--white-on-white);
	display: block;
	font-size: 1.5em;
	margin-block-start: 0.67em;
	margin-block-end: 0.67em;
	margin-inline-start: 0;
	margin-inline-end: 0;

	padding: 0 15px;
	font-weight: normal;
}

.nav-items {
	width: 100%;
}

.nav-item {
	width: 100%;
	text-align: right;
	color: var(--palette-pink-light-light);
}

.nav-item:hover {
	cursor: pointer;
	opacity: .7;
}

@media screen and (max-width: 870px) {
	nav {
		position: absolute;
	}
	
	#logo {
		max-width: fit-content;
		margin: 0 auto;
		padding-bottom: 5px;
	}
	
	.nav-items {
		padding-bottom: 5px;
	}
	
	.nav-item {
		text-align: center;
	}
}
</style>
