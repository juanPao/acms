<template>
  <q-card>
    <q-card-section>
      Create Agriculture
    </q-card-section>
    <q-card-section>
      <div class="row">
        <q-select
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="agriculture.agriculture_type"
          :options="agricultureTypes"
          label="Type of Activity"
        />
        <q-input
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="agriculture.name"
          label="Name"
        />
        <q-input
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="agriculture.description"
          label="Description"
        />
        <q-select
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="agriculture.ownership"
          :options="typesOfOwnerships"
          label="Ownership"
        />
        <q-input
          class="col-12 col-md-12 q-pa-md"
          outlined
          v-model="agriculture.address"
          label="Address"
        />
      </div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section>
      <div class="row">
        <q-input
          class="col-12 col-md-4 q-pa-md"
          outlined
          v-model="agriculture.area"
          label="Area"
        />
        <q-input
          class="col-12 col-md-4 q-pa-md"
          outlined
          v-model="agriculture.altitude"
          label="Altitude"
        />
        <q-input
          class="col-12 col-md-4 q-pa-md"
          outlined
          v-model="agriculture.longtitude"
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
          v-model="agriculture.starded_from"
          label="Started From"
        />
        <q-input
          class="col-12 col-md-6 q-pa-md"
          outlined
          v-model="agriculture.ended_to"
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
          @click="toggleSaveAgriculture()"
          >Save</q-btn
        >
      </q-btn-group>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "AgricultureCrud",
  data() {
    return {
      agriculture: {
        farmer_id: "",
        agriculture_type: "",
        name: "",
        description: "",
        ownership: "",
        address: "",
        capital: "",
        area: "",
        altitude: "",
        longtitude: "",
        vicinity_1: "",
        vicinity_2: "",
        vicinity_3: "",
        starded_from: "",
        ended_to: ""
      }
    };
  },
  computed: {
    ...mapState("farmers", ["farmer"]),
    agricultureTypes() {
      return ["Rice", "Corn", "Livestock", "Poultry"];
    },
    typesOfOwnerships() {
      return [
        "Single Ownership",
        "Partnership",
        "Join Stock",
        "Cooperative Organization",
        "State and Central Government owned"
      ];
    }
  },
  methods: {
    ...mapActions("farmers", ["storeFarmerAgriculture"]),
    toggleSaveAgriculture() {
      this.agriculture.farmer_id = this.farmer.id;
      this.storeFarmerAgriculture(this.agriculture)
        .then(response => {
          console.log(response.data);
        })
        .catch();
    }
  }
};
</script>
