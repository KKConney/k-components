<template>
  <div class="k-input" :class="[{'is-disabled': disabled}]">
    <!-- 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
    当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class和 style 除外)，
    并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用 -->
    <!-- $attrs一般和其他语法联用，用于处理嵌套组件之间的信息交互。通常情况下涉及多个嵌套的时候都会出现$attrs -->
    <input class="k-input--inner"
           v-model="currentValue"
           v-bind="this.$attrs"
           :type="type"
           :placeholder="placeholder"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           @change="handleChange"
           :autocomplete="autocomplete"
           :disabled="disabled">
  </div>
</template>

<script>
  export default {
    name: 'KInput',
    props: {
      value: [String, Number],
      disabled: Boolean,
      type: {
        type: String,
        default: 'text'
      },
      autocomplete: {
        type: String,
        default: 'off'
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(value) {
        this.currentValue = value
      }
    },
    methods: {
      handleInput() {
        this.$emit('input', this.currentValue)
      },

      handleFocus(e) {
        this.$emit('focus', e);
      },

      handleBlur(e) {
        this.$emit('blur', e);
      },

      handleChange(e) {
        this.$emit('change', e);
      }
    }

  }
</script>
