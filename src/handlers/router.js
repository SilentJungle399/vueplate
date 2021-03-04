import VueRouter from 'vue-router';
import Vue from 'vue'
import LoginPage from '@/components/login/LoginPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		// {
		// 	path: "",
		// 	redirect: ""
		// }
	]
})

export default router