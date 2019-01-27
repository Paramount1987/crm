<template>
  <v-menu
    ref="menu1"
    :close-on-content-click="false"
    v-model="menu1"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
  >
    <v-text-field
      class="date-field"
      slot="activator"
      v-model="dateFormatted"
      persistent-hint
      append-icon="event"
      background-color="#edf0f2"
      height="60px"
      solo
      flat
      @blur="date = parseDate(dateFormatted)"
    ></v-text-field>
    <v-date-picker
      v-model="date"
      no-title
      locale="ru"
      color="#ffdd2d"
      @input="menu1 = false">
    </v-date-picker>
  </v-menu>
</template>

<script>
  export default {
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      }
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      }
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}.${day}.${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('.')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      }
    }
  }
</script>

<style lang="stylus">
  .date-field
    .v-input__icon
      background-color: #ffdd2d
</style>
