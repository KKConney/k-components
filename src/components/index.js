import KButton from './button/Button'
import KRadio from './radio/Radio'
import KRadioGroup from './radioGroup/RadioGroup'
import KCheckbox from './checkbox/Checkbox'
import KCheckboxGroup from './checkboxGroup/CheckboxGroup'
import KInput from './input/Input'
import KSelect from './select/Select'
import KOption from './option/Option'
import KSwitch from './switch/Switch'

const KComponents = { // 第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
	install(Vue, options) {
		Vue.component(KButton.name, KButton);
		Vue.component(KRadio.name, KRadio);
		Vue.component(KInput.name, KInput);
		Vue.component(KRadioGroup.name, KRadioGroup);
		Vue.component(KCheckbox.name, KCheckbox);
		Vue.component(KCheckboxGroup.name, KCheckboxGroup);
		Vue.component(KSelect.name, KSelect);
		Vue.component(KOption.name, KOption);
		Vue.component(KSwitch.name, KSwitch);
	}
}

// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(KComponents)
}

export default KComponents
