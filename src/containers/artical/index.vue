<template>
    <div>
        <div class="head">
            <div class="head-left">
                <img :src="logo" alt class="head-left-logo">
                优诚悦邻公众服务平台
            </div>
            <div class="head-right" @click="onToLogin">登录</div>
        </div>


        <div class="center" v-for="(item,index) in articalList" :key="index">
            {{item.artical}}
        </div>




        <div class="bottom">
            <span>宁波优城悦邻商业运营管理有限责任公司</span><br />
            <span>浙ICP备20010478号</span>
            <span>地址浙江省宁波市鄞州区中山东路2622号甬江人才创新中心1号楼19层</span>
            <span> 网站首页地址www.joylinkcenter.com</span>
        </div>
  </div>
</template>

<script>
export default {
    name:'优诚悦邻',
    data(){
        return{
            logo:require('@/assets/logo.png'),
            articalList:this.getArticalList(),
        }
    },
    methods:{
        onToLogin(){
            this.$router.push({ path:"/login"})
        },
        getArticalList(){
            return[
                {
                    id:1,
                    name:'标题1，帅哥是怎么养成的',
                    artical:'这里是文章1帅哥是怎么养成的',
                },
                {
                    id:2,
                    name:'标题2，美女是怎么养成的',
                    artical:'这里是文章2美女是怎么养成的',
                },
                {
                    id:3,
                    name:'标题3，大佬是怎么养成的',
                    artical:'这里是文章3大佬是怎么养成的',
                },
                {
                    id:4,
                    name:'标题4，大佬是怎么养成的',
                    artical:'这里是文章4大佬是怎么养成的',
                },
            ]
        },
        onToNextPage(id) {
            
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
.head-left-logo{
    width: 50px;
    height: 50px;
    transform: translate(0,12px);
}
.head-right{
    text-align: right;
    font-size: 20px;
    color: white;
    cursor: pointer;
    margin-top: 15px;
}
.center{
    width: 60%;
    margin: 50px auto 0 auto;
    padding: 0 0 0 0;
}
.center-ul{
    border-bottom: 1px dashed black;
}
.center-a{
    text-decoration:none;
    width: 90%;
    display: block;
    margin: 0px auto 0px auto;
    padding: 5px 0 5px 0;
}
.center-ul:hover{
    background-color: skyblue;
}
.bottom{
    border-top: 1px solid #d1d1d1;
    padding: 10px 20% 10px 20%;
    font-size: 10px;
    width: 60%;
    height: 50px;
    text-align: center;
    line-height: 25px;
    position: absolute;
    bottom: 10px;
}
</style>