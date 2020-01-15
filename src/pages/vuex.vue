<template>
  <div class="vuex-page">
      <div>vuex页面</div>
      <Vuex1/>
      <Vuex2/>
  </div>
</template>

<script>
import Vuex1 from '../components/vuex/vuex1'
import Vuex2 from '../components/vuex/vuex2'

export default {
    components:{
        Vuex1,
        Vuex2
    }
}
</script>

<style>

</style>