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
                <div class="centerleft">
                    <img :src="url" alt="" class="center-img">
                </div>
                <div class="centerright">
                    <div>名称：{{title}}</div>
                    <div class="text-wrapper">标准：<br>{{standard}}</div>
                    <div>详情：{{artical}}</div>
                    <div>联系方式：{{phone}}</div>
                    <div>联系人：{{name}}</div>
                </div>
            </div>

            <div>
                <el-table
                :data="tableData"
                :span-method="objectSpanMethod"
                border
                style="width: 60%; margin:20px auto 30px auto;"
                :header-cell-style="{textAlign: 'center'}"
                :cell-style="{ textAlign: 'center' }">
                <el-table-column
                    prop="select"
                    label="套餐"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="service"
                    label="服务范围">
                </el-table-column>
                <el-table-column
                    prop="area"
                    label="面积">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="价格">
                </el-table-column>
                <el-table-column
                    prop="off"
                    label="现价">
                </el-table-column>
                <el-table-column
                    prop="standard"
                    label="收费标准">
                </el-table-column>
                </el-table>
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
            serveList:this.getServeList(),
            bigId:'',
            name:'',
            title:'',
            phone:'',
            standard:'',
            artical:'',
            url:'',
            tableData:'',
        }
        
    },
    components:{},
    methods:{
        onToLogin(){
            this.$router.push({ path:"/login"})
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 6 === 0) {
            return {
              rowspan: 6,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
        getServeList(){
            return[
                {
                    id:0,
                    title:'大扫除A套餐',
                    artical:'去污保洁、擦玻璃、消杀组合，不包含阳光房玻璃面积，阳光房玻璃面积可以根据现场测量收费',
                    standard:`1、厨房：顶棚、餐具架、调料盒表面无油污，水痕；玻璃明亮无水痕；垃圾桶无污垢。
2、卫生间：顶棚墙面无污渍水垢；隔断玻璃光亮无水痕；金属器件光亮无水垢；垃圾桶无污垢。
3、卧室：天花墙面无蜘蛛网灰尘，墙面挂件无灰尘水印，垃圾桶无污渍水滴，床底部无积尘水迹，大件家具底部无灰尘污渍。
4、书房：天花墙面无蜘蛛网灰尘；墙面挂件无灰尘；地面接缝无污渍；垃圾桶无污渍水滴。    
5、客厅：天花墙面无灰尘蜘蛛网、电视墙光亮无水印、沙发表面底部无杂质灰尘掉发等、装饰墙面无灰尘污渍、垃圾桶无污垢水滴。`,
                    name:'朱女士',
                    phone:'1328584****',
                    url:require('@/assets/serve1.png'),
                    tableData: [{
                        select: '大扫除A套餐',
                        standard:'/',
                        area: '60㎡以下',
                        price: '600元',
                        off: '500元',
                        service:'/',
                        },
                        {
                        area: '61-90㎡',
                        standard:'/',
                        price: '780元',
                        service:'/',
                        off: '680元'
                        },
                        {
                        area: '91-120㎡',
                        standard:'/',
                        price: '980元',
                        service:'/',
                        off: '880元'
                        },{
                        area: '121-150㎡',
                        standard:'/',
                        price: '1380元',
                        service:'/',
                        off: '1280元'
                        },
                        {
                        area: '151-200㎡',
                        standard:'/',
                        price: '1680元',
                        service:'/',
                        off: '1580元'
                        },{
                        area: '200㎡以上',
                        standard:'/',
                        price: '现场报价，参考9元/㎡',
                        service:'/',
                        off: '扣点5%'
                    }]
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
                    phone:'1328584****',
                    url:require('@/assets/serve2.png'),
                    tableData: [{
                        select: '大扫除B套餐',
                        area: '60㎡以下',
                        price: '500元',
                        service:'/',
                        standard:'/',
                        off: '400元'
                        },
                        {
                        area: '61-90㎡',
                        price: '620元',
                        service:'/',
                        standard:'/',
                        off: '520元'
                        },
                        {
                        area: '91-120㎡',
                        price: '780元',
                        service:'/',
                        standard:'/',
                        off: '680元'
                        },{
                        area: '121-150㎡',
                        price: '1080元',
                        service:'/',
                        standard:'/',
                        off: '980元'
                        },
                        {
                        area: '151-200㎡',
                        price: '1380元',
                        service:'/',
                        standard:'/',
                        off: '1280元'
                        },{
                        area: '200㎡以上',
                        price: '现场报价，参考7元/㎡',
                        service:'/',
                        standard:'/',
                        off: '扣点5%'
                    }]
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
                    phone:'1328584****',
                    url:require('@/assets/serve3.png'),
                    tableData: [{
                        select: '开荒保洁',
                        area: '/',
                        price: '5元/平米',
                        service:'无家具全装修',
                        standard:'60㎡以内500元起步价，平台服务费100元',
                        off: '/'
                        },
                        {
                        area: '/',
                        price: '6元/平米',
                        service:'有家具全装修',
                        standard:'60㎡以内560元起步价，平台服务费100元',
                        off: '/'
                        },{
                        area: '/',
                        price: '9元/平米',
                        service:'别墅开荒保洁',
                        standard:'200㎡以内1900元起步价，平台服务费100元',
                        off: '/'
                    }]
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
                    phone:'1328584****',
                    url:require('@/assets/serve4.png'),
                    tableData: [{
                        select: '空调清洗',
                        area: '/',
                        price: '89元/台',
                        service:'/',
                        standard:'/',
                        off: '79元/台'
                    }]
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
                    phone:'1328584****',
                    url:require('@/assets/serve5.png'),
                    tableData: [{
                        select: '甲醛治理',
                        area: '/',
                        price: '100元/点位',
                        service:'甲醛检测',
                        standard:'2个点位起测',
                        off: '扣点5%'
                        },{
                        area: '/',
                        price: '40元/平米',
                        service:'甲醛治理',
                        standard:'起步价1600元',
                        off: '扣点5%'
                    }]
                },
            ]
        },
    },
    mounted:function(){
        const url = window.location.href.split('?')[1];
        const id = url.split('=')[1]
        console.log(id);
        this.serveList.map(item =>{
            if(item.id == id){
                // alert(item.artical)
                // console.log(item.artical)
                this.name = item.name
                this.title = item.title
                this.standard = item.standard
                this.artical = item.artical
                this.url = item.url
                this.phone = item.phone
                this.tableData = item.tableData
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
    margin: 50px auto 0 auto;
    padding: 0 20% 0 20%;
    display: flex;
    justify-content: space-around;
}
.centerleft{
    width: 40%;
}
.centerright{
    width: 60%;
    line-height: 3rem;
    font-size: 16px;
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
    margin-top: 100px;
    width: 425px;
}
.text-wrapper {
  white-space: pre-wrap;
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
    /* bottom: 10px; */
}
.el-table { pointer-events:none; }
</style>