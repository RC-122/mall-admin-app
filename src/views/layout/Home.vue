<template>
  <div class="home">
    <LeftMenu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <SliderNav />
      <router-view />
    </div>
  </div>
</template>

<script>
import LeftMenu from "./components/leftMenu";
import SliderNav from "./components/sliderNav";

export default {
  data() {
    return {};
  },
  components: {
    LeftMenu,
    SliderNav,
  },
};
</script>

<style lang="less">
@import "@/assets/css/Home.less";
</style>