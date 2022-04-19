<template>
  <div class="login-container">
      <a-form-model class="login-form" ref="loginForm" :model="loginForm" :rules="rules" v-bind="layout">
    <a-form-model-item has-feedback label="邮箱" prop="mail">
      <a-input v-model="loginForm.mail" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="loginForm.password" type="password"/>
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('loginForm')">
        登录
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
  </div>
</template>
<script>
import {login} from "@/api/user"
import store from "../../store";
export default {
  data() {
    let emailReg = /^[\w-]+@[\w.-]+.com/;
    let checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      }
      if(emailReg.test(value)){
          return callback();

      }else{
          return callback(new Error("邮箱格式不正确"))
      }
    };

    let checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else{
        callback();
      }
    };
    return {
      loginForm: {
        mail: '',
        password: '',
      },
      rules: {
        mail: [{ validator: checkEmail, trigger: 'change' }],
        password: [{ validator: checkPassword, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {

      this.$refs[formName].validate(valid => {
        if (valid) {
            login(this.loginForm).then(res=>{
                this.$message.success(res);
                this.$store.dispatch("setUserInfo",res)
                this.$router.push("/")
            }).catch(err=>{
                this.$message.error(err);
            })
          return true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less">
@import url("@/assets/css/loginForm.less");
</style>