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
    <p><router-link to='/'>/</router-link></p>
    <p><router-link to='/user'>user</router-link></p>
    <p><router-link to='/user?username=aaa'>user?username=aaa</router-link></p>
    <p>
      <router-link :to='`/id/${num}`'>id</router-link>
      <button @click="handleIdAdd">id+1</button>
    </p>
    <p>
      <router-link to='/vuex'>vuex</router-link>
    </p>
    <p>
      <router-link to="/ElementUI">ElementUI</router-link>
    </p>
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
    },
    handleIdAdd(){
      this.num++;
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
