<template>
  <label class="k-checkbox" :class="{'is-checked': currentValue, 'is-disabled': disabled}">
    <span class="k-checkbox--input" :class="{'is-checked': currentValue, 'is-disabled': disabled}">
      <span class="k-checkbox--inner"></span>
      <input type="checkbox" class="k-checkbox--original" :disabled="disabled" v-model="currentValue" @change="change">
    </span>
    <span class="k-checkbox--label" :class="{'is-checked': currentValue}"><slot>{{label}}</slot></span>
  </label>
</template>

<script>
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'KCheckbox',
    mixins: [Emitter],
    props: {
      value: [String, Number, Boolean],
      label: [String, Number, Boolean],
      disabled: Boolean
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
    mounted() {
      this.$on('on-message', this.render)
    },
    methods: {
      render(checkList) {
        this.currentValue = checkList.indexOf(this.label) > -1;
      },
      change(e) {
        this.dispatch('KCheckboxGroup', 'change', this.label);
        this.$emit('input', this.currentValue);
        this.$emit('change', e);
      }
    }

  }
</script>
