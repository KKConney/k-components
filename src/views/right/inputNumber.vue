<template>
    <div>
        <h2>InputNumber 计数器</h2>
        <h4>基础用法</h4>
        <div class="demo-input">
            <k-input-number v-model="num" :min="1" :max="10"></k-input-number>
        </div>
        <h4>禁用状态</h4>
        <div class="demo-input">
            <k-input-number v-model="num" :min="1" :max="10" disabled></k-input-number>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'InputNumber',
		data() {
			return {
				num: 1
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
