<template>
  <div class="k-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'KRadioGroup',
    mixins: [Emitter],
    props: {
      value: [String, Number]
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    mounted() {
      this.$on('change', this.change);
      this.broadcast('KRadio', 'on-message', this.currentValue)
    },
    watch: {
      value(value) {
        this.currentValue = value;
        this.broadcast('KRadio', 'on-message', this.currentValue)
      }
    },
    methods: {
      change(e) {
        this.$emit('input', e);
      }
    }

  }
</script>
