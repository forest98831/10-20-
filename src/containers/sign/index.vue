<template>
  <div>
    <div id="div_whole">
      <div id="div_left">
        <p>新用户注册</p>
        <p>USER REGISTER</p>
      </div>

      <div id="div_center">
        <label for="name">用户名：</label>
        <input id="name" name="name" placeholder="请输入用户名" />
        <span id="span_name"></span>
        <br />

        <label for="pasword" class="lab">密码：</label>
        <input
          type="password"
          id="pasword"
          name="pasword"
          placeholder="请输入密码"
        />
        <span id="span_password"></span>
        <br />

        <label for="email" class="lab">邮箱：</label>
        <input type="email" id="email" name="email" placeholder="请输入邮箱" />
        <span id="span_email"></span>
        <br />

        <label for="phone_number">手机号：</label>
        <input
          type="text"
          id="phone_number"
          name="phone_number"
          placeholder="请输入手机号"
        />
        <span id="span_phone"></span>
        <br />

		<span id='reg'>注册</span>
      </div>

      <div id="div_right">
        <p>已有账号？<a href="">账号登录</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

body {
  padding: 50px;
}

#div_whole {
  width: 480px;
  height: 500px;
  border: 3px solid #eeeeee;
  background-color: #39c5bb;
  margin: 80px auto auto 70%;
}

#div_left {
  float: left;
  margin: 20px;
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

#div_center label {
  font-size: 20px;
}

#div_center input {
  margin: 15px;
}

#name,
#pasword,
#email,
#phone_number,
#birthday {
  height: 35px;
  width: 300px;
  border-radius: 5px;
  padding: 10px;
}

#div_right {
  float: right;
  font-size: 15px;
  margin:20px 20px auto auto;
}

#reg{
	margin-left: 200px;
  font-size: 25px;
}

.lab{
	margin-left: 20px;
}
</style>