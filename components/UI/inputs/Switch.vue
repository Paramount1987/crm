<template>
    <v-switch
      color="#ffdd2d"
      class="switch-crm"
      :input-value="value"
      @input="$emit('input', $event.target.value)">
    ></v-switch>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    }
  }
}
</script>

<style lang="stylus">
  .switch-crm
    .v-input__slot
      margin-bottom: 0 !important
    .v-messages
      height 0
      min-height: 0
    .v-input--switch__thumb
      box-shadow: none
      color: #b3b3b3
</style>
