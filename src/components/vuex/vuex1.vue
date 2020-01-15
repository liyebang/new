<template>
  <div class="vuex1-component">
      <div>vuex1组件</div>
      <div>vuex的数据：{{this.$store.state.passwork}}</div>
      <button @click="handleChangVuexdata">修改vuex的数据为999</button>
  </div>
</template>

<script>
export default {
    methods:{
        handleChangVuexdata(){
            this.$store.commit('setPasswork',999)
        }
    }
}
</script>

<style>

</style>