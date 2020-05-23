<template>
    <div>
        <h2>Switch 开关</h2>

        <h4>基础用法</h4>
        <k-switch v-model="value"></k-switch>

        <h4>禁用状态</h4>
        <k-switch v-model="value1" disabled></k-switch>

        <h4>不同颜色</h4>
        <k-switch v-model="value2" active-color="rgb(19, 206, 102)" inactive-color="rgb(255, 73, 73)"></k-switch>

        <h4>文字描述</h4>
        <div style="padding: 10px 0">
            <k-switch v-model="value3" active-text="选项B" inactive-text="选项A"></k-switch>
        </div>
        <div style="padding: 10px 0">
            <k-switch v-model="value4"
                      active-text="选项B"
                      inactive-text="选项A"
                      active-color="rgb(19, 206, 102)"
                      inactive-color="rgb(255, 73, 73)"></k-switch>
        </div>

        <h4>扩展 value 类型</h4>
        <k-switch v-model="value5"
                  active-color="rgb(19, 206, 102)"
                  inactive-color="rgb(255, 73, 73)"
                  active-value="100"
                  inactive-value="0"
                  active-text="100"
                  inactive-text="0"></k-switch>
    </div>
</template>

<script>
	export default {
		props: {

		},
		data() {
			return {
                value: false,
                value1: false,
                value2: false,
                value3: false,
                value4: false,
                value5: false,
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
