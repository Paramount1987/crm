<template>
  <v-data-table
    :items="fakeData"
    :hide-headers="true"
    hide-actions
    class="table-catalog"
  >
    <template slot="items" slot-scope="props">
      <CatalogRow
        :item="props.item"
        :rowIndex="props.index"
      />
    </template>
  </v-data-table>
</template>

<script>
import CatalogRow from "@/components/Catalogs/CatalogRow";

export default {
  components: {
    CatalogRow
  },

  data() {
    return {
      fakeData: [
        {name: 'Отдел 1'},
        {name: 'Отдел 2'},
        {name: 'Отдел 3'},
        {name: 'Коммисия банкиру'},
      ]
    }
  }
};
</script>

<style lang="stylus">
</style>

