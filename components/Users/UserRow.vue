<template>
  <tr
    class="tr"
    v-bind:class="{ bgGray: isOdd }"
  >
    <td class="text-xs-center color-blue">{{ user.login }}</td>
    <td class="text-xs-center color-blue">{{ user.pseudoname }}</td>
    <td class="text-xs-center">{{ user.email }}</td>
    <td class="text-xs-center">{{ user.phone }}</td>
    <td class="text-xs-center">{{ user.department }}</td>
    <td class="text-xs-center">{{ user.position }}</td>
    <td class="text-xs-center">{{ user.role }}</td>
    <td class="text-xs-center">{{ user.status }}</td>
    <td class="text-xs-center">
      <!-- <SwitchInput /> -->
      <SwitchInput
        :value="switchValue"
        @input="switchValue = $event.target.value"
      />
    </td>
    <td class="text-xs-center">
      <div
        class="icon-wrap"
        @click="$emit('clickEdit')"
      >
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
    user: {
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
  .tr:hover
    background-color: inherit !important

  .color-blue
    color: #29abe2

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
