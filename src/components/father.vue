<template>
  <div class="father-component">
      <div>父组件</div>
      <div>父组件数据:{{name}}</div>
      <div>app数据：{{appdata}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'father'
        }
    },
    props:['appdata']
}
</script>

<style>
.father-component{

}
</style>