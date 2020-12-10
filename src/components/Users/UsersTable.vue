<template>
  <q-table
    title="Lists of Users"
    :data="users"
    :columns="columns"
    color="primary"
    row-key="name"
    :loading="processingRequest"
    :pagination="initialPagination"
  >
    <template v-slot:loading>
      <q-inner-loading showing color="primary" />
    </template>
  </q-table>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      initialPagination: {
        sortBy: "asc",
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          label: "ID#",
          align: "left",
          field: "id",
          sortable: true
        },
        { label: "Name", field: "name" },
        { label: "Email", field: "email" }
      ],
      loading: false
    };
  },
  mounted() {
    this.initializeUsers();
  },
  computed: {
    ...mapState("users", ["users", "processingRequest"]),
    filteredUsers() {}
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    ...mapMutations("users", ["SET_PROCESS_REQUEST"]),
    initializeUsers() {
      this.SET_PROCESS_REQUEST(true);
      this.getUsers().then((response) => {
        this.SET_PROCESS_REQUEST(false);
      }).catch((error) => {
        this.SET_PROCESS_REQUEST(false);
      });
    }
  }
};
</script>
