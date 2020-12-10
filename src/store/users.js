import Api from "../apis/API";

import { LocalStorage, Loading } from "quasar";

const state = {
  processingRequest: false,
  users: []
};

const mutations = {
  SET_PROCESS_REQUEST(state, value){
    state.processingRequest = value;
  },
  setUsers(state, value){
    state.users = value;
  }
};

const actions = {
  getUsers({commit}, payload){
      return Api().get("/users").then((response) => {
        commit("setUsers", response.data);
      })
  }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}