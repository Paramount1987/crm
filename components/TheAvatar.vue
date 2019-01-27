<template>
   <div class="avatar">
      <v-icon size="60">account_circle</v-icon>
      <div class="avatar-content">
        <span class="user-name">spiderman2018</span>
        <span class="user-status">Финансист</span>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .avatar
    display: flex
    align-items: center

  .avatar-content
    margin-left: 15px

  .user-name
    display: block
    max-width: 185px
    font-size 16px
    text-transform uppercase
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis

  .user-status
    max-width: 185px
    font-size: 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
</style>

