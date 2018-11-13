<template>
  <div id="login">
    <img src="img/carlo-d-agnolo-379969-unsplash.jpg" alt=""/>
    <form action="" method="post">
      <p>
        <b>用户登录</b>
      </p>
      <p>
        用户名：<input type="text" name="username" placeholder="请输入用户名"/>
      </p>
      <p>
        密码：<input type="password" name="password" placeholder="请输入密码"/>
      </p>
      <p>
        <button class="button-login" name="loginin" type="submit">登录</button>
        <button class="button-regist" name="toregist" type="button">注册</button>
      </p>
    </form>
  </div>
</template>

<script>
  import "@/assets/css/base.css"
  import "@/assets/css/login.css"
  export default {
    data(){
      return {
        uname:"a",
        upwd:"123456",
      }
    },
    methods:{
      singin(){
        axios.post(
          "http://localhost:8000/login",
          qs.stringify({uname:this.uname, upwd:this.upwd})).then(res=>{
            console.log(res.data)
        })
      }
    }
  }
</script>

<style scoped>

</style>