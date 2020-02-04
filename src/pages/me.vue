<template>
  <div class="me-page">
      <div>me页面</div>
      <div>
          <!-- <div v-for="(item, index) in user" :key="index">
              {{ item }} -->
          <div v-for="(item, index) in user" :key="index">
              {{ item.name }}
               <button @click="handleDelet(index)">删除</button>
          </div>
          <button @click="handleOpen">打开新页面</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // user:['小明','小红','小甘']
            user:[
                {name:'先',sex:'男'},
                {name:'钱',sex:'女'},
                {name:'额',sex:'男'}
            ]
        }
    },
    methods:{
        handleDelet(index){
            // window.console.log(index);
            // let mewuser = [...this.user];
            // mewuser.splice(index,1);
            // this.user = mewuser;
            this.user.splice(index,1);
        },
        handleOpen(){
            window.open('/#/axios', '_blank');
        }
    }
}
</script>

<style lang='less' scoped>
.me-page{

}
</style>