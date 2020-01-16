<template>
  <div class="axios-page">
      <div>axios页面</div>
      <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$axios({
            url: "https://api.github.com/users",
            method: "GET",
        }).then(res => {
            window.console.log(res)
        })
    },
    methods:{
        handleClick(){
            this.$axios.console()
        }
    }
}
</script>

<style>

</style>