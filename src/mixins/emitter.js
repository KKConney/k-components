/**
 * 借鉴 element-ui 的 $dispatch 和 $broadcast 方法
 * Vue2.0 后遗弃了  $dispatch 和 $broadcast
 * 前者用于向上级派发事件，只要是它的父级（一级或多级以上），
 * 都可以在组件内通过 $on （或 events，2.x 已废弃）监听到，后者相反，是由上级向下级广播事件的。
 * 这两种方法一旦发出事件后，任何组件都是可以接收到的，就近原则，而且会在第一次接收到后停止冒泡，除非返回 true
 */

/**
 * @param componentName 组件名称
 * @param eventName 将要触发的事件名称
 * @param params 回调函数传递的参数
 */
// function dispatch(componentName, eventName, params) {
// 	// 获取基于当前组件的父组件实例，这里对父组件实例和根组件实例做了兼容处理
// 	var parent = this.$parent || this.$root;
//
// 	// 通过父组件的 $option 属性获取组件的名称
// 	var name = parent.$options.componentName;
//
// 	// 当相对当前组件的父组件实例存在，而且当父组件的名称不存在或者父组件的名称不等于传入的组件名称时，执行循环
// 	while (parent && (!name || name !== componentName)) {
// 		// 记录父组件的父组件
// 		parent = parent.$parent;
//
// 		// 当父组件的父组件存在时，获取祖父组件的名称
// 		if (parent) {
// 			name = parent.$options.componentName;
// 		}
// 	}
//
// 	// 当循环结束时，parent 的值就是最终匹配的组件实例
// 	if (parent) {
// 		// 当 parent 值存在时调用 $emit 方法
// 		// 传入 parent 实例、事件名称与 params 参数组成的数组
// 		// 触发传入事件名称 eventName 同名的事件
// 		parent.$emit.apply(parent, [eventName].concat(params));
// 	}
// }
//
// /**
//  * @param componentName 组件名称
//  * @param eventName 将要触发的事件名称
//  * @param params 回调函数传递的参数
//  */
// function broadcast(componentName, eventName, params) {
// 	// 依次循环当前组件的子组件
// 	this.$children.forEach(child => {
// 		// 获取每个子组件的名字
// 		var name = child.$options.componentName;
//
// 		// 判断子组件的名字是否等于传入的组件名称
// 		if (name === componentName) {
// 			// 如果子组件的名字等于传入的组件名称就调用 $emit 触发事件
// 			child.$emit.apply(child, [eventName].concat(params));
// 		} else {
// 			// 如果子组件的名字不等于传入的组件名称就递归遍历调用 broadcast 孙子组件
// 			broadcast.apply(child, [componentName, eventName].concat([params]))
// 		}
// 	})
// }
//
// export default {
// 	methods: {
// 		dispatch(componentName, eventName, params) {
// 			dispatch.call(this, componentName, eventName, params)
// 		},
// 		broadcast(componentName, eventName, params) {
// 			broadcast.call(this, componentName, eventName, params);
// 		}
// 	}
// }

function broadcast(componentName, eventName, params) {
	this.$children.forEach(child => {
		const name = child.$options.name;
		
		if (name === componentName) {
			child.$emit.apply(child, [eventName].concat(params));
		} else {
			broadcast.apply(child, [componentName, eventName].concat([params]));
		}
	});
}
export default {
	methods: {
		dispatch(componentName, eventName, params) {
			let parent = this.$parent || this.$root;
			let name = parent.$options.name;
			
			while (parent && (!name || name !== componentName)) {
				parent = parent.$parent;
				
				if (parent) {
					name = parent.$options.name;
				}
			}
			if (parent) {
				parent.$emit.apply(parent, [eventName].concat(params));
			}
		},
		broadcast(componentName, eventName, params) {
			broadcast.call(this, componentName, eventName, params);
		}
	}
};
