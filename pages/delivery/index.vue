<template>
  <div>
    <v-layout
      justify-space-between
      class="dlv-content-top"
    >
      <div></div>
      <BtnFilter />
    </v-layout>

    <v-layout class="dlv-layout-form">
      <Select
        :items="clients"
        class="dlv-select-sm"
      />

      <Select
        :items="dates"
        class="dlv-select-md"
      />

      <v-text-field
        label="Поиск"
        append-icon="search"
        background-color="#edf0f2"
        height="60px"
        solo
        flat
        class="dlv-input-search"
      ></v-text-field>

    </v-layout>

    <v-layout>
      <v-data-table
        :headers="headers"
        :items="fakeItems"
        hide-actions
        class="dlv-table"
      >
        <template slot="items" slot-scope="props">
          <DeliveryRow
            :item="props.item"
            :rowIndex="props.index"
          />
        </template>
      </v-data-table>
    </v-layout>
  </div>
</template>

<script>
import BtnFilter from '@/components/UI/buttons/BtnFilter'
import DeliveryRow from '@/components/Delivery/DeliveryRow'

export default {
  components: {
    BtnFilter,
    DeliveryRow
  },
  data: () => ({
    clients: ["Все клиенты", "Вариант1", "Вариант2"],
    dates: ["За все время", "Сегодня", "За неделю", "Текущий месяц"],
    headers: [
      {text: 'Дата', align: 'center', sortable: false},
      {text: 'Клиент', align: 'center', sortable: false},
      {text: 'Плательщик', align: 'center', sortable: false},
      {text: 'ИНН', align: 'center', sortable: false},
      {text: 'Статус запроса на выдачу', align: 'center', sortable: false},
      {text: 'Компании на выдачу', align: 'center', sortable: false},
      {text: 'Статус компании на выдачу', align: 'center', sortable: false}
    ],
    items: [{
      date: '10.02.19',
      client: 'Маугли',
      payer: 'ООО “Рога и копыта”',
      inn: '16546546546',
      status: 'Одобрен',
      company: 'ООО “ххх”',
      statusCompany: 'Активен'
    }]
  }),

  computed: {
    // remove for integration
    fakeItems() {
      const items = [];

      for (let i = 0; i < 20; i++) {
        items.push(this.items[0])
      }

      return items;
    }
  }
}
</script>

<style lang="stylus">
  .dlv-content-top
    background-color: #fff
    padding: 30px 63px
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15)

  .dlv-layout-form
    padding: 50px 63px 30px 63px

  .dlv-table
    width: 100%
    tr
      th:first-child
        padding-left: 70px !important
      th:last-child
        padding-right: 70px !important

  .dlv-select-sm
    width: 280px
    flex-grow: 0
    margin-right: 60px !important

  .dlv-select-md
    width: 330px
    flex-grow: 0
    margin-right: 20px !important

  .dlv-input-search
    width: 670px
    flex-grow: 0
    margin-left: auto !important
    font-size: 20px
</style>
