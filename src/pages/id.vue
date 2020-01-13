<template>
  <div class="id-page">
      <div>id页面</div>
      <div>id为：{{this.$route.params.id}}</div>
  </div>
</template>

<script>
export default {
    mounted(){
        window.console.log(this.$route)
    }
}
</script>

<style>
.id-page{

}
</style>