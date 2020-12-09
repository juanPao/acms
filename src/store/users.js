import Api from "../apis/Api";

import { LocalStorage, Loading } from "quasar";

const state = {
  users: []
};

const mutations = {

  setUsers(state, value){
    state.users = value;
  }
};

const actions = {
  getUsers({commit}, payload){
      Api().get("/users").then((response) => {
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