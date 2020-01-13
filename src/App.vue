<template>
  <div id="app">
    <div>初始化</div>
    <div>app数据：{{num}}</div>
    <div class="componentstest">
      <Father :appdata='num'/>
      <hr/>
      <Son @appmethod='setAppdata'/>
    </div>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
import Father from './components/father'
import Son from './components/son'

export default {
  name: 'app',
  components: {
    Father,
    Son
  },
  data(){
    return{
      num:250
    }
  },
  methods:{
    setAppdata(data){
      this.num = data;
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.componentstest{
  border: 1px solid #000;
}
</style>
