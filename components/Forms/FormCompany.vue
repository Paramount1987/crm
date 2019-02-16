<template>
  <div class="wrapper">
    <v-layout>
      <div class="col mr-12">
        <label class="label">Название компании</label>
        <v-text-field
          value="OOO 'ОРКСпасСтройметаллградново'"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="col mr-12">
        <label class="label">Юридический адрес</label>
        <v-text-field
          value="52.45.2"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="col-sm mr-12">
        <label class="label">ИНН</label>
        <v-text-field
          value="7706436472"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="col-md">
        <label class="label">КПП</label>
        <v-text-field
          value="7706436472"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>
    </v-layout>
    <v-layout>
      <div class="col mr-12">
        <label class="label">Директор</label>
        <v-text-field
          value="Воронцов Августин Владимирович"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="col mr-12">
        <label class="label">Почтовый адрес</label>
        <v-text-field
          value="52.45.2"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="col-sm mr-12">
        <label class="label">ОГРН</label>
        <v-text-field
          value="123456789123"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="col-md">
        <label class="label">Телефон</label>
        <v-text-field
          value="8 (937) 373-26-73"
          background-color="#edf0f2"
          height="60px"
          class="input"
          mask="# (###) ###-##-##"
          solo
          flat
        ></v-text-field>
      </div>
    </v-layout>
    <v-layout>
      <div class="col-sm mr-12">
        <label class="label">ОКАТО</label>
        <v-text-field
          value="12345678"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>
      <div class="col-sm mr-12">
        <label class="label">ОКВЭД</label>
        <v-text-field
          value="52.45.2"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>
      <div class="col mr-12">
        <label class="label">Почта</label>
        <v-text-field
          value="companu@gmail.ru"
          background-color="#edf0f2"
          height="60px"
          class="input"
          solo
          flat
        ></v-text-field>
      </div>
      <div class="col-sm mr-12">
        <label class="label">Дата создания</label>
        <Date />
      </div>
      <div class="col-md">
        <label class="label">Статус компании</label>
        <Select
          :items="status"
        />
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: ["Ликвидирована", "Активен", "Неактивен"]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    padding 48px 55px 30px 63px
    background-color #fff
  .col
    width 444px
  .col-sm
    width 216px
  .col-md
    width 330px

  .mr-12
    margin-right 12px

  .label
    display block
    margin-bottom 10px
    color #808080
    font-size 16px

  .input
    font-size 20px
</style>
