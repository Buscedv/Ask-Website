<template>
	<div>
		<div class="container-fluid" v-show="loaded">
			<Navbar/>
			<Nuxt/>
			<Contact/>
			<Footer @showGdprConsentBanner="showGdprConsentBannerManually = true"/>
			
			<GDPRConsentBanner :show="showGdprConsentBannerManually"/>
		</div>
		<div v-show="!loaded" id="when-loading"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loaded: false,
			showGdprConsentBannerManually: false,
		}
	},
	fetch () {
		this.loaded = false
	},
	mounted() {
		this.loaded = true
	}
}
</script>

<style>
.container-fluid {
	width: 100%;
	padding: 0 !important;
}

#when-loading {
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: #fff;
	z-index: 100;
}
</style>
