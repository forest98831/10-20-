<template>
    <div>
        <div id="div_whole">
			<div id="div_left">
				<p>用户登录</p>
				<p>USER LOGIN</p>
			</div>

			<div id="div_center">
				<div id="div_form">
					<form id="form" method="post" action="#">
						<table>
							<tr>
								<td><label for="name">用户名：</label></td>
								<td><input id="name" name="name" placeholder="请输入用户名">
									<span id="span_name"></span>
									<br></td>
							</tr>
							<tr>
								<td><label for="pasword">密码：</label></td>
								<td><input type="password" id="pasword" name="pasword" placeholder="请输入密码">
									<span id="span_password"></span>
									<br></td>
							</tr>
							<tr>
								<td colspan="2" class="lotd">
									<div class="login">登录</div>
								</td>
							</tr>
						</table>
					</form>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
* {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

body {
	/* background: url(../assets/bg.jpg) no-repeat center; */
	padding: 50px;
}

#div_whole {
	width: 600px;
	height: 450px;
	border: 3px solid #EEEEEE;
	background-color: #39c5bb;
	margin: 200px auto 0 auto;
}

#div_left {
	float: left;
	margin: 20px;
	margin-top: 30px;
}

#div_left>p:first-child {
	color: yellow;
	font-size: 30px;
}

#div_left>p:last-child {
	color: gray;
	font-size: 30px;
}

#div_center {
	float: left;
	/* padding: 20px; */
	padding-left: 80px;
}

#div_center label {
	font-size: 20px;
}

#div_center input {
	margin: 15px;
}

#name,
#pasword
{
	height: 35px;
	width: 300px;
	border-radius: 5px;
	padding: 10px;
}

#div_right {
	float: right;
	font-size: 15px;
	margin-top: 60px;
	margin-right: 20px;
}
.lotd{
	padding-left: 160px;
}
.btn{
	width: 60px;
	height: 40px;
	padding-right: 50px;
}
.login{
	margin: 70px 0 0 60px;
	cursor: pointer;
	font-size: 25px;
}
</style>