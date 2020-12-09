<template>
  <q-table
    title="Lists of Farmers"
    :data="farmers"
    :columns="columns"
    color="primary"
    row-key="name"
    :loading="loading"
    :pagination="initialPagination"
    @row-click="toggleAction"
  >
  </q-table>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "FarmersTable",
  data() {
    return {
      farmers: [],
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
        { label: "First name", field: "fname" },
        { label: "Middle name", field: "mname" },
        { label: "Last name", field: "lname" },
        { label: "Last update", field: "updated_at" },
      ],
      loading: false
    };
  },
  mounted() {
    this.initializeFarmers();
  },
  computed: {},
  methods: {
    ...mapActions("farmers", ["getFarmers", "updatePage"]),
    ...mapMutations("farmers", ["SET_FARMER"]),
    initializeFarmers() {
      this.getFarmers()
        .then((response) => {
            console.log('test' + response.data);
          this.farmers = response.data.farmers;
        })
        .catch(error => {
          console.log(error);
        });
    },
    toggleAction(e,farmer) {
      this.SET_FARMER(farmer);
      this.updatePage("profile");
    }
  }
};
</script>
