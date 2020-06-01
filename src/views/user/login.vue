<template>
  <div class="login-container">
    <div class="login-form">
      <div class="title">登录</div>
      <div class="form-item">
        <input name="mobile" v-model="form.mobile" placeholder="请输入手机号" />
      </div>
      <div class="form-item verify_code">
        <input name="code" v-model="form.verify_code" placeholder="验证码" />
        <button class="send-code" @click="handleSendCode">{{verifyText}}</button>
      </div>
      <div class="form-item">
        <input name="password" v-model="form.password" placeholder="请输入密码" />
      </div>
      <div class="form-item login-btn">
        <button @click="onSubmit">登录</button>
      </div>
      <div class="forget">
        <span>免费注册</span>
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>

<script>
import { validMobile } from '../../utils/validate';
import { sendSmsCode } from '../../request/api/login';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      form: {
        mobile: '',
        password: '',
        verify_code: ''
      },
      redirect: undefined,
      verifyText: '获取验证码',
      totalTime: 60,
      canClick: true // 添加canClick
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    onSubmit () {
      this.userLogin(this.form).then(res => {
        this.$router.push('/index');
      }).catch(err => {
        console.log(err);
      });
    },
    /** 处理发送验证码 */
    handleSendCode () {
      var formData = JSON.stringify({
        'target': this.form.mobile,
        'vcode_type': 'register'
      });
      this.countDown(); // 无接口测试
      return;
      // eslint-disable-next-line no-unreachable
      sendSmsCode(formData).then((response) => {
        if (response.code === 1) {
          this.countDown();
        } else {
          alert('请求失败');
        }
      }).catch(() => {

      })
    },
    /** 倒计时 */
    countDown () {
      if (!this.canClick) return // 改动的是这两行代码
      this.canClick = false
      this.verifyText = this.totalTime + 's后重新发送'
      var clock = window.setInterval(() => {
        this.totalTime--
        this.verifyText = this.totalTime + 's后重新发送'
        if (this.totalTime < 0) {
          window.clearInterval(clock)
          this.verifyText = '重新发送验证码'
          this.totalTime = 60
          this.canClick = true // 这里重新开启
        }
      }, 1000)

      this.$once('hook:beforeDestroy', () => {            
        clearInterval(clock);                                    
      })
    },

    ...mapActions([
      'userLogin'
    ])
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
    .form-item {
      color: #454545;
      margin-bottom: 20px;
      input{
        height: 42px;
        width: 100%;
        background-color: #FFF;
        padding: 8px 0 8px 15px;
        border: none;
        border-radius: 3px;
      }
      &.verify_code{
        width: 100%;
        position: relative;
        input{
          width: 60%;
        }
        .send-code{
          width: 35%;
          height: 42px;
          color: $bg;
          background-color: #FFF;
          border: none;
          position: absolute;
          left: 65%;
          border-radius: 3px;
        }
      }
    }
    .login-btn{
      width: 100%;
      button{
        width: 100%;
        height: 42px;
        background-color: #FFF;
        border: none;
        border-radius: 3px;
      }
    }
    .forget{
      display: flex;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      span{
        color: #fcfd06;
      }
    }
    .disabled{
      background-color: #a0cfff;
      border-color: #a0cfff;
      color:#FFF;
      cursor: not-allowed;  // 鼠标变化
    }
  }
}
</style>
