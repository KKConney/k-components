<template>
  <button
          type="button"
          class="k-button" :class="[type? 'k-button--' + type : '', {'is-plain': plain}, {'is-round': round}, {'is-disabled': disabled}]"
          @click="handleBtnClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'KButton',
    props: {
      type: String,
      disabled: Boolean,
      plain: Boolean,
      round: Boolean,
    },
    data() {
      return {

      }
    },
    methods: {
      handleBtnClick(e) {
        this.$emit('click', e);
      }
    },

  }
</script>
