<template>
  <v-layout
    align-center
    class="layout"
  >
    <div>
      <ul class="events-list">
        <li>01.11.2018 15:00: Получен <a href="#">новый запрос</a> на выдачу денег</li>
        <li>09.11.2018 15:00: <a href="#">Запрос на опознание денег</a> переведен на статус «Выполнено»</li>
        <li>07.11.2018 15:00: Получен <a href="#">новый запрос</a> на опознание денег</li>
      </ul>
    </div>
  </v-layout>
</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>
  .layout
    height: 100%
    background-color: #fff
    padding: 50px 50px 0 185px
  .events-list
    max-width: 912px
    margin: 0
    padding: 0
    list-style: none
    font-size: 24px
    li
      margin-bottom: 15px
    a
      color: #29abe2
      text-decoration: none
</style>

