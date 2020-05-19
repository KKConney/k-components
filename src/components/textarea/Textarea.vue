<template>
  <div class="k-textarea">
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'KTextarea',
    props: {

    },
    data() {
      return {

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
