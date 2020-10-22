<template>
    <div>
        <div class="head" @click="goHome">
            <div class="head-left">
                <img :src="logo" alt class="head-left-logo">
                优城悦邻公众服务平台
            </div>
            <div class="head-right" @click="onToLogin">请登录</div>
        </div>


            <div class="center">
                <img :src="url" alt="" class="center-img">
                <div class="center-left">
                    <div class="center-title">{{title}}</div>
                    <div class="center-price">￥{{price}}.00</div>
                    <div class="center-npd">
                        <div>联系人：{{name}}</div>
                        <div>联系方式：{{phone}}</div>
                        <div>发布时间：{{date}}</div>
                    </div>
                </div>
            </div>

            <div class="three">
                <div class="three-border">
                    <div class="three-title">商品详情</div>
                </div>
                <div class="three-artical">{{artical}}</div>
            </div>




            <!-- <div class="center">
                <div class="centerleft"><img :src="url" alt="" class="center-img"></div>
                <div class="centerright">
                    <div>名称：{{title}}</div>
                    <div>价格：{{price}}元</div>
                    <div>联系方式：{{phone}}</div>
                    <div>联系人：{{name}}</div>
                    <div>详情：{{artical}}</div>
                </div>
                
                
            </div> -->
        



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
            date:'',
        }
        
    },
    components:{},
    methods:{
        onToLogin(){
            this.$router.push({ path:"/login"})
        },
        goHome(){
            this.$router.push({ path:"/"})
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
                    date:'2020-10-31  14:14:25',
                    url:require('@/assets/id0.png'),
                },
                {
                    id:1,
                    title:'99新Apple/苹果 iPhone X 全网通',
                    name:'胡先生',
                    phone:'1328584****',
                    price:'2550',
                    artical:'Apple/苹果 iPhone X 全网通 ，更换过电池  原装屏幕 功能无问题网络类型:无需合约版,机身颜色:银色,套餐类型:官方标配,存储容量:256GB',
                    url:require('@/assets/id1.png'),
                    date:'2020-10-31  14:14:25',

                },
                {
                    id:2,
                    title:'自用的英特尔双核电脑',
                    name:'邬先生',
                    phone:'1328584****',
                    price:'435',
                    artical:'自用的英特尔双核电脑，办公小游戏可以没问题，配置如图。机子运行稳定，机箱钢板厚实，整机安静。',
                    url:require('@/assets/id2.png'),
                    date:'2020-10-31  14:14:25',

                },
                {
                    id:3,
                    title:'二手海尔3匹柜机',
                    name:'郑先生',
                    phone:'1328584****',
                    price:'2200',
                    artical:'二手海尔3匹柜机，220伏电源，带安装，包3米管子二手海尔3匹柜机，包安装及3米管子，送货上门，装好付款，另外长期出售格力美的海尔挂机柜机吸顶机风管机，保修包装。',
                    url:require('@/assets/id3.png'),
                    date:'2020-10-31  14:14:25',

                },
                {
                    id:4,
                    title:'三星液晶电视机',
                    name:'朱女士',
                    phone:'1328584****',
                    price:'180',
                    artical:'三星液晶电视机32寸，180元，使用正常，单买也可以，由于是二手物品，电子产品不邮寄，自提。',
                    url:require('@/assets/id4.png'),
                    date:'2020-10-31  14:14:25',

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
                this.date = item.date
            }

        })

    }

}
</script>

<style scoped>
.head{
    background-image: linear-gradient(to right, #123c7c,#176ccb);;
    display: flex;
    justify-content: space-between;
    padding: 20px 20% 30px 20%;
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
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin-top: 15px;
}
.center{
    /* width: 60%; */
    margin: 100px auto 0 auto;
    padding: 0 20% 0 20%;
    display: flex;
    justify-content: space-between;
}
.center-left{
    width: 75%;
}
.center-img{
    height: 254px;
    width: 254px;
}
.center-title{
    color: #333;
    font-size: 28px;
    font: bold;
}
.center-price{
    color: #333;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 700;
}
.center-npd{
    background-color: rgb(221, 221, 221);
    padding: 15px 0 20px 20px;
    line-height: 38px;
    font-size: 20px;
    margin: 10px 0 0px 0;
}
.three{
    width: 60%;
    margin: 50px auto 0 auto;
}
.three-border{
    border-bottom: 1px solid rgb(221, 221, 221);
}
.three-title{
    width: 100px;
    text-align: center;
    font-size: 24px;
    color: #123c7c ;
    font-weight: 700;
    height: 40px;
    margin-left: 30px;
    border-bottom: 4px solid #123c7c ;
}
.three-artical{
    font-size: 20px;
    color: #333;
    line-height: 2rem;
    margin-top: 10px;
}
.bottom{
    padding: 20px 20% 20px 20%;
    font-size: 14px ;
    width: 60%;
    height: 50px;
    text-align: center;
    line-height: 25px;
    position: absolute;
    bottom: 0px;
    background-color:#393939;
    color: #666;
}
</style>