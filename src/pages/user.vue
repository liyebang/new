<template>
  <div class="user-page">
      <div>用户页面</div>
      <div v-if="Object.keys(this.$route.query).length != 0">用户名:{{this.$route.query.username}}</div>
  </div>
</template>

<script>
export default {
    mounted(){
        window.console.log(this.$route)
    },
    watch:{
        $route(){
            window.console.log(this.$route)
        }
    }
}
</script>

<style>
.user-page{

}
</style>