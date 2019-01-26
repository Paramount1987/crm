<template>
  <v-layout class="layout">
    <Select
      :items="clients"
      class="select-sm"
    />

    <Select
      :items="dates"
      class="select-md"
    />

    <v-text-field
      label="Поиск"
      append-icon="search"
      background-color="#edf0f2"
      height="60px"
      solo
      flat
      class="input-search"
    ></v-text-field>

    </v-layout>
</template>

<script>
import Select from '@/components/UI/selects/Select'

export default {
  components: {
    Select
  },

  data: () => ({
    clients: ["Все клиенты", "Вариант1", "Вариант2"],
    dates: ["За все время", "Сегодня", "За неделю", "Текущий месяц"]
  })
};
</script>

<style scoped>
  .layout {
    padding: 50px 63px 30px 63px;
  }

  .select-sm {
    width: 280px;
    flex-grow: 0;
    margin-right: 60px;
  }
  .select-md {
    width: 330px;
    flex-grow: 0;
    margin-right: 20px;
  }
  .input-search {
    width: 670px;
    flex-grow: 0;
    margin-left: auto;
    font-size: 20px;
  }
</style>
