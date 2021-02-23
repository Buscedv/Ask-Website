import Vue from 'vue';
import VueGtag from 'vue-gtag';

const rawStatus = localStorage.getItem('gdprConsent')
let status = false
if (rawStatus === 'accepted') {
	status = true
}

Vue.use(VueGtag, {
    config: { id: 'G-5YBWRBMVC8' },
    appName: 'Ask-lang.org',
	bootstrap: status,
	enabled: status,
	pageTrackerScreenviewEnabled: true
});
