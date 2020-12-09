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
          Agricultural Commodities Management System 
        </q-toolbar-title>

        <div><q-btn @click="toggleLogout()">Logout</q-btn></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
     

      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
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

      <q-img class="absolute-top" src="~assets/farm-1.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
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
import EssentialLink from "components/EssentialLink.vue"
import { mapActions, mapMutations } from "vuex"
import { LocalStorage } from "quasar"
import Api from "../apis/Api"

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    user_email(){
      let user = LocalStorage.getItem("user");
      return user.email;
    },
  },
  methods: {
    ...mapActions("auth", ["logoutUser"]),
    ...mapMutations("auth", ['setLoggedIn']),
    toggleLogout() {
      this.logoutUser()
        .then(response => {
          this.setLoggedIn(false);
          LocalStorage.remove("token");
          LocalStorage.remove("user");
          this.$router.replace("/login");
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
