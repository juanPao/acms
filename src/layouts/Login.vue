<template>
  <q-layout >
    <q-page-container>
      <q-page class="bg-primary">
        <div class="window-height window-width row justify-center items-center">
          <q-card bordered>
            <q-card-section>
              <q-img src="~assets/rsbsa_logo.png"></q-img>
              <div class="text-weight-bolder">Agricultural Commodities Management System</div> 
            </q-card-section>
            <q-separator></q-separator>
            <q-form
              @submit="toggleLogin"
              @reset="toggleReset"
              class="q-gutter-md"
            >
              <q-card-section>
                <q-input
                  square
                  v-model="user.email"
                  type="email"
                  label="email"
                  required
                ></q-input>

                <q-input
                  square
                  v-model="user.password"
                  type="password"
                  label="password"
                  required
                ></q-input>
              </q-card-section>
              <q-card-actions>
                <q-btn
                  @click="toggleLogin"
                  :loading="processingRequest"
                  type="submit"
                  size="lg"
                  class="full-width"
                  color="primary"
                  >Login</q-btn
                >
              </q-card-actions>
            </q-form>
            <q-card-section class="text-center q-pa-none">
              <p class="text-grey-6">
                Not reigistered?
                <router-link to="/register">Created an Account</router-link>
              </p>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
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
  computed: {
    ...mapState("auth", ["processingRequest"])
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),
    ...mapMutations("auth", ["setLoggedIn", "setUser", "SET_PROCESS_REQUEST"]),
    toggleReset() {},
    toggleLogin() {
      this.SET_PROCESS_REQUEST(true);

      this.loginUser(this.user)
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.setLoggedIn(true);
          LocalStorage.set("token", response.data.token);
          LocalStorage.set("user", response.data.user);
          this.$router.replace("/");
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);
          console.log(error);
        });
    }
  }
};
</script>
