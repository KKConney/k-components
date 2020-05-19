import Vue from 'vue'
import Router from 'vue-router'

//组件 view 模块
import layout from '@/views/layout'

// 通用
import button from '@/views/right/button'
import icon from '@/views/right/icon'

// Form 表单
import input from '@/views/right/input'
import textarea from '@/views/right/textarea'
import radio from '@/views/right/radio'
import checkbox from '@/views/right/checkbox'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'layout',
			component: layout,
			children: [
				{
					path: '/button',
					name: 'button',
					component: button
				},
				{
					path: '/icon',
					name: 'icon',
					component: icon
				},
				{
					path: '/input',
					name: 'input',
					component: input
				},
				{
					path: '/textarea',
					name: 'textarea',
					component: textarea
				},
				{
					path: '/radio',
					name: 'radio',
					component: radio
				},
				{
					path: '/checkbox',
					name: 'checkbox',
					component: checkbox
				}
			]
		}
	]
})
