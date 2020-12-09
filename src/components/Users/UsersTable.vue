<template>
  <q-table
    title="Lists of Users"
    :data="users"
    :columns="columns"
    color="primary"
    row-key="name"
    :loading="loading"
    :pagination="initialPagination"
  >
    <template v-slot:loading>
      <q-inner-loading showing color="primary" />
    </template>
  </q-table>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
    ...mapState("users", ["users"]),
    filteredUsers() {}
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    initializeUsers() {
      this.getUsers();
    }
  }
};
</script>
