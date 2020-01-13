<template>
  <div class="son-component">
      <div>子组件</div>
      <div>儿组件数据：{{name}}</div>
      <button @click="handleSetAppdata">修改app数据</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'son'
        }
    },
    methods:{
        handleSetAppdata(){
            this.$emit('appmethod',999999)
        }
    }
}
</script>

<style>
.son-component{

}
</style>