<template>
  <div>

  <v-layout class="catalog-content-top">
    <v-tabs
      v-model="active"
      color="#fff"
      slider-color="#ffdd2d"
      class="catalog-tabs"
    >
      <v-tab
        v-for="n in 3"
        :key="n"
        ripple
      >
        {{ tabsTitle[n - 1] }}
      </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-card flat>
          <v-card-text class="card-text">
            <v-layout
              justify-space-between
              class="card-text-top"
            >
              <h1>Справочник отделов</h1>
              <div>
                <v-layout>
                  <v-text-field
                    label="Введите новую категорию затрат"
                    background-color="#edf0f2"
                    height="60px"
                    solo
                    flat
                    class="input-value"
                  ></v-text-field>

                  <Btn
                    color="#e9ecef"
                    text="+"
                    class="btn-add"
                  />
                </v-layout>
              </div>
            </v-layout>

            <div>
              <CatalogsTable />
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-layout>

  </div>
</template>

<script>
import CatalogsTable from '@/components/Catalogs/CatalogsTable'

export default {
  components: {
    CatalogsTable
  },

  data () {
    return {
      tabsTitle: ['Категории затрат', 'Справочник отделов', 'Телефонный справочник'],
      active: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .catalog-content-top
    background-color #fff

  .catalog-tabs
    width: 100%
    padding: 45px 0 0 0

  .card-text
    padding: 60px 0 0 0
    background-color: #f9f9f9
    &-top
      margin-bottom: 30px
      padding-left: 63px
      padding-right: 54px

  .input-value
    width: 444px

  .btn-add
    margin-left: 12px
</style>
