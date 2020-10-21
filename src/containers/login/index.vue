<template>

  <div :style="bgImg">
    <div id="div_whole">
      <div id="div_left">
        <p>用户登录</p>
        <p>USER LOGIN</p>
      </div>

      <div id="div_center">
		<span id="tip">{{ tips }}</span><br />
        <label for="name">用户名：</label>
        <input v-model="username" id="name" name="name" placeholder="请输入用户名" />
        <br />

        <label for="pasword" class="lab">密码：</label>
        <input
          type="password"
          id="pasword"
          name="pasword"
          placeholder="请输入密码"
		  v-model="password"
        />
        <br />

        <div id="login" @click="check">登录</div>
		<div id="reg" @click="onToSign">没有账号？注册</div>
      </div>
     
    </div>
  </div>

</template>

<script>
export default {
  name: "login",
  data() {
	  return{
		  username:'',
		  password:'',
		  tips:'',
		  bgImg:{
			  background:"url(" + require('@/assets/bg.jpg') + ")",
			  backgroundRepeat:"no-repeat",
			  backgroundSize:"cover",
			  width:"100%",
			  height:"100%",
			  position:"absolute"
		  }
	  }
  },
  methods: {
    onToSign() {
      this.$router.push({ path: '/sign' });
	},
	check(){
		if((this.username == "admin") && (this.password == "123456")){
			this.$router.push({ path: '/' });
		}else{
			this.tips = "用户名或密码错误";
		}
	}
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#div_whole {
  width: 480px;
  height: 450px;

  border: 3px solid #eeeeee;
  background-color: #39c5bb;
  margin: 80px auto auto 70%;
}

#div_left {
  float: left;
  margin: 20px;
  margin-top: 30px;
}

#div_left > p:first-child {
  color: yellow;
  font-size: 30px;
}

#div_left > p:last-child {
  color: gray;
  font-size: 30px;
}

#div_center {
  float: left;
  padding: 20px;
}
#tip{
	color: red;
	font-size: 10px;
	padding: 30%;
}
#div_center label {
  font-size: 20px;
}

#div_center input {
  margin: 15px;
}

#name,
#pasword {
  height: 35px;
  width: 300px;
  border-radius: 5px;
  padding: 10px;
}
.lab{
	margin-left: 20px;
}
#login {
  font-size: 20px;
  margin: 20px auto auto 45%;
  cursor: pointer; 
}

#reg {
  margin: 50px auto auto 70%;
  width: 120px;
  cursor: pointer; 
}
</style>