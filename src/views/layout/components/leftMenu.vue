<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="home" /><span>首页</span></span>
        <a-menu-item key="5"
          ><router-link :to="{name:'Index'}"><a-icon type="database" />统计</router-link></a-menu-item
        >
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>商品</span></span>
        <a-menu-item key="9"><router-link :to="{name:'ProductList'}"><a-icon type="unordered-list" />商品列表</router-link></a-menu-item>
        <a-menu-item key="10"><router-link :to="{name:'AddProduct'}"><a-icon type="plus-square" />添加商品</router-link></a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>