<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="bg-green-5 window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">Agricultural Commodities Management System</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.username"
                    type="text"
                    label="UserName"
                    error-message="UserName required!"
                    :error="errors.username != null"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.fname"
                    type="text"
                    label="First Name"
                    error-message="Firstname required!"
                    :error="errors.fname != null"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.mname"
                    type="text"
                    label="Middle Name"
                    error-message="Middle name required!"
                    :error="errors.mname != null"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.lname"
                    type="text"
                    label="Last Name"
                    error-message="Last name required!"
                    :error="errors.lname != null"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.contact_num"
                    type="text"
                    label="Contact number"
                    error-message="Last name required!"
                    :error="errors.contact_num != null"
                  />

                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.email"
                    type="email"
                    label="Email"
                    error-message="Email required!"
                    :error="errors.email != null"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.password"
                    type="password"
                    label="password"
                    error-message="Password required!"
                    :error="errors.password != null"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.password_confirmation"
                    type="password"
                    label="Confirmed Password"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="primary"
                  size="lg"
                  class="full-width"
                  label="Register"
                  @click="toggleRegister()"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
                <p class="text-grey-6">
                  Already reigistered?
                  <router-link to="/login"> Login an Account</router-link>
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Api from "../apis/Api";
import Csrf from "../apis/Csrf";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isValid: true,
      user: {
        username: "",
        fname: "",
        mname: "",
        lname: "",
        email: "",
        contact_num: "",
        password: "",
        password_confirmation: ""
      },
      errors: {
        username: null,
        fname: null,
        mname: null,
        lname: null,
        contact_numb: null,
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    toggleRegister() {
      this.registerUser(this.user)
        .then((response) => {
          this.$router.replace('/login');
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>
