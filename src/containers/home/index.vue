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
            <el-tabs :tab-position="tabPosition" type="border-card" class="center-tab">
                <el-tab-pane min-width="50%" label="二手交易信息汇总">
                    <div v-for="(item,index) in articalList" :key="index" @click="onToNextPage(index)">
                            <ul class="center-ul">
                                <li class="center-li"><div class="center-a">{{item.title}}</div></li>
                            </ul>
                        </div>
                </el-tab-pane>
                <el-tab-pane min-width="50%" label="清洁套餐">
                    <div v-for="(item,index) in serveList" :key="index" @click="onToNext(index)">
                            <ul class="center-ul">
                                <li class="center-li"><div class="center-a">{{item.title}}</div></li>
                            </ul>
                        </div>
                </el-tab-pane>
            </el-tabs>



            <!-- <div>
                <el-tabs v-model="activeName" :tab-position="tabPosition" type="card" stretch="" >
                    <el-tab-pane label="二手交易信息汇总" name="first">
                        <div v-for="(item,index) in articalList" :key="index" @click="onToNextPage(index)">
                            <ul class="center-ul">
                                <li class="center-li"><div class="center-a">{{item.title}}</div></li>
                            </ul>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="清洁套餐" name="second">
                        <div v-for="(item,index) in serveList" :key="index" @click="onToNext(index)">
                            <ul class="center-ul">
                                <li class="center-li"><div class="center-a">{{item.title}}</div></li>
                            </ul>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div> -->
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
            tabPosition: 'left',
            articalList:this.getArticalList(),
            serveList:this.getServeList(),
            activeName:'first',
            isShow:'true',
        }
    },
    methods:{
        onToLogin(){
            this.$router.push({ path:"/login"})
        },
        getServeList(){
            return[
                {
                    id:0,
                    title:'大扫除A套餐',
                    artical:'去污保洁、擦玻璃、消杀组合，不包含阳光房玻璃面积，阳光房玻璃面积可以根据现场测量收费',
                    standard:`1、厨房：顶棚、餐具架、调料盒表面无油污，水痕；玻璃明亮无水痕；垃圾桶无污垢。
                                2、卫生间：顶棚墙面无污渍水垢；隔断玻璃光亮无水痕；金属器件光亮无水垢；垃圾桶无污垢。
                                3、卧室：天花墙面无蜘蛛网灰尘，墙面挂件无灰尘水印，垃圾桶无污渍水滴，床底部无积尘水迹，大件家具底部无灰尘污渍；
                                4、书房：天花墙面无蜘蛛网灰尘；墙面挂件无灰尘；地面接缝无污渍；垃圾桶无污渍水滴。    
                                5、客厅：天花墙面无灰尘蜘蛛网、电视墙光亮无水印、沙发表面底部无杂质灰尘掉发等、装饰墙面无灰尘污渍、垃圾桶无污垢水滴。
                                6、阳台：天花墙面无灰尘蜘蛛网；晾衣杆无灰尘污渍；盆栽挪移清洁。
                            `,
                    name:'朱女士',
                    phone:'1328584****'
                },
                {
                    id:1,
                    title:'大扫除B套餐',
                    artical:'去污保洁、擦玻璃组合；不包含阳光房玻璃面积，阳光房玻璃面积可以根据现场测量收费',
                    standard:`1、厨房：顶棚、餐具架、调料盒表面无油污，水痕；玻璃明亮无水痕；垃圾桶无污垢。
2、卫生间：顶棚墙面无污渍水垢；隔断玻璃光亮无水痕；金属器件光亮无水垢；垃圾桶无污垢。
3、卧室：天花墙面无蜘蛛网灰尘，墙面挂件无灰尘水印，垃圾桶无污渍水滴，床底部无积尘水迹，大件家具底部无灰尘污渍；
4、书房：天花墙面无蜘蛛网灰尘；墙面挂件无灰尘；地面接缝无污渍；垃圾桶无污渍水滴。    
5、客厅：天花墙面无灰尘蜘蛛网、电视墙光亮无水印、沙发表面底部无杂质灰尘掉发等、装饰墙面无灰尘污渍、垃圾桶无污垢水滴。
6、阳台：天花墙面无灰尘蜘蛛网；晾衣杆无灰尘污渍；盆栽挪移清洁。`,
                    name:'朱女士',
                    phone:'1328584****'
                },
                {
                    id:2,
                    title:'开荒保洁',
                    artical:'大楼开荒保洁是指对大厦内部、外部进行一次彻底保洁工作，以提高其装饰材料美观视觉效果，延长翻新周期及其使用寿命。',
                    standard:`1．大楼开荒保洁对大楼、建筑物外表进行全面清洗。配备专业吊船、吊篮、吊绳、高压喷枪、专用清洁剂（重垢水泥清洁剂、高效壁砖清洁剂、玻璃清洁剂、塑钢清洁剂、不锈钢清洗保养液等）进行彻底清洗，将建筑物外表的建筑残留物、污垢全部清除干净，使其外表整洁、光亮。清洗完毕后在其表面涂上相应的保护液，以达到隔离空气，防止空气有害物质损伤材质。
2．（1）对大楼内部进行全面开荒保洁，
内容包括：地面、墙面、顶棚、标牌装饰物、照明设施、顶柱、金属物、消防设施方法：清洗打蜡（树脂材料）、镜面翻新，去除建筑遗留物，顶棚、墙面的掸尘，灯具、装饰物的擦拭，玻璃、门、窗框的擦拭，金属物的擦拭，用相应的清洗保护液进行养护。
标准：洁净、光亮、无尘、无污迹。
（2）卫生间：包括清洁天花板、墙面、窗、玻璃、镜面、间隔板、门、洗浴盆、台面、垃圾桶、大小便池。
方法：擦拭为主，重点除污，清除死角，不留建筑遗留物，用玻璃清洗剂擦拭镜面、玻璃，冲洗便池消毒。对因长期处于厨房环境下面出现的家具、电器色变现象进行处理、翻新，使其达到历久如新的效果。`,
                    name:'朱女士',
                    phone:'1328584****'
                },
                {
                    id:3,
                    title:'空调清洗',
                    artical:'中央空调的系统结构复杂，每个部分的运行状态都可能影响设备的使用效果，定期的对设备进行维修保养，不仅能够确保其制冷采暖效果，而且可以提升能耗的转化率，降低运行成本。',
                    standard:`一、蒸发器与冷凝器清洗：
1、用清洗剂对蒸发器和冷凝器清洗和进行防腐处理，过滤网进行消毒处理。
2、每个月定期对空调的出风口温度进行检测。
3、每个季度对循环管道进行检查及测试。
二、室内机底盘与内壳的清洁：
1、分别对空调底盘进行绝缘测试及清洗。
2、对室内机风口、风道、过滤器进行清洁。
三、控制系统保养：
1、分别对空调的电脑板、内机到外机的连接线以及外机的电器系统做全面的检查和相应的维护。
2、检查空调的电气线路，控制开关、保护装置是否可以可靠工作。
3、按指定时间和运行情况分别对压缩机和风机电机加入适量的机油和润滑油，以保证风机电机和压缩机的运行正常。`,
                    name:'朱女士',
                    phone:'1328584****'
                },
                {
                    id:4,
                    title:'甲醛治理',
                    // artical:'中央空调的系统结构复杂，每个部分的运行状态都可能影响设备的使用效果，定期的对设备进行维修保养，不仅能够确保其制冷采暖效果，而且可以提升能耗的转化率，降低运行成本。',
                    standard:`第一，空气清洁剂除甲醛
我相信很多人家都准备了空气清新剂。 有时觉得室内空气很浑浊，有时觉得不容易打开窗户。这主观上空气会变好，但这只是在增加，原来的甲醛污染物依然存在。 被空气清新剂的气味遮住了。果皮茶叶等除甲醛方式也一样。
第二，煤灰除甲醛
很多人当然认为活性炭具有一定的吸附能力，也是室内污染去除的常用物质，煤灰和活性炭成分一样也可以用于除甲醛，其实煤灰的内部空隙远远小于活性炭，试剂的吸附能力几乎都是零
除甲醛最重要的不是有多少方法，而是找到正确的方法。 甲醛最可怕的其实是那些。
第一，科学除甲醛
综上所述，活性炭是常见的室内污染物，也是比较传统的方式。 现在很多人知道了。 即使是除甲醛我也不喜欢。 那是因为使用期限非常短，需要经常晾干。 另外，吸附能力越来越差，更换频率高，时间和成本都很高。
第二：除甲醛喷雾剂
除甲醛喷雾剂是更专业的除甲醛方式。 毕竟是专门用于甲醛的物质。 甲醛的释放源头主要是家具这的特征，除甲醛喷雾剂不是管理甲醛，而是重点是在家具表面形成薄膜，但为了防止薄膜破损，需要反复喷雾`,
                    name:'朱女士',
                    phone:'1328584****'
                },
            ]
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
                    url:require('@/assets/id1.png')
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
                    url:require('@/assets/id1.png')
                },
                {
                    id:3,
                    title:'二手海尔3匹柜机',
                    name:'郑先生',
                    phone:'1328584****',
                    price:'2200',
                    artical:'二手海尔3匹柜机，220伏电源，带安装，包3米管子二手海尔3匹柜机，包安装及3米管子，送货上门，装好付款，另外长期出售格力美的海尔挂机柜机吸顶机风管机，保修包装。',
                    url:require('@/assets/id1.png')
                },
                {
                    id:4,
                    title:'三星液晶电视机',
                    name:'朱女士',
                    phone:'1328584****',
                    price:'180',
                    artical:'三星液晶电视机32寸，180元，使用正常，单买也可以，由于是二手物品，电子产品不邮寄，自提。',
                    url:require('@/assets/id1.png')
                },
            ]
        },
        // onToArtical(){
        //     this.$router.push({path:"/artical"})
            // this.$router.push({
            //     name:'artical',
            //     path:"/artical",
            //     query:  {flight: JSON.stringify(item)}
            // })

        // },
        onToNextPage(index) {
            this.$router.push({path:"/artical?id="+index})
            // this.$router.push({path:"/artical"})
        },
         onToNext(index) {
            this.$router.push({path:"/serve?id="+index})
            // this.$router.push({path:"/artical"})
        },
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
    width: 60%;
    margin: 100px auto 0 auto;
    padding: 0 0 0 0;
    text-align: left !important;
    font-size: 20px !important;
}
.center-tab{
    height: 600px;
}
.center-ul{
    border-bottom: 1px dashed black;
}
.center-a{
    text-decoration:none;
    width: 90% ;
    display: block;
    margin: 0px auto 0px auto;
    cursor: pointer;
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
.popUpDetails{
    display: block;
}
.popUpDetails-down{
    display: none;
}
.popUpDetails-show{
    display: block;
}
</style>