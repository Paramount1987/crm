<template>
  <v-navigation-drawer
    :width="width"
    :mobile-break-point="0"
    app
    class="navigation"
  >
    <div class="nav-avatar">
      <TheAvatar />
    </div>

    <v-list>
      <v-list-tile
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
        class="v-list-tile-nav"
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
</template>

<script>
import TheAvatar from '@/components/TheAvatar';

export default {
  components: {
    TheAvatar
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      drawer: true,
      width: 333
    }
  }
}
</script>

<style lang="stylus">
  .navigation
    box-shadow: 0 0 10px 0 rgba(4, 5, 5, 0.15)

  .v-list-tile-nav
    .v-list__tile
      height: auto
      padding: 22px 15px 22px 55px
      border-bottom: 1px solid #f1f1f2
      font-size: 20px !important

  .v-list__tile--active
    background-color: #e9ecef

  .nav-avatar
    padding: 30px 15px 22px 40px
</style>
