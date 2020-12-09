<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col">
             <div class="text-h5"><q-icon name="groups"></q-icon> Manage Farmers</div>
          </div>
          <div class="col">
            <q-btn label="Lists of Farmers" v-if="page != 'lists'" @click="toggleLists()"></q-btn>
            <q-btn label="Add Record" color="primary" icon="add_box" class="absolute-right" v-if="page != 'create'" @click="toggleCreate()"></q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-mt-md">

     <FarmersTable v-if="page === 'lists'"></FarmersTable>
     <FarmerCreate v-if="page === 'create'"></FarmerCreate>
     <FarmerProfile v-if="page === 'profile'"></FarmerProfile>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FarmersTable from '../components/Farmers/FarmersTable'
import FarmerCreate from '../components/Farmers/FarmerCreate'
import FarmerProfile from '../components/Farmers/FarmerProfile'

export default {
  name: "PageIndex",
  components: {
    FarmersTable,
    FarmerCreate,
    FarmerProfile,
  },
  data() {
    return {
      dna: {}
    };
  },
  computed: {
    ...mapState("farmers", ["page"]),
  },
  created() {
    this.initializeUsers();
  },
  methods: {
    ...mapActions("users", ["getUsers"]),
    ...mapActions("farmers", ["updatePage"]),
    initializeUsers() {
      this.getUsers();
    },
    toggleLists(){
      this.updatePage("lists");
    },
    toggleCreate(){
      this.updatePage("create");
    },

  }
};
</script>
