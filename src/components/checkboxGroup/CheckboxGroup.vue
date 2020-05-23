<template>
  <div class="k-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'KCheckboxGroup',
    mixins: [Emitter],
    props: {
      value: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    mounted() {
      this.$on('change', this.change);
      this.broadcast('KCheckbox', 'on-message', [this.currentValue])
    },
    watch: {
      value(value) {
        this.currentValue = value;
        this.broadcast('KCheckbox', 'on-message', [this.currentValue])
      }
    },
    methods: {
      change(item) {
        var index = this.currentValue.indexOf(item);
        if (index > -1) { // 如果已选中（即数组中有），则取消选中（数组中删除该项）
          this.currentValue.splice(index, 1);
        } else {
          this.currentValue.push(item);
        }
        this.$emit('input', this.currentValue);
      }
    }

  }
</script>
