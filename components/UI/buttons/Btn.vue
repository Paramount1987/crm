<template>
  <v-btn
    class="btn"
    :color="color"
    depressed
    :block="block"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String
    },
    text: {
      type: String,
      default: 'Кнопка'
    },
    block: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
  .btn {
    border-radius: 10px;
    height: 60px;
    margin: 0;
    padding: 0 27px;
    font-size: 20px;
    text-transform: none;
  }
  .icon {
    margin-left: 77px;
  }
</style>
