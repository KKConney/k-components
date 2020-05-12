import KButton from './button/Button'

const KComponents = { // 第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
	install(Vue, options) {
		Vue.component(KButton.name, KButton)
	}
}

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(KComponents)
}

export default KComponents
