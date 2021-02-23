<template>
	<main>
		<header>
			<h1>The Ask Programming Language Project</h1>
		</header>
		<article>
			<p>
				Ask's goal is to make the development of APIs and backend services easier and faster. The modern way of designing websites is to build a frontend with e.g. Vue.js or React, and then a backend API thant handles user authentication and database communication. Ask fits this architecture perfectly. Your website is it's design and functionality not the backend itself. This means that creating the API that runs it all behind the scenes shouldn't be the most time consuming part of the project. Ask makes it possible to almost completely focus on design and functionality knowing that the backend will be easy to create and maintain. People who start using Ask make more projects and take on bigger challenges.
			</p>
			<p>
				Ask won't replace all backend infrastructure but Ask is perfect for the average full stack project.
			</p>
			<p>
				Ask is a transpiled language but it has a few tricks up it's sleeve. Ask can import external Python modules (both local ones and ones from the PyPI). You can then use these modules in your Ask app directly. This means that in theory Ask can do anything Python can. This also means that since Ask is still in pretty early development you won't get stuck waiting for a feature release. Instead contact us and we will built the future ASAP, and in the mean while you can use an external Python script to fill in the missing functionality.
			</p>
			<p>We want Ask to become one of your favorite tools to work with, and we also hope that adding Ask to your skill set will ultimately make you a better developer. We can't wait to see what exciting project you'll use it for!</p>
		</article>
	</main>
</template>

<script>
export default {
	name: 'CookiePolicy',
	head: {
		title: 'The Ask Programming Language - About The Project'
	},
}
</script>

<style scoped>
main {
	padding: 20px;
	max-width: 70vw;
	margin: 0 auto;
	margin-top: 15vh;
}

h1, h3 {
	text-align: center;
	margin: 0;
	padding: 5px;
}

@media screen and (max-width: 870px) {
	main {
		width: 100vw;
		padding: 0;
	}
	
	h1 {
		font-size: 2rem;
	}
}
</style>
