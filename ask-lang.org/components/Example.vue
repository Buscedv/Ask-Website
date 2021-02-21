<template>
	<div id="example" v-highlight>
		<h1>Example App</h1>
		<p>A basic REST API for a basic note taking app. This API allows users to login/signup, fetch their notes, and create notes.</p>
		
		<div class="btn expander" @click="expand = !expand">
			<font-awesome-icon :icon="['fas', (expand) ? 'chevron-up' : 'chevron-down']"/>
			<span v-text="(expand) ? ' Hide' : ' Expand'"></span>
		</div>
		
		<pre class="language-javascript" v-show="expand">
			<code>
				&basic
				db_model User:
					id = db.col(db.int, db.pk)
					email = db.col(db.str)
					password = db.col(db.str(256))
					
				&basic
				db_model Note:
					id = db.col(db.int, db.pk)
					title = db.col(db.str)
					text = db.col(db.str)
					user_email = db.col(db.str)
				
				&protected
				@get('/notes'):
					notes = Note.db.get_by(user_email=auth.user())
					respond(serialize(notes))
				
				&protected
				@post('/note'):
					if require_keys(['title', 'text'], body):
						status('Title and/or text missing', 400)
					
					new_note = Note(body[title], body[text], auth.user())
					db.add(new_note)
					respond(new_note.s())
				
				@post('/login'):
					if require_keys(['email', 'password']):
						status('Email and/or password missing', 400)
					
					# Verifies the password.
					user = User.db.get_by(email=body[email])
					if not hash.check(user.password, body['password']):
						status('Wrong password', 401)
					
					# Generates API toke that's valid for one hour.
					respond({ token: auth.login(body['email'], 3600 })
				
				
				@post('/signup'):
					if require_keys(['email', 'password']):
						status('Email and/or password missing', 400)
					
					# Checks if the email is already in use.
					tmp = User.db.get_by(email=body['email']).first()
					if db.exists(tmp):
						status('Email already registered', 400)
					
					# Creates the user.
					new_user = User(body['email'], hash.hash(body['password']))
					db.add(new_user)
					
					status('User created', 200)
			</code>
		</pre>
	</div>
</template>

<script>
import Vue from 'vue';

import 'prism-material-themes/themes/material-palenight.css'
import "vue-code-highlight/themes/window.css";
import VueCodeHighlight from 'vue-code-highlight';
Vue.use(VueCodeHighlight);

export default {
	name: "Example",
	data() {
		return {
			expand: false,
		}
	},
}
</script>

<style scoped>
#example {
	width: 100%;
	padding: 80px 0;
	background-color: var(--white);
	text-align: center;
}

h1 {
	margin: 0;
}

p {
	max-width: 50vw;
	margin: 0 auto;
	padding: 10px 0;
}

.expander {
	max-width: 60vw;
	margin: 0 auto;
	box-shadow: 0 5px 5px #ddd;
	margin-bottom: 10px;
}

.expander:hover {
	background-color: var(--palette-pink-white);
}

pre {
	padding-left: 5px;
}

code {
	font-size: 16px;
	margin: 0 auto;
	line-height: 1.5;
	letter-spacing: 1.2;
}

@media screen and (max-width: 870px) {
	p {
		max-width: 80vw;
	}
	
	pre {
		padding: 0 !important;
		padding-top: 25px !important;
		width: 95vw;
	}
}
</style>
