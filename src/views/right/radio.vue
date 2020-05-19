<template>
    <div>
        <h2>Radio 单选框</h2>
        <h4>基础用法</h4>
        <k-radio v-model="radio1" label="1">备选项</k-radio>
        <k-radio v-model="radio1" label="2">备选项</k-radio>

        <h4>禁用状态</h4>
        <k-radio v-model="radio2" label="禁用" disabled>备选项</k-radio>
        <k-radio v-model="radio2" label="选中且禁用" disabled>备选项</k-radio>

        <h4>单选框组</h4>
        <k-radio-group v-model="radio3">
            <k-radio label="5">备选项</k-radio>
            <k-radio label="7">备选项</k-radio>
            <k-radio label="9">备选项</k-radio>
        </k-radio-group>
    </div>
</template>

<script>
	export default {
		name: 'Radio',
		props: {

		},
		data() {
			return {
                radio1: '1',
				radio2: '选中且禁用',
				radio3: '5'
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
