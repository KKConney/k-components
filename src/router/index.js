import Vue from 'vue'
import Router from 'vue-router'

//组件 view 模块
import layout from '@/views/layout'

// 通用
import Button from '@/views/right/button'
import Icon from '@/views/right/icon'

// Form 表单
import Input from '@/views/right/input'
import Textarea from '@/views/right/textarea'
import Radio from '@/views/right/radio'
import Checkbox from '@/views/right/checkbox'
import Select from '@/views/right/select'
import Switch from '@/views/right/switch'

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
					component: Button
				},
				{
					path: '/icon',
					name: 'icon',
					component: Icon
				},
				{
					path: '/input',
					name: 'input',
					component: Input
				},
				{
					path: '/textarea',
					name: 'textarea',
					component: Textarea
				},
				{
					path: '/radio',
					name: 'radio',
					component: Radio
				},
				{
					path: '/checkbox',
					name: 'checkbox',
					component: Checkbox
				},
				{
					path: '/select',
					name: 'select',
					component: Select
				},
				{
					path: '/switch',
					name: 'switch',
					component: Switch
				}
			]
		}
	]
})
