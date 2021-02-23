<template>
	<div v-cloak id="banner" class="row" v-if="localShow">
		<div class="col col-md-8 col-xs-12">
			<p class="text">We use cookies to analyze website traffic. By clicking "Accept" you consent to our <a style="text-decoration: underline" href="/cookie-policy" target="_blank">Cookie Policy</a>.</p>
		</div>
		<div class="col col-md-4 col-xs-12">
			<div class="row" id="buttons">
				<div class="col col-xs-6">
					<button class="btn btn-primary" @click.prevent="setStatus('accepted')">Accept</button>
				</div>
				<div class="col col-xs-6">
					<button class="btn btn-secondary btn-border-dark" @click.prevent="setStatus('declined')">Decline</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GDPR-ConsentBanner',
	props: ['show'],
	data() {
		return {
			localShow: false,
			status: null,
		}
	},
	methods: {
		setStatus(status) {
			localStorage.setItem('gdprConsent', status)
			window.location = '/'
		},
	},
	mounted() {
		if (this.show) {
			this.localShow = true
		} else {
			this.status = localStorage.getItem('gdprConsent')
			if (this.status === 'declined') {
				this.show = false
			} else {
				this.localShow = !Boolean(this.status)
			}
		}
	},
	watch: {
		show(newVal) {
			this.localShow = newVal
		}
	}
}
</script>

<style scoped>
#banner {
	width: 99.99%;
	height: fit-content;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 98;
	background-color: var(--white-on-white);
	margin-left: auto;
	margin-right: auto;
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	padding: 10px;
	border-top: 2px solid rgba(0, 0, 0, .1);
}

.text {
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	font-size: 1rem;
}

#buttons {
	margin-left: auto;
	margin-right: auto;
}

.col {
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
}
button {
	margin-top: 0;
	padding-top: 3px;
	padding-bottom: 3px;
	box-shadow: none;
	font-size: 1rem;
}
</style>
