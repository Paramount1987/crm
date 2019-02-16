<template>
  <div>
    <v-layout class="content-top">
      <BtnSave class="btn-save" icon="none" text="Сохранить"/>
    </v-layout>

    <v-layout
      class="content-title"
      align-center
      justify-space-between
    >
      <div>
        <h2>Создать компанию на выдачу</h2>
      </div>
      <div>
        <FileInput />
      </div>
    </v-layout>

    <FormCompany />

    <v-layout class="table-title">
      <h3>Расчетные счета</h3>
    </v-layout>
    <v-layout>
      <v-data-table
        :headers="headers"
        :items="fakeItems"
        hide-actions
        class="dlv-table"
      >
        <template slot="items" slot-scope="props">
          <BillRow
            :item="props.item"
            :rowIndex="props.index"
          />
        </template>
      </v-data-table>
    </v-layout>
  </div>
</template>

<script>
import BtnSave from "@/components/UI/buttons/BtnCreateClient"
import FormCompany from "@/components/Forms/FormCompany"
import BillRow from "@/components/Bills/BillRow"
import FileInput from "@/components/UI/inputs/File"

export default {
  components: {
    BtnSave,
    FileInput,
    FormCompany,
    BillRow
  },

  data() {
    return {
      headers: [
        {text: 'Расчетный счет', align: 'center', sortable: false},
        {text: 'Полное название банка', align: 'center', sortable: false},
        {text: 'Получатель', align: 'center', sortable: false},
        {text: 'КПП', align: 'center', sortable: false},
        {text: 'ИНН', align: 'center', sortable: false},
        {text: 'Кор. счет', align: 'center', sortable: false},
        {text: 'БИК', align: 'center', sortable: false},
        {text: '', align: 'center', sortable: false}
      ],
      items: [{
        date: '40702810402080001046',
        client: 'АО «Альфа-Банк», г. Москва',
        payer: 'ООО "СУпермех"',
        inn: '7706436472',
        status: '7706436472',
        company: '30101810200000000593',
        statusCompany: '044525593'
      }]
    }
  },

  computed: {
    // remove for integration
    fakeItems() {
      const items = [];

      for (let i = 0; i < 2; i++) {
        items.push(this.items[0])
      }

      items.push({date: 'new'})

      return items;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content-top
    background-color: #fff
    padding: 30px 63px
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15)

  .content-title
    padding 12px 55px 10px 63px

  .table-title
    padding 28px 55px 28px 63px

  .btn-save
    width 330px

  .dlv-table
    width: 100%
    tr
      th:first-child
        padding-left: 70px !important
      th:last-child
        padding-right: 70px !important
</style>
