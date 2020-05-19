<template>
    <div>
        <h2>Input 输入框</h2>
        <h4>基础用法</h4>
        <div class="demo-input">
            <k-input v-model="value"></k-input>
        </div>
        <h4>禁用状态</h4>
        <div class="demo-input">
            <k-input disabled></k-input>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Input',
		props: {

		},
		data() {
			return {
				value: '文本输入框'
			}
		},
		methods: {

		},

	}
</script>
<style scoped lang="scss">
    .demo-input .k-input {
        width: 180px;
    }
    h4 {
        font-weight: 400;
        padding: 20px 0;
    }
    .row {
        padding: 10px 0;
    }
</style>
