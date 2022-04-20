<template>
  <div class="main-header">
    <a-button
      type="primary"
      style="margin-bottom: 16px"
      @click="toggleCollapsed"
    >
      <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
    <div class="breadcrumb">
      <template>
        <a-breadcrumb>
          <a-breadcrumb-item><router-link to="/">首页</router-link></a-breadcrumb-item>
          <a-breadcrumb-item><router-link :to="$route.path">{{$route.meta.title === "首页" ? "" : $route.meta.title}}</router-link></a-breadcrumb-item>
        </a-breadcrumb>
      </template>
    </div>
    <ul class="user-info">
      <li>{{$store.state.user.username ? $store.state.user.username : "欢迎"}}
        <a-icon type="down" />
      </li>
      <li @click="logOutHandle">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
    methods: {
    toggleCollapsed() {
      this.$store.dispatch("changeCollapsed");
    },
    logOutHandle(){
      this.$store.dispatch("logOut");
      this.$router.push("/login");
    },
  },
  mounted(){
    console.log(this.$route);
  }
};
</script>

<style>
</style>