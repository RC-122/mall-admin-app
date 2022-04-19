<template>
  <!--
  <div class="register-container">
    <a-form-model
      class="login-form"
      ref="rsForm"
      :model="rsForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="用户名" prop="username">
        <a-input v-model="rsForm.username" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="rsForm.email" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input v-model="rsForm.password" type="password" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="验证码" prop="code">
        <a-row type="flex">
          <a-col :flex="8">
            <a-input v-model="rsForm.code" />
          </a-col>
          <a-col>
            <a-button style="" type="link" @click="getCodeHandle(rsForm.email)"> 发送验证码 </a-button>
          </a-col>
        </a-row>
      </a-form-model-item>

      <a-form-model-item label="用户类型" prop="role">
        <a-select v-model="rsForm.role" placeholder="please select your zone">
          <a-select-option value="customer"> 普通账号 </a-select-option>
          <a-select-option value="admin"> 管理员账号 </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('rsForm')">
          注册
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
  -->
</template>
// <script>
// import { getCode, logon } from "@/api/user";

// export default {
//   data() {
//     let emailReg = /^[\w-]+@[\w.-]+.com/;
//     let checkEmail = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入邮箱"));
//       }
//       if (emailReg.test(value)) {
//         return callback();
//       } else {
//         return callback(new Error("邮箱格式不正确"));
//       }
//     };

//     let checkPassword = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入密码"));
//       } else {
//         callback();
//       }
//     };
//     return {
//       rsForm: {
//         username: "",
//         email: "",
//         password: "",
//         code: "",
//         role: "",
//       },
//       rules: {
//         email: [{ validator: checkEmail, trigger: "change" }],
//         password: [{ validator: checkPassword, trigger: "change" }],
//       },
//       layout: {
//         labelCol: { span: 4 },
//         wrapperCol: { span: 14 },
//       },
//     };
//   },
//   methods: {
//     submitForm(formName) {
//       this.$refs[formName].validate((valid) => {
//         if (valid) {
//           login(this.rsForm)
//             .then((res) => {
//               this.$message.success(res);
//               this.$store.dispatch("setUserInfo", res);
//               this.$router.push("/");
//             })
//             .catch((err) => {
//               this.$message.error(err);
//             });
//           return true;
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       });
//     },
//     resetForm(formName) {
//       this.$refs[formName].resetFields();
//     },
//     getCodeHandle(email){
//         console.log(email);
//         getCode(email).then(res=>{
//             console.log(res);
//         }).catch(err=>{
//             console.log(err);
//         });
//     }
    
//   },
// };
</script>

<style lang="less">
</style>