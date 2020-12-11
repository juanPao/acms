import Api from "../apis/API";

import { LocalStorage, Loading } from "quasar";

const state = {
  edit_mode: false,
  processingRequest: false,
  crud_step: 1,
  farmers: [],
  farmer: {}
};

const mutations = {
  SET_EDIT_MODE(state, value){
    state.edit_mode = value;
  },
  SET_PROCESS_REQUEST(state, value){
    state.processingRequest = value;
  },
  SET_CRUD_STEP(state, value){
    state.crud_step = value;
  },
  SET_FARMER(state, value) {
    state.farmer = value;
  },
  SET_FARMERS(state, value) {
    state.farmers = value;
  }
};

const actions = {
  storeFarmer({ commit }, payload) {
    return Api().post("farmer/store", payload);
  },
  updateFarmer({commit}, payload){
    return Api().patch("farmer/update/" + payload.id, payload);
  },
  storeFarmerLand({ commit }, payload) {
    return Api().post("farmer/land/store", payload);
  },
  getFarmers({ commit }, payload) {
    return Api().get("farmers");
  },
  getFarmer({commit}, payload){
    return Api().get("farmer/" + payload);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
