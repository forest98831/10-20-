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
            <el-tabs v-model="activeName" :tab-position="tabPosition" type="card" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">
                    <el-table :data="tableData" :show-header="false" style="width: 100%">
                        <el-table-column prop="name"></el-table-column>
                    </el-table>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second">
                    
                </el-tab-pane>
                <el-tab-pane label="角色管理" name="third">
                    
                </el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">
                    
                </el-tab-pane>
            </el-tabs>
        </div>




        <div id="bottom">
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
            tabPosition: 'left',
            activeName:'first',
            activeName1:'first',
            activeName2:'first',
            activeName3:'first',
            activeName4:'first',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
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
}
.center{
    width: 60%;
    margin: 10px auto 0 auto;
}
#bottom{
    border-top: 1px solid #d1d1d1;
    margin: 10px auto 10px auto;
    font-size: 10px;
    width: 60%;
    height: 50px;
    text-align: center;
    line-height: 25px;
}
</style>