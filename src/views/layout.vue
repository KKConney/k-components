<template>
    <div class="app-container">
        <div class="app-top">
            <div class="app-title">
                <a href="javascript:;">
                    <img class="logo" src="" alt="">
                </a>
                <a href="javascript:;">
                    <span>k-components</span>
                </a>
            </div>
        </div>
        <div class="app-content">
            <div class="app-left">
                <dl class="nav" v-for="(item, index) in menuList" :key="index">
                    <dt>{{item.title}}</dt>
                    <dd v-for="(route, index) in item.list" :key="index" >
                        <router-link :to="{path: route.path}" class="">
                            {{route.name}}
                        </router-link>
                    </dd>
                </dl>
            </div>
            <div class="app-right">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
        name: 'Layout',
        data() {
        	return {
		        menuList: [
			        {
				        title: '通用',
				        list: [
					        {name: 'Button', path: 'button'},
					        {name: 'Icon', path: 'icon'}
				        ]
			        },
                    {
                    	title: 'Form 表单',
                        list: [
                        	{name: 'Input', path: 'input'},
                        	{name: 'InputNumber', path: 'inputNumber'},
                        	{name: 'Radio', path: 'radio'},
                        	{name: 'Checkbox', path: 'checkbox'},
                        	{name: 'Textarea', path: 'textarea'},
                        	{name: 'Select', path: 'select'},
                        	{name: 'Switch', path: 'switch'},
                        ]
                    },
                    {
                    	title: '其他',
                        list: [
                        	{name: '其他', path: '其他'}
                        ]
                    }
                ]
            }
        }
	}
</script>
<style lang="scss" scoped>
@import "../assets/css/mixin.scss";
.app-container {
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-flow: column;
    -webkit-transition: -webkit-transform .3s cubic-bezier(.78,.14,.15,.86);
    transition: -webkit-transform .3s cubic-bezier(.78,.14,.15,.86);
    transition: transform .3s cubic-bezier(.78,.14,.15,.86),-webkit-transform .3s cubic-bezier(.78,.14,.15,.86);
    .app-top {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: nowrap;
        height: 64px;
        -webkit-box-shadow: 0 2px 8px #f0f1f2;
        box-shadow: 0 2px 8px #f0f1f2;
        .app-title {
            line-height: 64px;
            padding-left: 30px;
            a {
                text-decoration: none;
                color: #555;
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
    .app-content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
        flex: 1;
        height: 0px; /* 避免滚动条失效 */
        .app-left {
            width: 200px;
            height: 100%;
            overflow-y: auto;
            border-right: 1px solid #dbdbdb;
            scroll-behavior:smooth;
            .nav {
                dt {
                    font-size: 14px;
                    color: #999;
                    padding: 0 20px;
                    height: 40px;
                    line-height: 40px;
                    border-bottom: 1px solid #f5f5f5;
                    background: #f8f8f8;
                }
                dd {
                    font-size: 14px;
                    height: 40px;
                    line-height: 40px;
                    cursor: pointer;
                    &:hover {
                        a {
                            color: $theme-color;
                        }
                    }
                    a {
                        transition: .5s all;
                        &.router-link-exact-active {
                            background: #e6f7ff;
                            &:after {
                                content: '';
                                position: absolute;
                                width: 2px;
                                height: 100%;
                                background: $theme-color;
                                top: 0;
                                right: 0;
                            }
                        }
                        display: block;
                        padding: 0 20px;
                        color: #333;
                        text-decoration: none;
                        position: relative;
                    }
                }
            }
        }
        .app-right {
            padding: 20px;
            overflow-y: auto;
            scroll-behavior:smooth;
            flex: 1;
            height: 100%;
            box-sizing: border-box;
        }
    }
}
</style>

