<template>
  <v-app>
    <v-navigation-drawer
      :width="width"
      :mobile-break-point="0"
      app
      class="navigation"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
        <nuxt />
    </v-content>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      width: 333,
      items: [
        {
          icon: 'apps',
          title: 'Пользователи',
          to: '/users'
        },
        {
          icon: 'bubble_chart',
          title: 'Справочник',
          to: '/inspire'
        },
        {
          icon: 'bubble_chart',
          title: 'Задачи',
          to: '/inspire'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .navigation {
    box-shadow: 0 0 10px 0 rgba(4, 5, 5, 0.15);
  }
</style>
