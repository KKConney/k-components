
/**
 * 兼容处理Object.assign()
 */
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

/**
 * class选择器
 * @param {string} selector
 * @returns {HTMLElement} HTMLElement
 */
export function byClass(selector) { // byClass('.class')
  let className = selector.substring(1);//从索引为1的元素往后取

  //判断浏览器是否支持getElementsByClassName
  if(document.getElementsByClassName) {
    return document.getElementsByClassName(className)
  } else {
    //\s空白字符 ^开始 $结束
    let reg = new RegExp('(\\s|^)' +className +'(\\s|$)');
    let elems = document.getElementsByTagName("*");//获取页面中所有元素
    let arr=[];//保存获取到的指定className的元素
    for(let i = 0; i < elems.length; i++) {
      if (reg.test(elems[i].className)) {//如果和模式匹配上
        arr.push(elems[i]);
      }
    }
    return arr;
  }
}

/**
 * 判断对象是否是数组类型
 * @param {object} obj
 * @return {boolean}
 */
export function isArrayFn(obj) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(obj);
  }else{
    return Object.prototype.toString.call(obj) === "[object Array]";
  }
}

/**
 * 优化实现对象的深拷贝
 */
// export function deepCopy(obj) {
//   if(obj === null) return null;
//   if(typeof obj !== 'object') return obj;
//   if(obj.constructor===Date) return new Date(obj);
//   if(obj.constructor === RegExp) return new RegExp(obj);
//   var newObj = new obj.constructor ();  //保持继承链
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
//       var val = obj[key];
//       newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
//     }
//   }
//   return newObj;
// }
export function deepCopy(d) {
var n = new d.constructor();
for (var k in d) {
  if (d.hasOwnProperty(k)){
    var v = d[k]
    n[k] = typeof v === 'object' ? deepCopy(v) : v;
  }
}
return n;
}

/**
 * 判断一个元素是另外一个元素的子元素
 */
export function isParent(obj, parentObj) {
  while (obj != undefined && obj != null && obj.tagName.toUpperCase() != 'BODY'){
    if (obj == parentObj){
      return true;
    }
    obj = obj.parentNode;
  }
  return false;
}
