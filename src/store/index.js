import Vue from 'vue'
import Vuex from 'vuex'
import { setUserInfoCookies, getUserInfoCookies, romoveUserInfoCookies } from "@/utils/userCookies"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //导航栏的收放状态
    collapsed: false,
    //用户信息
    user: getUserInfoCookies(),
  },
  getters: {
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, userInfo) {
      state.user = userInfo;
    },
    logOut(state) {
      state.user = {
        appkey: "",
        username: "",
        role: "",
        email: "",
      };
    }
  },
  actions: {
    changeCollapsed({ commit }) {
      commit("changeCollapsed");
    },
    setUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo);
      setUserInfoCookies(userInfo);
    },
    logOut({commit}){
      commit("logOut");
      romoveUserInfoCookies();
    }
  },
  modules: {
  }
})
