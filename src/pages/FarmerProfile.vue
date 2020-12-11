<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section class="row">
        <div class="col-12 col-md-6 text-h5 ">
          <q-icon name="face" /> Farmer Profile |
          <span class="text-weight-bolder text-black">Ref#89809123</span>
        </div>
        <div class="col-12 col-md-6">
          <q-btn
            color="warning"
            class="text-black absolute-right"
            @click="toggleEdit()"
            ><q-icon name="edit" /> Edit Profile</q-btn
          >
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <div class="row">
          <q-avatar class="col-6 col-md-4">
            <img src="~assets/profile_1.png" />
          </q-avatar>
          <div class="col-12 col-md-4">
            <div class="row">
              <div class="col-4">Name:</div>
              <div class="col-6">{{ farmer.fname }}</div>
            </div>
            <div class="row">
              <div class="col-4">Religion:</div>
              <div class="col-6">Roman Catholic</div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="row">
              <div class="col-4">Gender:</div>
              <div class="col-6">Male</div>
            </div>
            <div class="row">
              <div class="col-4">Civil Status:</div>
              <div class="col-6">Single</div>
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-card-section>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="farm_lands" label="Farm Lands" />
          <q-tab name="activities" label="Activities" />
          <q-tab name="families" label="Families" />
          <q-tab name="educations" label="Educations" />
          <q-tab name="documents" label="Documents" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="farm_lands">
            <FarmerLands :lands="farmer.lands"></FarmerLands>
          </q-tab-panel>

          <q-tab-panel name="activities">
            <div class="text-h6">Activities</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="families">
            <div class="text-h6">Families</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
      <q-inner-loading :showing="processingRequest">
        <q-spinner-gears size="50px" color="primary" />
      </q-inner-loading>
    </q-card>
  </q-page>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import FarmerLands from "../components/Farmers/FarmerLands";

export default {
  name: "FarmerProfile",
  components: {
    FarmerLands
  },
  data() {
    return {
      tab: "farm_lands",
      farmer: {
        id: "",
        barangay_id: 1,

        fname: "",
        mname: "",
        lname: "",
        extension_name: "",
        gender: "",
        civil_status: "",

        address_house_number: "",
        address_street: "",
        address_province: "",
        address_region: "",

        name_of_spouse: "",
        highest_education: "",
        is_pwd: null,
        is_4ps: null,
        is_indigenous_group: null,
        indigenous_group: "",
        is_government_id: null,
        government_id: "",
        is_association_member: null,
        association: "",
        emergency_contact_person: "",
        emergency_contact_person_number: "",
        is_household_head: null,
        household_head: {
          fname: "",
          mname: "",
          lname: "",
          relationship_type: ""
        },
        main_livelihood: "",
        main_livelihood_activity: "",
        main_livehood_activity_specific: "",

        lands: [],
      }
    };
  },
  created() {
    //this.farmer = this.$route.params.farmer;
    this.initializeFarmer(this.$route.params.farmer_id);
  },
  computed: {
    ...mapState("farmers", ["processingRequest"])
  },
  methods: {
    ...mapMutations("farmers", ["SET_EDIT_MODE", "SET_PROCESS_REQUEST"]),
    ...mapActions("farmers", ["getFarmer"]),
    toggleEdit() {
      this.SET_EDIT_MODE(true);
      this.$router.push({
        name: "Farmer Form",
        params: { farmer: this.farmer }
      });
    },
    initializeFarmer(farmer_id) {
      this.SET_PROCESS_REQUEST(true);
      this.getFarmer(farmer_id)
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.farmer = response.data.farmer;
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);
          console.log(error);
        });
    }
  }
};
</script>
