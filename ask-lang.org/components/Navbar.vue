<template>
	<nav class='row'>
		<div class='col-xs-12 row' id='inner'>
			<div class='col-sm-6 col-xs-12'>
				<div class='row vc'>
					<img alt='Ask Programming Language' src='../static/icon.png'>
					<h1 id='title'>Ask</h1>
				</div>
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
						<a class='nav-link'>Contribute</a>
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
}

#inner {
	max-width: 90vw;
	margin: 0 auto;
}

img {
	max-height: 50px;
}

#title {
	display: block;
    font-size: 1.5em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0;
    margin-inline-end: 0;
	
	padding-left: 10px;
	font-weight: normal;
}

.nav-items {
	width: 100%;
}

.nav-item {
	width: 100%;
	text-align: center;
}

.nav-link:hover {
	cursor: pointer;
	color: var(--link-hover);
}
</style>
