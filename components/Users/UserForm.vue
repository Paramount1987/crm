<template>
  <div class="user-form-wrapper">
    <div class="user-form-top">
      <h4 class="display-1">Карточка пользователя</h4>

      <v-icon
        class="icon-close"
        color="#000"
        @click="$emit('clickClose')"
      >
        close
      </v-icon>
    </div>

    <v-layout justify-space-between>
      <div class="w-215">
        <label>Логин</label>
        <v-text-field
          value="Spiderman2018"
          background-color="#edf0f2"
          height="60px"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="w-215">
        <label>Пароль</label>
        <v-text-field
          value="Spiderman2018"
          background-color="#edf0f2"
          height="60px"
          type="password"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="w-215">
        <label>Дата создания</label>
        <Date />
      </div>
    </v-layout>

    <v-layout justify-space-between>
      <div class="w-330">
        <label>Отдел</label>
        <Select
          :items="department"
        />
      </div>

      <div class="w-330">
        <label>Должность</label>
        <Select
          :items="position"
        />
      </div>
    </v-layout>

    <v-layout justify-space-between>
      <div class="w-330">
        <label>Почта</label>
        <v-text-field
          value="test@test.com"
          background-color="#edf0f2"
          height="60px"
          solo
          flat
        ></v-text-field>
      </div>

      <div class="w-330">
        <label>Телефон</label>
        <v-text-field
          value="(999)1223456"
          mask="phone"
          background-color="#edf0f2"
          height="60px"
          solo
          flat
        ></v-text-field>
      </div>
    </v-layout>

    <v-layout
      justify-space-between
      class="mb-30"
    >
      <div class="w-330">
        <label>Роли</label>
        <Select
          :items="roles"
        />
      </div>

      <div class="w-330">
        <label>Статус</label>
        <Select
          :items="status"
        />
      </div>
    </v-layout>

    <div>
      <Btn
        text="Сохранить изменения"
        color="#ffdd2d"
        block
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      department: ["Отдел1", "Отдел2", "Отдел3"],
      position: ["Начальник", "Начальник2", "Начальник3"],
      roles: ["Инкассатор", "Инкассатор2", "Инкассатор3"],
      status: ["Активен", "Неактивен"]
    }
  }
}
</script>

<style lang="stylus">
  .user-form-wrapper
    padding: 50px 60px

  .user-form-top
    position relative
    margin-bottom 50px

  .icon-close
    position absolute
    top: 5px
    right: 0
    cursor pointer

  .w-215
    width 215px

  .w-330
    width 330px

  .mb-30
    margin-bottom 30px

  label
    display: inline-block
    margin-bottom 10px
    color: #808080
    font-size 16px
</style>

