<template>
    <div>
        <h2>Checkbox 复选框</h2>
        <h4>基础用法</h4>
        <k-checkbox v-model="checked">备选项</k-checkbox>
        <h4>禁用状态</h4>
        <k-checkbox v-model="checked1" disabled>备选项</k-checkbox>
        <k-checkbox v-model="checked2" disabled>备选项</k-checkbox>
        <h4>复选框组</h4>
        <k-checkbox-group v-model="checkList">
            <k-checkbox label="复选框a"></k-checkbox>
            <k-checkbox label="复选框b"></k-checkbox>
            <k-checkbox label="复选框c"></k-checkbox>
            <k-checkbox label="复选框d" disabled></k-checkbox>
        </k-checkbox-group>
    </div>
</template>

<script>
	export default {
		name: 'Checkbox',
		props: {

		},
		data() {
			return {
				checked: true,
				checked1: true,
				checked2: false,

                checkList: ['复选框a', '复选框d']
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
