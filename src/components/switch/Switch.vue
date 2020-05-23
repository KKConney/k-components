<template>
  <label class="k-switch" :class="{'is-checked': currentValue, 'is-disabled': disabled}">
    <input type="checkbox" class="k-switch--input" v-model="currentValue" :disabled="disabled" @change="change">
    <span v-if="activeText != null" class="k-switch--label k-switch--label--left" :class="{'is-active': !currentValue}">{{inactiveText}}</span>
    <span class="k-switch--core"
          :style="{'border-color': currentValue? activeColor : inactiveColor,
          'background-color': currentValue? activeColor : inactiveColor}"></span>
    <span v-if="inactiveText != null" class="k-switch--label k-switch--label--right" :class="{'is-active': currentValue}">{{activeText}}</span>
  </label>
</template>

<script>
  export default {
    name: 'KSwitch',
    props: {
      value: [String, Number, Boolean],
      activeText: String,
      inactiveText: String,
      activeValue: {
        type: [String, Number, Boolean],
        default: true
      },
      inactiveValue: {
        type: [String, Number, Boolean],
        default: false
      },
      activeColor: {
        type: String,
        default: '#1890ff'
      },
      inactiveColor: {
        type: String,
        default: '#c0ccda'
      },
      disabled: Boolean
    },
    data() {
      return {
        currentValue: this.value == this.activeValue
      }
    },
    watch: {
      value(value) {
        this.currentValue = this.value == this.activeValue;
      }
    },
    methods: {
      change() {
        let value = this.currentValue ? this.activeValue : this.inactiveValue;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }

  }
</script>
