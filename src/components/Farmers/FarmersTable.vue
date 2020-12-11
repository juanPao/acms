<template>
  <q-table
    title="Lists of Farmers"
    :data="farmers"
    :columns="columns"
    color="primary"
    row-key="name"
    :loading="processingRequest"
    :pagination="initialPagination"
    :filter="filter"
    @row-click="toggleAction"
  >
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </template>
    <template v-slot:loading>
      <q-inner-loading showing color="primary" />
    </template>
  </q-table>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "FarmersTable",
  data() {
    return {
      filter: '',
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
          label: "Reference#",
          align: "left",
          field: "id",
          sortable: true
        },
        { label: "Farmer Name", field: "farmerName", align: "left",},
        { label: "Last update", field: "updated_at" }
      ],
      loading: false
    };
  },
  mounted() {
    this.initializeFarmers();
  },
  computed: {
    ...mapState("farmers", ["processingRequest"]),
  },
  methods: {
    ...mapActions("farmers", ["getFarmers", "updatePage"]),
    ...mapMutations("farmers", ["SET_FARMER", "SET_PROCESS_REQUEST"]),
    initializeFarmers() {
      this.SET_PROCESS_REQUEST(true);
      this.getFarmers()
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.farmers = response.data.farmers;
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);
          console.log(error);
        });
    },
    toggleAction(e, farmer) {
      this.$router.push({name: "Farmer Profile", params: {farmer_id: farmer.id}});
    }
  }
};
</script>
