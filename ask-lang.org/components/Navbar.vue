<template>
	<nav class='row'>
		<div id='inner' class='col-xs-12 row'>
			<div id="logo" class='col-sm-6 col-xs-12 vc'>
				<img alt='Ask Programming Language' src='../static/banner.png'>
			</div>
			<div class='col-sm-6 col-xs-12 vc'>
				<div class='row nav-items vc'>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link'>Docs</a>
					</div>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link'>The Project</a>
					</div>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link'>Articles</a>
					</div>
					<div class='col-xs-3 nav-item'>
						<a class='nav-link'><font-awesome-icon :icon="['fab', 'github']"/> Contribute</a>
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
	background-color: var(--dark);
}

#inner {
	max-width: 90vw;
	margin: 0 auto;
}

img {
	max-height: 50px;
}

#title {
	color: var(--light-gray);
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
	#logo {
		text-align: center;
	}
}
</style>
