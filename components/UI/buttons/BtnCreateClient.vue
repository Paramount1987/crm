<template>
  <v-btn
    class="btn"
    color="#ffdd2d"
    depressed
    @click="$emit('click')"
  >
    {{ text || 'Создать клиента' }}

    <v-icon v-if="!icon" class="icon">
      person_add
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
    icon: {
      type: String
    }
  }
}
</script>

<style scoped>
  .btn {
    border-radius: 10px;
    height: 60px;
    margin: 0;
    padding: 0 27px;
    font-size: 20px;
    text-transform: none;
  }
  .icon {
    margin-left: 77px;
  }
</style>

