<template>
  <div>
    <v-layout
      justify-space-between
      class="user-content-top"
    >
      <BtnClientCreate
        @click="showModal"
      />
      <BtnFilter />
    </v-layout>

    <UsersFormTable />
    <UsersTable
      @click="showModal"
    />

    <v-dialog
      v-model="isFormShow"
      max-width="800"
      content-class="modal-form"
    >
      <UserForm
        @clickClose="closeModal"
      />
    </v-dialog>
  </div>
</template>

<script>
import BtnClientCreate from '@/components/UI/buttons/BtnCreateClient'
import BtnFilter from '@/components/UI/buttons/BtnFilter'
import UsersTable from '@/components/Users/UsersTable'
import UsersFormTable from '@/components/Users/UsersFormTable'
import UserForm from '@/components/Users/UserForm'

export default {
  components: {
    UsersTable,
    UsersFormTable,
    UserForm,
    BtnClientCreate,
    BtnFilter
  },

  data () {
    return {
      isFormShow: false
    }
  },

  methods: {
    showModal() {
      this.isFormShow = true;
    },

    closeModal() {
      this.isFormShow = false;
    }
  }
}
</script>

<style lang="stylus">
  .user-content-top
    background-color: #fff
    padding: 30px 63px
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15)

  .modal-form
    background-color: #fff
</style>

