<template>
  <div>
    <label class="label" @click="$refs.fileInput.value = ''">
      <span class="file-text">{{fileText}}</span>
      <span class="btn-icon"><v-icon class="icon">attachment</v-icon></span>

      <input type="file" multiple style="display:none" ref="fileInput" @input="uploadFiles">
    </label>
  </div>
</template>

<script>
import Btn from "@/components/UI/buttons/Btn"
export default {
  components: {
    Btn
  },
  data() {
    return {
      fileText: 'Прикрепить файл'
    }
  },
  methods: {
    uploadFiles(e) {
      const path = e.target.value;
      this.fileText = path;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .label
    display flex

  .btn-icon
    display inline-flex
    align-items center
    justify-content center
    width 60px
    height 60px
    border-radius 10px
    background-color #e9ecef
    cursor pointer
    transition all .3s
    &:hover
      background-color #dadde0

  .icon
    font-size 35px
    color: #b3b3b3
    transform rotate(-45deg)

  .file-text
    display inline-flex
    align-items center
    width 250px
    height 60px
    margin-right 18px
    padding 0 23px
    border-radius 10px
    background-color #e9ecef
    font-size 16px
    overflow hidden
    cursor pointer
    transition all .3s
    &:hover
      background-color #dadde0
</style>
