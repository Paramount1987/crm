<template>
  <div>
    <v-layout
      justify-space-between
      class="content-top"
    >
      <BtnClientCreate text="Cоздать новую прив.компанию" />
      <BtnFilter />
    </v-layout>

    <UsersFormTable />

    <v-layout>
      <v-data-table
        :headers="headers"
        :items="fakeItems"
        hide-actions
        class="dlv-table"
      >
        <template slot="items" slot-scope="props">
          <CompaniesRow
            :item="props.item"
            :rowIndex="props.index"
          />
        </template>
      </v-data-table>
    </v-layout>
  </div>
</template>

<script>
import BtnClientCreate from '@/components/UI/buttons/BtnCreateClient'
import BtnFilter from '@/components/UI/buttons/BtnFilter'
import UsersFormTable from '@/components/Users/UsersFormTable'
import CompaniesRow from '@/components/Companies/CompaniesRow'

export default {
  components: {
    BtnClientCreate,
    BtnFilter,
    UsersFormTable,
    CompaniesRow
  },
  data: () => ({
    clients: ["Все клиенты", "Вариант1", "Вариант2"],
    dates: ["За все время", "Сегодня", "За неделю", "Текущий месяц"],
    headers: [
      {text: 'Название', align: 'center', sortable: false},
      {text: 'ИНН', align: 'center', sortable: false},
      {text: 'Статус', align: 'center', sortable: false},
      {text: 'Директор', align: 'center', sortable: false},
      {text: 'Телефон', align: 'center', sortable: false},
      {text: 'Счета', align: 'center', sortable: false},
      {text: 'Ссылка', align: 'center', sortable: false},
      {text: '', align: 'center', sortable: false},
      {text: '', align: 'center', sortable: false}
    ],
    items: [{
      date: 'ООО “ххх”',
      client: '16546546546',
      payer: 'Активен',
      inn: '1 250 000',
      status: '8920011111',
      company: '114547115847894',
      statusCompany: 'Ссылка'
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
  .content-top
    background-color: #fff
    padding: 30px 63px
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15)

  .dlv-table
    width: 100%
    tr
      th:first-child
        padding-left: 70px !important
      th:last-child
        padding-right: 70px !important
</style>
