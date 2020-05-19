<template>
    <div>
        <h2>Icon 图标</h2>
        <h4>图标集合</h4>

        <p>本图标集合采用的是 iconfont 官方图标库（千牛图标库）。</p>

        <ul class="icon-list">
            <li v-for="(icon, index) in iconList" :key="index">
                <span>
                    <i :class="icon"></i>
                    <span class="icon-name">{{icon}}</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
	var iconList = require('./icon.json');
	export default {
		name: 'icon',
		props: {

		},
		data() {
			return {
                iconList: iconList
			}
		},
		methods: {

		},

	}
</script>

<style scoped lang="scss">
    @import "../../assets/css/mixin";
    h4 {
        font-weight: 400;
        padding: 20px 0;
    }
    p {
        margin-bottom: 20px;
        color: #555;
        font-size: 14px;
        font-weight: normal;
    }
    ul.icon-list {
        overflow: hidden;
        list-style: none;
        padding: 0!important;
        border: 1px solid #eaeefb;
        border-radius: 4px;
        li {
            float: left;
            width: 16.66%;
            text-align: center;
            height: 120px;
            line-height: 120px;
            color: #666;
            font-size: 13px;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
            margin-right: -1px;
            margin-bottom: -1px;
            &:hover {
                i, span {
                    color: $theme-color;
                }
                i {
                    transform: scale(1.2);
                }
            }
            span {
                display: inline-block;
                vertical-align: middle;
                line-height: normal;
                font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
                color: #99a9bf;
                transition: color .15s linear;
            }
            i {
                display: block;
                font-size: 34px;
                margin-bottom: 10px;
                color: #606266;
                transition: all .15s linear;
            }
            .icon-name {
                display: inline-block;
                padding: 0 3px;
                height: 1em;
            }
            &:after {
                content: "";
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
</style>
