<template>
  <q-card>
    <q-card-section>
      <div class="row">
        <div class="col-12 col-md-6">
          Lists of Farm Lands owned by this profile.
        </div>
        <div class="col-12 col-md-6">
          <q-btn color="primary" class="absolute-right" @click="toggleCreate()"
            >Create</q-btn
          >
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-markup-table flat>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Farm Land Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(land, index) in lands" :key="land.id">
            <td class="text-left">{{ index + 1 }}</td>
            <td class="text-left">
              <div class="row">
                <img
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                  style="height: 140px; max-width: 140px"
                />
              </div>
              <q-separator class="q-mt-md"></q-separator>
              <div class="row">
                <div class="col-12 col-md-12">
                  <q-markup-table separator="vertical" flat>
                    <tr>
                      <td colspan="2">
                        <q-btn class="full-width" color="primary"
                          >Add Commodity</q-btn
                        >
                      </td>
                    </tr>
                    <tr>
                      <td class="text-weight-bold">Location:</td>
                      <td>{{ land.location }}</td>
                    </tr>
                    <tr>
                      <td class="text-weight-bold">Total Farm Area:</td>
                      <td>{{ land.total_farm_area }}</td>
                    </tr>
                    <tr>
                      <td class="text-weight-bold">
                        Ownership Document Number:
                      </td>
                      <td>{{ land.ownership_document_number }}</td>
                    </tr>
                    <tr>
                      <td class="text-weight-bold">Type of Ownership:</td>
                      <td>
                        {{ land.type_of_ownership }}
                        <span v-if="land.type_of_ownership_specific != null">{{
                          land.type_of_ownership_specific
                        }}</span>
                      </td>
                    </tr>
                  </q-markup-table>
                </div>
              </div>
            </td>
            <td colspan="6" class="">
              <q-markup-table flat bordered separator="vertical">
                <thead>
                  <tr>
                    <th class="text-right">Crop Commodity</th>
                    <th class="text-right">Size</th>
                    <th class="text-right">Number of Head</th>
                    <th class="text-right">Farm Type</th>
                    <th class="text-right">Organic Practitioner</th>
                  </tr>
                </thead>
                <tbody>
                   <!--  <tr v-if="land.commodities.length == 0">
                        <td>No commodities listed..</td>
                    </tr> -->
                    <tr v-for="(commodity, index) in land.commodities" :key="commodity.id">
                        <td>{{ index+1 }}</td>
                        <td>{{ commodity.name }}</td>
                        <td>{{ commodity.size }}</td>
                        <td>{{ commodity.number_of_head }}</td>
                        <td>{{ commodity.farm_type }}</td>
                        <td>{{ commodity.organic_practitioner }}</td>
                    </tr>
                </tbody>
              </q-markup-table>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
    <q-dialog v-model="showFarmerLandFormDialog" full-width>
      <FarmerLandForm
        :farmer_id="this.$route.params.farmer_id"
        @hideFarmLandForm="showFarmerLandFormDialog = false"
      ></FarmerLandForm>
    </q-dialog>
    <q-dialog v-model="showFarmerLandCommodityFormDialog" full-width>
      <FarmerLandCommodityForm
        :farmer_id="this.$route.params.farmer_id"
        @hideFarmLandCommodityForm="showFarmerLandCommodityFormDialog = false"
      ></FarmerLandCommodityForm>
    </q-dialog>
  </q-card>
</template>

<script>
import FarmerLandForm from "./FarmerLandForm";
import FarmerLandCommodityForm from "./FarmerLandCommodityForm";

export default {
  name: "FarmerLands",
  props: ["lands"],
  components: {
    FarmerLandForm,
    FarmerLandCommodityForm
  },
  data() {
    return {
      showFarmerLandFormDialog: false,
      showFarmerLandCommodityFormDialog: false,
    };
  },
  methods: {
    toggleCreate() {
      this.showFarmerLandFormDialog = true;
    },
    toggleCommidityCreate(){
        this.showFarmerLandCommodityFormDialog = true;
    }
  }
};
</script>
