<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-primary">
        <div class="window-height window-width row justify-center items-center">
          <q-card bordered>
            <q-card-section>
              <q-img src="~assets/rsbsa_logo.png"></q-img>
              <div class="text-weight-bolder">
                Agricultural Commodities Management System
              </div>
            </q-card-section>
            <q-separator></q-separator>
            <q-form
              @submit="toggleRegister"
              @reset="toggleRegister"
              class="q-gutter-md"
            >
              <q-card-section>
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
              </q-card-section>
              <q-card-actions>
                <q-btn
                  :loading="processingRequest"
                  unelevated
                  color="primary"
                  size="lg"
                  class="full-width"
                  label="Register"
                  type="submit"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
                <p class="text-grey-6">
                  Already reigistered?
                  <router-link to="/login"> Login an Account</router-link>
                </p>
              </q-card-section>
            </q-form>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Csrf from "../apis/Csrf";
import { mapActions, mapMutations, mapState } from "vuex";

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
  computed: {
    ...mapState("auth", ["processingRequest"]),
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    ...mapMutations("auth", ["SET_PROCESS_REQUEST"]),
    toggleRegister() {
      this.SET_PROCESS_REQUEST(true);
      this.registerUser(this.user)
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.$router.replace("/login");
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
};
</script>
