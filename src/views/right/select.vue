<template>
    <div>
        <h2>Select 选择器</h2>
        <h4>基础用法</h4>
        <k-select v-model="value">
            <k-option v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"></k-option>
        </k-select>
        <h4>禁用状态</h4>
        <k-select v-model="value2" disabled>
            <k-option v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"></k-option>
        </k-select>
    </div>
</template>

<script>
	export default {
		name: 'Select',
		props: {

		},
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
                value: '选项2',
                value2: '选项3',
			}
		},
		methods: {

		}

	}
</script>
<style scoped lang="scss">
    h4 {
        font-weight: 400;
        padding: 20px 0;
    }
    .row {
        padding: 10px 0;
    }
</style>
