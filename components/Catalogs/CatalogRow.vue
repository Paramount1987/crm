<template>
  <tr
    class="tr"
    v-bind:class="{ bgGray: isOdd }"
  >
    <td class="td td-index">{{ rowIndex + 1 + '.' }}</td>
    <td class="td td-lg">
      <v-layout
        align-center
        class="layout-input"
      >
        <v-text-field
          :value="item.name"
          background-color="#edf0f2"
          height="40px"
          solo
          flat
          class="input-value"
        ></v-text-field>
        <v-icon class="input-icon">done</v-icon>
        <v-icon class="input-icon">clear</v-icon>
      </v-layout>
    </td>
    <td class="td text-xs-center">
      <SwitchInput
        :value="switchValue"
        @input="switchValue = $event.target.value"
      />
    </td>
    <td class="td td-last">
      <div class="icon-wrap">
        <v-icon color="#000">edit</v-icon>
      </div>
    </td>
  </tr>
</template>

<script>
import SwitchInput from '@/components/UI/inputs/Switch'

export default {
  components: {
    SwitchInput
  },

  props: {
    item: {
      default: {},
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },

  computed: {
    switchValue () {
      return !!((this.rowIndex + 1) % 2)
    },

    isOdd () {
      return !((this.rowIndex + 1) % 2)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .td
    height: 100px !important

  .td-index
    padding-left: 63px !important

  .td-last
    padding-right: 54px !important

  .td-lg
    width: 100%

  .tr
    border-bottom: none !important
    &:hover
      background-color: inherit !important

  .layout-input
    display: inline-flex !important

  .input-value
    position: relative
    top: 15px
    width: 323px

  .input-icon
    background-color: #e9ecef
    width: 30px
    height: 30px
    border-radius: 30px
    margin-left: 10px
    font-size: 20px
    color: #000
    transition: background-color .3s
    cursor pointer
    &:hover
      background-color: #ffdd2d

  .bgGray
    background-color: #f9f9f9
    &:hover
      background-color: #f9f9f9 !important

  .icon-wrap
    display: flex
    align-items: center
    justify-content: center
    width: 45px
    height: 45px
    border-radius: 50%
    background-color: #ffdd2d
    cursor pointer
</style>
