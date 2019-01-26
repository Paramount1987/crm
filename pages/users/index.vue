<template>
  <div>
    <v-layout
      justify-space-between
      class="content-top"
    >
      <BtnClientCreate />
      <BtnFilter />
    </v-layout>

    <UsersFormTable />
    <UsersTable />
  </div>
</template>

<script>
import BtnClientCreate from '@/components/UI/buttons/BtnCreateClient'
import BtnFilter from '@/components/UI/buttons/BtnFilter'
import UsersTable from '@/components/Users/UsersTable'
import UsersFormTable from '@/components/Users/UsersFormTable'

export default {
  components: {
    UsersTable,
    UsersFormTable,
    BtnClientCreate,
    BtnFilter
  }
}
</script>

<style scoped>
  .content-top {
    background-color: #fff;
    padding: 30px 63px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
  }
</style>

