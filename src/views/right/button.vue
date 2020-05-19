<template>
    <div>
        <h2>Button 按钮</h2>
        <h4>基础用法</h4>
        <div class="row">
            <k-button @click="handleClick">默认按钮</k-button>
            <k-button type="primary">主要按钮</k-button>
            <k-button type="success">成功按钮</k-button>
            <k-button type="info">信息按钮</k-button>
            <k-button type="warning">警告按钮</k-button>
            <k-button type="danger">危险按钮</k-button>
        </div>
        <div class="row">
            <k-button round>默认按钮</k-button>
            <k-button type="primary" round>主要按钮</k-button>
            <k-button type="success" round>成功按钮</k-button>
            <k-button type="info" round>信息按钮</k-button>
            <k-button type="warning" round>警告按钮</k-button>
            <k-button type="danger" round>危险按钮</k-button>
        </div>
        <div class="row">
            <k-button plain>默认按钮</k-button>
            <k-button type="primary" plain>主要按钮</k-button>
            <k-button type="success" plain>成功按钮</k-button>
            <k-button type="info" plain>信息按钮</k-button>
            <k-button type="warning" plain>警告按钮</k-button>
            <k-button type="danger" plain>危险按钮</k-button>
        </div>

        <h4>禁用按钮</h4>
        <div class="row">
            <k-button disabled>默认按钮</k-button>
            <k-button type="primary" disabled>主要按钮</k-button>
            <k-button type="success" disabled>成功按钮</k-button>
            <k-button type="info" disabled>信息按钮</k-button>
            <k-button type="warning" disabled>警告按钮</k-button>
            <k-button type="danger" disabled>危险按钮</k-button>
        </div>
        <div class="row">
            <k-button round disabled>默认按钮</k-button>
            <k-button type="primary" round disabled>主要按钮</k-button>
            <k-button type="success" round disabled>成功按钮</k-button>
            <k-button type="info" round disabled>信息按钮</k-button>
            <k-button type="warning" round disabled>警告按钮</k-button>
            <k-button type="danger" round disabled>危险按钮</k-button>
        </div>
        <div class="row">
            <k-button plain disabled>默认按钮</k-button>
            <k-button type="primary" plain disabled>主要按钮</k-button>
            <k-button type="success" plain disabled>成功按钮</k-button>
            <k-button type="info" plain disabled>信息按钮</k-button>
            <k-button type="warning" plain disabled>警告按钮</k-button>
            <k-button type="danger" plain disabled>危险按钮</k-button>
        </div>

        <h4>图标按钮</h4>
        <div class="row">
            <k-button type="primary" icon="k-icon-add"></k-button>
            <k-button type="primary" icon="k-icon-accessory"></k-button>
            <k-button type="primary" icon="k-icon-trash"></k-button>
            <k-button type="primary" icon="k-icon-search">主要按钮</k-button>
        </div>

        <h4>不同尺寸</h4>
        <div class="row">
            <k-button>默认按钮</k-button>
            <k-button size="medium" icon="k-icon-trash">中等按钮</k-button>
            <k-button size="small" icon="k-icon-trash">小型按钮</k-button>
            <k-button size="mini" icon="k-icon-trash">超小按钮</k-button>
        </div>
        <div class="row">
            <k-button round>默认按钮</k-button>
            <k-button round size="medium">中等按钮</k-button>
            <k-button round size="small">小型按钮</k-button>
            <k-button round size="mini">超小按钮</k-button>
        </div>
        <div class="row">
            <k-button type="primary" icon="k-icon-add" size="medium"></k-button>
            <k-button type="primary" icon="k-icon-add" size="small"></k-button>
            <k-button type="primary" icon="k-icon-add" size="mini"></k-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {

    },
    data() {
        return {

        }
    },
    methods: {
	    handleClick(e) {
	    	alert(e)
        }
    },

}
</script>
<style lang="scss" scoped>
    h4 {
        font-weight: 400;
        padding: 20px 0;
    }
    .row {
        padding: 10px 0;
    }
</style>
