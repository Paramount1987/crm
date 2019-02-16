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
          icon: 'list',
          title: 'Лента событий',
          badge: '3',
          to: '/events'
        },
        {
          icon: 'save_alt',
          title: 'Компании на выд.',
          badge: '12',
          to: '/companies/delivery'
        },
        {
          icon: 'save_alt',
          title: 'Выдача',
          to: '/delivery'
        },
        {
          icon: 'folder_shared',
          title: 'Прив. компании',
          to: '/companies'
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
