<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-12 col-md-6">
            Manage Users
          </div>
          <div class="col-12 col-md-6" align="end">
            <q-space />
            <q-btn>Create User</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-mt-md">

     <UsersTable></UsersTable>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import UsersTable from '../components/Users/UsersTable'

export default {
  name: "PageIndex",
  components: {
    UsersTable
  },
  data() {
    return {
      dna: {}
    };
  },
  computed: {
  },
  created() {
    this.initializeUsers();
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    initializeUsers() {
      this.getUsers();
    }
  }
};
</script>
