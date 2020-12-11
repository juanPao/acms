<template>
  <q-card>
    <q-card-section>
      Create Farm Land 
    </q-card-section>
    <q-card-section>
      <div class="row">
        <q-input
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="farmer_land.location"
          label="Location of the Land"
        />
      </div>
      <div class="row">
        <q-input
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="farmer_land.total_farm_area"
          label="Total Farm Area"
        />
      </div>
      <div class="row">
        <q-input
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="farmer_land.ownership_document_number"
          label="Ownership Document Number"
        />
      </div>
      <div class="row">
        <div class="col-6 col-md-2 q-pa-md">
          Type of Ownership
        </div>
        <div class="col-6 col-md-10">
          <div class="row">
            Registered Owner
            <q-radio
              v-model="farmer_land.type_of_ownership"
              val="Registered Owner"
            />
            Tenant
            <q-radio v-model="farmer_land.type_of_ownership" val="Tenant" />
            Lessee
            <q-radio v-model="farmer_land.type_of_ownership" val="Lessee" />
            Others
            <q-radio v-model="farmer_land.type_of_ownership" val="Others" />
          </div>
          <div class="row" v-if="farmer_land.type_of_ownership == 'Tenant' || farmer_land.type_of_ownership == 'Lessee'">
            <q-input
              class="col-12 col-md-12 q-pa-md"
              outlined
              v-model="farmer_land.type_of_ownership_specific"
              label="(Name of Land Owner)"
            />
          </div>
          <div class="row" v-if="farmer_land.type_of_ownership == 'Others'">
            <q-input
              class="col-12 col-md-12 q-pa-md"
              outlined
              v-model="farmer_land.type_of_ownership_specific"
              label="Specify"
            />
          </div>
        </div>
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="row">
        <q-input
          class="col-12 col-md-4 q-pa-md"
          outlined
          v-model="farmer_land.total_farm_area"
          label="Total Farm Area"
        />
        <q-input
          class="col-12 col-md-4 q-pa-md"
          outlined
          v-model="farmer_land.altitude"
          label="Altitude"
        />
        <q-input
          class="col-12 col-md-4 q-pa-md"
          outlined
          v-model="farmer_land.longtitude"
          label="Longtitude"
        />
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="row">
        <q-input
          class="col-12 col-md-6 q-pa-md"
          outlined
          v-model="farmer_land.starded_from"
          label="Started From"
        />
        <q-input
          class="col-12 col-md-6 q-pa-md"
          outlined
          v-model="farmer_land.ended_to"
          label="Ended To"
        />
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="row">
        <q-img class="col-12 col-md-4 q-pa-md" src="~assets/empty_image.png">
          <div class="absolute-bottom text-subtitle1 text-center">
            Vicinity 1
          </div>
        </q-img>
        <q-img class="col-12 col-md-4 q-pa-md" src="~assets/empty_image.png">
          <div class="absolute-bottom text-subtitle1 text-center">
            Vicinity 2
          </div>
        </q-img>
        <q-img class="col-12 col-md-4 q-pa-md" src="~assets/empty_image.png">
          <div class="absolute-bottom text-subtitle1 text-center">
            Vicinity 3
          </div>
        </q-img>
      </div>
    </q-card-section>
    <q-card-section>
      <q-btn-group spread>
        <q-btn class="full-width">Cancel</q-btn>
        <q-btn
          class="full-width"
          color="primary"
          :loading="processingRequest"
          @click="toggleSaveFarmerLand()"
          >Save</q-btn
        >
      </q-btn-group>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "FarmerLandForm",
  props: ['farmer_id'],
  data() {
    return {
      farmer_land: {
        farmer_id: "",
        location: "",
        total_farm_area: "",
        ownership_document_number: "",
        type_of_ownership: "",
        type_of_ownership_specific: "",
        altitude: "",
        longtitude: "",
        vicinity_1: "",
        vicinity_2: "",
        vicinity_3: "",
        started_from: "",
        ended_to: ""
      }
    };
  },

  computed: {
    ...mapState("farmers", ["farmer","processingRequest"]),
    agricultureTypes() {
      return ["Rice", "Corn", "Livestock", "Poultry"];
    },

    typesOfOwnershipDocument() {
      return [
        "Certificate of Land Transfer",
        "Emancipation Patent",
        "Individual Certificate of Land",
        "Ownership Award (CLOA)",
        "Collective CLOA",
        "Co-ownership CLOA",
        "Agricultural Sales Patent",
        "Homestead Patent",
        "Free Patent",
        "Certificate of Title or Regular Title",
        "Certificate of Ancestral Domain Title",
        "Certificate of Ancestral Land Title",
        "Tax Declaration"
      ];
    },
    farmTypes() {
      return ["Irrigated", "Rainfed Upland", "Rainfed Lowland"];
    }
  },
  methods: {
    ...mapActions("farmers", ["storeFarmerLand"]),
    ...mapMutations("farmers", ["SET_PROCESS_REQUEST"]),
    toggleSaveFarmerLand() {
      this.SET_PROCESS_REQUEST(true);
      this.farmer_land['farmer_id'] = this.farmer_id;
      this.storeFarmerLand(this.farmer_land)
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.$emit('hideFarmLandForm');
          console.log(response.data);
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);
        });
    }
  }
};
</script>
