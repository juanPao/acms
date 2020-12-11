<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section class="farmers-bg">
        <div class="row">
          <div class="col-12 col-md-6 q-pa-md">
             <div class="text-h5"><q-icon name="groups"></q-icon> Manage Farmers</div>
          </div>
          <div class="col-12 col-md-6 " align="end">
            <q-btn label="Add Record" color="primary" icon="add_box" size="lg"  @click="toggleCreate()"></q-btn>
            <!-- <router-link :to="{ name:'farmer-form', params: {farmer: 'Juan paolo'}}">Test form</router-link> -->
            <!-- <router-link :to="{ name:'Farmer Form'}">Test form</router-link> -->
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-mt-md">

     <FarmersTable></FarmersTable>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import FarmersTable from '../components/Farmers/FarmersTable'

export default {
  name: "PageIndex",
  components: {
    FarmersTable,
  },
  data() {
    return {
      test2: '4444',
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
    ...mapMutations("farmers", ["SET_EDIT_MODE", "SET_PAGE"]),
    initializeUsers() {
      this.getUsers();
    },
    toggleLists(){
      this.SET_PAGE("lists");
    },
    toggleCreate(){
      this.SET_EDIT_MODE(false);
      this.$router.push({name: "Farmer Form"});
    },
    test(){
      alert('qweqweqw');
    }

  }
};
</script>

<style scoped>
.farmers-bg {
    
    background-size: contain;
    background: linear-gradient(rgba(255,255,255,.1), rgba(255,255,255,.9)), url("~assets/doa_banner2.png");

  }

</style>
