<template>
  <v-select
    :items="items"
    :value="items[0]"
    background-color="#edf0f2"
    height="60px"
    solo
    flat
    class="select-crm"
  ></v-select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
  .select-crm {
    font-size: 20px;
  }
  .select-crm .v-input__slot {
    border-radius: 10px !important;
    padding: 0 27px !important;
  }
</style>

