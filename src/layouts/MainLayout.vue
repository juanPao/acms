<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <q-avatar size="24px"> <img src="~assets/doa_logo.png"/> </q-avatar>
          Agricultural Commodities Management System
        </q-toolbar-title>

        <div><q-btn @click="toggleLogout()" :loading="processingRequest" icon="exit_to_app" >Logout</q-btn></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-scroll-area
        style="height: calc(100% - 200px); margin-top: 200px; border-right: 1px solid #ddd"
      >
        <q-list>
          <q-item clickable v-ripple to="dashboard" exact>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>
              Dashboard
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="book_online" />
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="farmers" exact>
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>
            <q-item-section>
              Farmers
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="settings" exact>
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>
            <q-item-section>
              Settings
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="users" exact>
            <q-item-section avatar>
              <q-icon name="groups" />
            </q-item-section>
            <q-item-section>
              Users
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="~assets/da_bg3.png"
        style="height: 200px;"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">{{ user_email }}</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapActions, mapMutations, mapState } from "vuex";
import { LocalStorage } from "quasar";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapState("auth", ["processingRequest"]),
    user_email() {
      let user = LocalStorage.getItem("user");
      return user.email;
    }
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    ...mapMutations("auth", ["setLoggedIn", "SET_PROCESS_REQUEST"]),
    toggleLogout() {
      this.SET_PROCESS_REQUEST(true);

      this.logoutUser()
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.setLoggedIn(false);
          LocalStorage.remove("token");
          LocalStorage.remove("user");
          this.$router.replace("/login");
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);
          console.log(error);
        });
    }
  }
};
</script>
