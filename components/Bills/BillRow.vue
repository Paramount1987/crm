<template>
  <tr
    class="tr"
    v-bind:class="{ bgGray: isOdd }"
    v-if="item.date === 'new'"
  >
    <td class="text-xs-center td-first">-</td>
    <td class="text-xs-center">-</td>
    <td class="text-xs-center">-</td>
    <td class="text-xs-center">-</td>
    <td class="text-xs-center">-</td>
    <td class="text-xs-center">-</td>
    <td class="text-xs-center td-last">-</td>
    <td class="text-xs-center">
      <div class="icon-wrap">
        <v-icon color="#000">add</v-icon>
      </div>
    </td>
  </tr>
  <tr
    class="tr"
    v-bind:class="{ bgGray: isOdd }"
    v-else
  >
    <td class="text-xs-center td-first">{{ item.date }}</td>
    <td class="text-xs-center">{{ item.client }}</td>
    <td class="text-xs-center">{{ item.payer }}</td>
    <td class="text-xs-center">{{ item.inn }}</td>
    <td class="text-xs-center">{{ item.status }}</td>
    <td class="text-xs-center">{{ item.company }}</td>
    <td class="text-xs-center td-last">{{ item.statusCompany }}</td>
    <td class="text-xs-center">
      <div class="icon-wrap">
        <v-icon color="#000">edit</v-icon>
      </div>
    </td>
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
    &.bg-gray
      background-color: #e6e5e5
</style>
