<template>
  <button
          type="button"
          class="k-button"
          :class="[
              type? 'k-button--' + type : 'k-button--default',
              {'is-plain': plain},
              {'is-round': round},
              {'is-disabled': disabled},
              'k-button--' + size
            ]"
          @click="handleBtnClick">
    <i :class="icon" v-if="icon"></i>
    <span :style="{marginLeft: (icon? '5px' : '')}" v-if="$slots.default"><slot></slot></span>
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
      size: String,
      icon: String
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
