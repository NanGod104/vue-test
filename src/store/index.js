import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
const LEFT_STATUS="LEFT_STATUS";

const state={
  leftnav_state:true
}

const actions={
  changeLeftState({commit,state},status){
    status=!state.leftnav_state;
    commit(LEFT_STATUS,status);
  }
}

const mutations={
  [LEFT_STATUS](state,status){
    state.leftnav_state=status;
  }
}

const getters={
  leftNavState:state=>state.leftnav_state
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
