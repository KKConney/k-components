module.exports = {
	publicPath: '/', //根路径
	outputDir: 'dist',  //构建输出目录
	assetsDir: 'assets',    //静态资源目录(js,css,img,fonts)
	lintOnSave: false, //是否开启eslint保存检测，有效值：true || false || 'error'
	//configureWebpack是vueCLI3.0中用于配置webpack插件参数的地方，你在这里设置，会新建或覆盖webpack默认配置
	//webpack ProvidePlugin的含义是创建一个全局的变量，使这个变量在webpack各个模块内都可以使用。这里的配置含义是创建'$'、'jQuery'、'window.jQuery'三个变量指向jQuery依赖，创建'Popper'变量指向popper.js依赖。
	configureWebpack: {
		plugins: [
		
		]
	},
	devServer: {
		open: true, //是否在启动项目完成后自动弹出浏览器窗口
		host: 'localhost', //'0.0.0.0'真机测试  域名
		port: 8899,  //端口号的配置
		https: false, //是否使用https协议
		hotOnly: false, //热更新修改的模块，窗口不会刷新
		proxy: {
			"/api": {
				target: "http://localhost:8899", //接口域名
				changeOrigin: true, //是否跨域
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
