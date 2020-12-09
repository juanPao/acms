<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="bg-green-5 window-height window-width row justify-center items-center"
      >
        <div class="column">
          <div class="row">
            <h6 class="text-h6 text-white q-my-md">Agricultural Commodities Management System</h6>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg shadow-1">
              <q-card-section>
                <q-form class="q-gutter-md">
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.email"
                    type="email"
                    label="email"
                  />
                  <q-input
                    square
                    filled
                    clearable
                    v-model="user.password"
                    type="password"
                    label="password"
                  />
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-md">
                <q-btn
                  unelevated
                  color="primary"
                  size="lg"
                  class="full-width"
                  label="Login"
                  @click="toggleLogin()"
                />
              </q-card-actions>
              <q-card-section class="text-center q-pa-none">
                <p class="text-grey-6">
                  Not reigistered?
                  <router-link to="/register">Created an Account</router-link>
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
import { mapActions,mapMutations } from "vuex";
import { LocalStorage } from "quasar";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
        device_name: "browser"
      }
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    ...mapMutations("auth", ['setLoggedIn', 'setUser']),
    toggleLogin() {
      this.loginUser(this.user)
        .then(response => {
          this.setLoggedIn(true);
          LocalStorage.set("token", response.data.token);
          LocalStorage.set("user", response.data.user);
          this.$router.replace("/");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
