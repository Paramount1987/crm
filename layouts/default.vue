<template>
  <v-app>
    <TheNavigation
      :items="items"
    />

    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/TheNavigation';

export default {
  components: {
    TheNavigation
  },

  data() {
    return {
      items: [
        {
          icon: 'people',
          title: 'Лента событий',
          badge: '3',
          to: '/events'
        },
        {
          icon: 'people',
          title: 'Пользователи',
          to: '/users'
        },
        {
          icon: 'import_contacts',
          title: 'Справочник',
          to: '/catalog'
        },
        {
          icon: 'format_list_numbered',
          title: 'Задачи',
          to: '/tasks'
        }
      ]
    }
  }
}
</script>
