<template>
  <div>
      <div class="head">
        <div class="head-left">优诚悦邻</div>
        <div class="head-right" @click="onToLogin">登录</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'优诚悦邻',
    data(){
        return{
            
        }
    },
    methods:{
        onToLogin(){
            this.$router.push({ path:"/login"})
        },
    }

}
</script>

<style>
.head{
    background-color: skyblue;
    display: flex;
    justify-content: space-between;
    padding: 10px 20% 10px 20%;
    color: white;
}
.head-left{
    font-size: 40px;
    font-weight: 500;
}
.head-right{
    text-align: right;
    font-size: 20px;
    color: white;
}
</style>