<!--
 * @Author: XINYUAN CHEN 2766799927@qq.com
 * @Date: 2022-07-02 19:34:05
 * @LastEditors: XINYUAN CHEN 2766799927@qq.com
 * @LastEditTime: 2022-07-02 22:17:09
 * @FilePath: \Club\src\pages\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEdiv
-->
<template>
  <div class="login">
    <div class="login-title">沈理社团后台管理系统</div>
    <div >
      <el-form label-width="50px" class="login-body">
        <el-input  class="login-body-item" placeholder="请输入账号" :prefix-icon="Avatar" />
        <el-input  class="login-body-item" placeholder="请输入密码" :prefix-icon="Key" />
      </el-form>
    </div>
    <div >
      <el-button type="primary" class="login-btn">登录</el-button>
    </div>
    <div class="login-foot">来自 琴理工作室</div>
  </div>
</template>
<script setup lang="ts">
import { Avatar, Key } from '@element-plus/icons-vue'
</script>
<style>
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 550px;
  height: 350px;
  background-color: #f8f8f8;
}

.login-title {
  padding: 10px;
  color: #1890ff;
  font-size: 25px;
  font-weight: 1000;
}
.login-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-body-item {
  padding: 10px;
  width: 400px;
  height: 60px;
}
.login-btn {
  width: 380px;
  height: 40px;
}
.login-foot {
  font-size: small;
  color: #a1a1a1;
}
</style>