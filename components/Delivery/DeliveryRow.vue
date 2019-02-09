<template>
  <tr
    class="tr"
    v-bind:class="{ bgGray: isOdd }"
  >
    <td class="text-xs-center td-first">{{ item.date }}</td>
    <td class="text-xs-center">{{ item.client }}</td>
    <td class="text-xs-center">{{ item.payer }}</td>
    <td class="text-xs-center">{{ item.inn }}</td>
    <td class="text-xs-center">{{ item.status }}</td>
    <td class="text-xs-center">{{ item.company }}</td>
    <td class="text-xs-center td-last">{{ item.statusCompany }}</td>
  </tr>
</template>

<script>

export default {
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
    isOdd () {
      return ((this.rowIndex + 1) % 2)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .tr
    border-bottom: none !important
    &:hover
      background-color: inherit !important

  .td-first
    padding-left: 63px !important

  .td-last
    padding-right: 63px !important

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
