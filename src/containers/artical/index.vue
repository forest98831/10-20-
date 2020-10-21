<template>
    <div>
        <div class="head">
            <div class="head-left">
                <img :src="logo" alt class="head-left-logo">
                优诚悦邻公众服务平台
            </div>
            <div class="head-right" @click="onToLogin">登录</div>
        </div>


            <div class="center">
                <div class="centerleft"><img :src="url" alt="" class="center-img"></div>
                <div class="centerright">
                    <div>名称：{{title}}</div>
                    <div>价格：{{price}}元</div>
                    <div>联系方式：{{phone}}</div>
                    <div>联系人：{{name}}</div>
                    <div>详情：{{artical}}</div>
                </div>
                
                
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
    name:'youchengyuelin',
    
    data(){
        return{
            logo:require('@/assets/logo.png'),
            articalList:this.getArticalList(),
            bigId:'',
            name:'',
            title:'',
            phone:'',
            price:'',
            artical:'',
            url:'',
        }
        
    },
    components:{},
    methods:{
        onToLogin(){
            this.$router.push({ path:"/login"})
        },
        getArticalList(){
            return[
                {
                    id:0,
                    title:'戴尔venue11pro7130',
                    name:'李先生',
                    phone:'1328584****',
                    price:'1199',
                    artical:'戴尔venue11pro7130顶配，二合一平板电脑，  酷睿i5，8g运行，256g固态硬盘，超清触摸屏，二合一可拆卸当平板，电脑支持标准3.0usb口，内存卡插口，hdmi接口，支持蓝牙，前后摄像头，带键盘，带充电器，功能一切正常！谢谢！',
                    url:require('@/assets/id0.png')
                },
                {
                    id:1,
                    title:'99新Apple/苹果 iPhone X 全网通',
                    name:'胡先生',
                    phone:'1328584****',
                    price:'2550',
                    artical:'Apple/苹果 iPhone X 全网通 ，更换过电池  原装屏幕 功能无问题网络类型:无需合约版,机身颜色:银色,套餐类型:官方标配,存储容量:256GB',
                    url:require('@/assets/id1.png')
                },
                {
                    id:2,
                    title:'自用的英特尔双核电脑',
                    name:'邬先生',
                    phone:'1328584****',
                    price:'435',
                    artical:'自用的英特尔双核电脑，办公小游戏可以没问题，配置如图。机子运行稳定，机箱钢板厚实，整机安静。',
                    url:require('@/assets/id2.png')
                },
                {
                    id:3,
                    title:'二手海尔3匹柜机',
                    name:'郑先生',
                    phone:'1328584****',
                    price:'2200',
                    artical:'二手海尔3匹柜机，220伏电源，带安装，包3米管子二手海尔3匹柜机，包安装及3米管子，送货上门，装好付款，另外长期出售格力美的海尔挂机柜机吸顶机风管机，保修包装。',
                    url:require('@/assets/id3.png')
                },
                {
                    id:4,
                    title:'三星液晶电视机',
                    name:'朱女士',
                    phone:'1328584****',
                    price:'180',
                    artical:'三星液晶电视机32寸，180元，使用正常，单买也可以，由于是二手物品，电子产品不邮寄，自提。',
                    url:require('@/assets/id4.png')
                },
            ]
        },
    },
    mounted:function(){
        const url = window.location.href.split('?')[1];
        const id = url.split('=')[1]
        console.log(id);
        this.articalList.map(item =>{
            if(item.id == id){
                // alert(item.artical)
                // console.log(item.artical)
                this.name = item.name
                this.title = item.title
                this.price = item.price
                this.artical = item.artical
                this.url = item.url
                this.phone = item.phone
            }

        })

    }

}
</script>

<style scoped>
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
    /* width: 60%; */
    margin: 150px auto 0 auto;
    padding: 0 20% 0 20%;
    display: flex;
    justify-content: space-around;
}
.centerleft{
    width: 45%;
}
.centerright{
    width: 40%;
    line-height: 3rem;
    font-size: 20px;
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
.center-img{
    /* height: 300px; */
    width: 425px;
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