<template>
  <v-data-table
    :headers="headers"
    :items="fakeUsers"
    hide-actions
    class="table-users"
  >
    <template slot="items" slot-scope="props">
      <UserRow
        :user="props.item"
        :rowIndex="props.index"
        @clickEdit="$emit('click')"
      />
    </template>
  </v-data-table>
</template>

<script>
import UserRow from "@/components/Users/UserRow";
import { users, headers } from "@/data/users";

export default {
  components: {
    UserRow
  },

  data() {
    return {
      headers,
      users
    };
  },

  computed: {
    // remove for integration
    fakeUsers() {
      const items = [];

      for (let i = 0; i < 20; i++) {
        items.push(this.users[0])
      }

      return items;
    }
  }
};
</script>

<style lang="stylus">
</style>

