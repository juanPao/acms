<template>
  <q-card class="q-pa-md">
    <q-card-section class="bg-primary row">
      <div class="col-12 col-md-6 text-h5 text-white">
        <q-icon name="face" /> Farmer Profile
      </div>
      <div class="col-12 col-md-6">
        <q-btn color="warning" class="text-black absolute-right"
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
        <q-tab name="agricultures" label="Agrilcultures" />
        <q-tab name="activities" label="Activities" />
        <q-tab name="families" label="Families" />
        <q-tab name="educations" label="Educations" />
        <q-tab name="documents" label="Documents" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="agricultures">
            
          <Agricultures></Agricultures>
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
  </q-card>
</template>

<script>
import { mapState } from 'vuex';
import Agricultures from "./Agricultures";

export default {
  name: "FarmerProfile",
  components: {
    Agricultures
  },
  data() {
    return {
      tab: "agricultures"
    };
  },
  computed: {
      ...mapState("farmers", ["farmer"]),
  }
};
</script>
