<template>
  <li class="k-select-dropdown--item"
      :class="{'is-select': selected, 'is-disabled': disabled}" @click="liClick">
    <span><slot>{{label}}</slot></span>
  </li>
</template>

<script>
  import Emitter from '../../mixins/emitter'
  export default {
    name: 'KOption',
    mixins: [Emitter],
    props: {
      value: [String, Number],
      label: [String, Number],
      disabled: Boolean
    },
    data() {
      return {
        showFlag: false,
        selected: false
      }
    },
    computed: {

    },
    watch: {
      value(value) {
        this.dispatch('KSelect', 'on-select', {value: this.value, label: this.label})
      }
    },
    mounted() {
      this.$on('on-message', this.render);
    },
    methods: {
      render(value) {
        if (value === this.value) {
          this.selected = true;
          this.dispatch('KSelect', 'on-select', {value: this.value, label: this.label})
        } else {
          this.selected = false;
        }
      },
      liClick(e) {
        if (!this.disabled) {
          this.dispatch('KSelect', 'on-select', {value: this.value, label: this.label});
          //this.selected = true;
        }
      }
    }

  }
</script>
