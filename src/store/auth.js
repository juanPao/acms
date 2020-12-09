import Api from "../apis/API";

import { LocalStorage, Loading } from "quasar";

const state = {
  loggedIn: false,
  user: {
    email: "",
  }
};

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },

  setUserEmail(state, value) {
    state.user.email = value;
  },

  setUser(state, value){
    state.user = value;
  }
};

const actions = {
  registerUser({}, payload) {

    return Api().post("/register", payload);
  },
 loginUser({}, payload) {

    return Api().post("/login", payload);
  },
 logoutUser({}, payload) {

    return Api().post("/logout", payload);
  },
  getUser(){
    return Api().get("/user");
  }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}