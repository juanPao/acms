import Api from "../apis/Api";

import { LocalStorage, Loading } from "quasar";

const state = {
  page: "lists",
  farmers: [],
  farmer: {}
};

const mutations = {
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
