<template>
  <label class="k-radio" :class="[{'is-checked': currentValue === label},{'is-disabled': disabled}]">
    <span class="k-radio--input" :class="[{'is-checked': currentValue === label},{'is-disabled': disabled}]">
      <span class="k-radio--inner"></span>
      <input type="radio" class="k-radio--original" :disabled="disabled" :value="label" v-model="currentValue" @change="change">
    </span>
    <span class="k-radio--label" :class="[{'is-checked': currentValue === label}]" v-if="$slots.default"><slot></slot></span>
  </label>
</template>

<script>
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'KRadio',
    mixins: [Emitter],
    props: {
      value: [String, Number],
      label: [String, Number, Boolean],
      disabled: Boolean
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    mounted() {
      this.$on('on-message', this.render);
    },
    watch: {
      value(value) {
        this.currentValue = value
      }
    },
    methods: {
      render(value) {
        this.currentValue = value
      },
      change(e) {
        this.dispatch('KRadioGroup', 'change', this.label);
        this.$emit('input', this.currentValue);
        this.$emit('change', e);
      }
    }

  }
</script>
