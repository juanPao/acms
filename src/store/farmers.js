import Api from "../apis/API";

import { LocalStorage, Loading } from "quasar";

const state = {
  processingRequest: false,
  page: "lists",
  farmers: [],
  farmer: {}
};

const mutations = {
  SET_PROCESS_REQUEST(state, value){
    state.processingRequest = value;
  },
  SET_PAGE(state, value) {
    state.page = value;
  },
  SET_FARMER(state, value) {
    state.farmer = value;
  },
  SET_FARMERS(state, value) {
    state.farmers = value;
  }
};

const actions = {
  updatePage({ commit }, payload) {
    commit("SET_PAGE", payload);
  },
  storeFarmer({ commit }, payload) {
    return Api().post("farmer/store", payload);
  },
  storeFarmerAgriculture({ commit }, payload) {
    return Api().post("farmer/agriculture/store", {
      farmer_id: payload.farmer_id,
      farmer: payload.farmer,
    });
  },
  getFarmers({ commit }, payload) {
    return Api().get("farmers");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
