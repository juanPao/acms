<template>
  <q-stepper v-model="step" ref="stepper" color="primary" header-nav animated>
    <!-- PERSONAL INFORMATION -->
    <q-step :name="1" title="Step 1 - Personal Information" icon="account_box">
      <div class="row">
        <div class="col-12 col-md-2">
          <q-avatar size="100px">
            <img src="~assets/profile_1.png" />
          </q-avatar>
        </div>
        <div class="col-12 col-md-10">
          <div class="row">
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              label="First name:"
              v-model="farmer.fname"
            />
            <!-- <template v-slot:before>
                <q-icon name="mail" />  
              </template> -->
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.mname"
              label="Middle Name:"
            />
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.lname"
              label="Last Name:"
            />
          </div>
          <div class="row q-pt-md">
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.extension_name"
              label="Extension Name:"
            />
            <div class="col-12 col-md-8 q-pr-md">
              Gender
              <q-radio v-model="farmer.gender" val="male" label="Male" />
              <q-radio v-model="farmer.gender" val="female" label="Female" />
            </div>
          </div>
        </div>
      </div>
      <q-separator class="q-ma-md"></q-separator>
      <div class="row">
        <q-input
          class="col-12 col-md-4 q-pr-md"
          outlined
          v-model="farmer.contact_number"
          label="Contact Number:"
        />
        <q-input
          class="col-12 col-md-4 q-pr-md"
          outlined
          type="date"
          v-model="farmer.birthdate"
          label="Date of Birth:"
        />
        <q-input
          class="col-12 col-md-4 q-pr-md"
          outlined
          v-model="farmer.place_of_birth"
          label="Place of Birth:"
        />
      </div>
      <div class="row q-pt-md">
        <q-select
          class="col-12 col-md-4 q-pr-md"
          outlined
          :options="listsOfReligions"
          v-model="farmer.religion"
          label="Religion:"
        />
        <div class="col-12 col-md-4 q-pr-md">
          <div class="row">
            <div class="col-2 col-md-4 q-pa-md">
              Civil Status
            </div>
            <div class="col-10 col-md-8">
              <q-radio
                v-model="farmer.civil_status"
                val="Single"
                label="Single"
              />
              <q-radio
                v-model="farmer.civil_status"
                val="Married"
                label="Married"
              />
              <q-radio
                v-model="farmer.civil_status"
                val="Windowed"
                label="Windowed"
              />
              <q-radio
                v-model="farmer.civil_status"
                val="Separated"
                label="Separated"
              />
            </div>
          </div>
        </div>
        <q-input
          v-if="farmer.civil_status === 'Married'"
          class="col-12 col-md-4 q-pr-md"
          outlined
          v-model="farmer.name_of_spouse"
          label="Name of Spouse:"
        />
      </div>
      <div class="row q-pt-md">
        <q-input
          class="col-12 col-md-4 q-pr-md"
          outlined
          v-model="farmer.mothers_maiden_name"
          label="Mother's Maiden Name:"
        />
      </div>
      <q-separator class="q-ma-md"></q-separator>
      <div class="row q-pt-md">
        <div class="col-12 col-md-4">
          <div class="text-h5 text-center">Household Details</div>
        </div>
        <div class="col-12 col-md-8 q-pr-md">
          <div class="row">
            <div class="col-4 col-md-2">
              Household Head?
            </div>
            <div class="col-8 col-md-2">
              <q-radio v-model="farmer.is_household_head" val="1" label="Yes" />
              <q-radio v-model="farmer.is_household_head" val="0" label="no" />
            </div>
            <div
              class="col-12 col-md-4 q-pr-md"
              v-if="farmer.is_household_head == 0"
            >
              <q-select
                outlined
                v-model="farmer.household_head.relationship_type"
                :options="typesOfRelationships"
                label="Relationship:"
              />
            </div>
          </div>
          <div class="row q-pt-md" v-if="farmer.is_household_head == 0">
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.household_head.fname"
              label="First name:"
            />
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.household_head.mname"
              label="Middle name:"
            />
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.household_head.lname"
              label="Last name:"
            />
          </div>
        </div>
      </div>
      <q-separator class="q-ma-md"></q-separator>
      <div class="row q-pt-md">
        <div class="col-6 col-md-6"></div>
        <div class="col-6 col-md-6">
          <q-btn color="info" class="full-width" @click="toggleNext()">
            Next
          </q-btn>
        </div>
      </div>
    </q-step>
    <!-- ADDRESS -->
    <q-step :name="2" title="Step 2 - Address" icon="explore">
      <div class="row">
        <q-input
          class="col-12 col-md-12 q-pt-md"
          outlined
          v-model="farmer.address_house_number"
          label="House/Lot/Building Number:"
        />
        <q-input
          class="col-12 col-md-12 q-pt-md"
          outlined
          v-model="farmer.address_street"
          label="Street/Subd:"
        />
        <q-input
          class="col-12 col-md-12 q-pt-md"
          outlined
          v-model="farmer.address_barangay"
          label="Barangay:"
        />
        <q-input
          class="col-12 col-md-12 q-pt-md"
          outlined
          v-model="farmer.address_municipality"
          label="Municipality/City:"
        />
        <q-input
          class="col-12 col-md-12 q-pt-md"
          outlined
          v-model="farmer.address_province"
          label="Province:"
        />
        <q-input
          class="col-12 col-md-12 q-pt-md"
          outlined
          v-model="farmer.address_region"
          label="Region:"
        />
      </div>
      <q-separator class="q-ma-md"></q-separator>
      <div class="row">
        <div class="col-6 col-md-6">
          <q-btn class="full-width" @click="togglePrevious()">
            Previous
          </q-btn>
        </div>
        <div class="col-6 col-md-6">
          <q-btn color="info" class="full-width" @click="toggleNext()">
            Next
          </q-btn>
        </div>
      </div>
    </q-step>
    <!-- OTHER DETAILS -->
    <q-step :name="3" title="Step 3 - Other Details" icon="assignment">
      <div class="row">
        <div class="col-6 col-md-3">Highest Formal Education</div>
        <div class="col-6 col-md-9">
          <q-radio v-model="farmer.highest_education" val="None" label="None" />
          <q-radio
            v-model="farmer.highest_education"
            val="Elementary"
            label="Elementary"
          />
          <q-radio
            v-model="farmer.highest_education"
            val="High School"
            label="High School"
          />
          <q-radio
            v-model="farmer.highest_education"
            val="Vocational"
            label="Vocational"
          />
          <q-radio
            v-model="farmer.highest_education"
            val="College"
            label="College"
          />
          <q-radio
            v-model="farmer.highest_education"
            val="Post Graduate"
            label="Post Graduate"
          />
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-6 col-md-3">
          Person with Disability (PWD)
        </div>
        <div class="col-6 col-md-9">
          <q-radio v-model="farmer.is_pwd" val="1" label="Yes" />
          <q-radio v-model="farmer.is_pwd" val="0" label="no" />
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-6 col-md-3">
          4P's Beneficiary?
        </div>
        <div class="col-6 col-md-9">
          <q-radio v-model="farmer.is_4ps" val="1" label="Yes" />
          <q-radio v-model="farmer.is_4ps" val="0" label="no" />
        </div>
      </div>
      <div class="row q-pt-md">
        <div class="col-6 col-md-3">
          Member of indigenous group?
        </div>
        <div class="col-6 col-md-2">
          <q-radio v-model="farmer.is_indigenous_group" val="1" label="Yes" />
          <q-radio
            @click="farmer.indigenous_group = ''"
            v-model="farmer.is_indigenous_group"
            val="0"
            label="no"
          />
        </div>
        <q-input
          v-if="farmer.is_indigenous_group == 1"
          class="col-12 col-md-7"
          outlined
          v-model="farmer.indigenous_group"
          label="Specify:"
        />
      </div>
      <div class="row q-pt-md">
        <div class="col-6 col-md-3">
          Has Government ID?
        </div>
        <div class="col-6 col-md-2">
          <q-radio v-model="farmer.is_government_id" val="1" label="Yes" />
          <q-radio v-model="farmer.is_government_id" val="0" label="no" />
        </div>
        <q-input
          v-if="farmer.is_government_id == 1"
          class="col-12 col-md-7"
          outlined
          v-model="farmer.government_id"
          label="Specify government ID:"
        />
      </div>
      <div class="row q-pt-md">
        <div class="col-6 col-md-3">
          Member of any Farmers Association/Cooperative?
        </div>
        <div class="col-6 col-md-2">
          <q-radio v-model="farmer.is_association_member" val="1" label="Yes" />
          <q-radio v-model="farmer.is_association_member" val="0" label="no" />
        </div>
        <q-input
          v-if="farmer.is_association_member == 1"
          class="col-12 col-md-7 q-pt-md"
          outlined
          v-model="farmer.association"
          label="Specify association:"
        />
      </div>
      <q-separator></q-separator>
      <div class="row q-pt-md">
        <q-input
          class="col-12 col-md-6 q-pr-md"
          outlined
          v-model="farmer.emergency_contact_person"
          label="Person to notify in case of emergency:"
        />
        <q-input
          class="col-12 col-md-6 q-pr-md"
          outlined
          v-model="farmer.emergency_contact_person_number"
          label="Emergency Contact Number:"
        />
      </div>
      <q-separator class="q-ma-md"></q-separator>
      <div class="row">
        <div class="col-6 col-md-6">
          <q-btn class="full-width" @click="togglePrevious()">
            Previous
          </q-btn>
        </div>
        <div class="col-6 col-md-6">
          <q-btn class="full-width" color="info" @click="toggleNext()"
            >Next</q-btn
          >
        </div>
      </div>
    </q-step>
    <q-step :name="4" title="Step 4 - Farm Profile" icon="agriculture">
      <div class="row">
        <div class="col-6 col-md-3 q-pa-md">
          Main Livelihood
        </div>
        <div class="col-6 col-md-7">
          <q-radio
            v-model="farmer.main_livelihood"
            val="Farmer"
            label="Farmer"
          />
          <q-radio
            v-model="farmer.main_livelihood"
            val="Farmworker/Laborer"
            label="Farmworker/Laborer"
          />
          <q-radio
            v-model="farmer.main_livelihood"
            val="Fisherfolk"
            label="Fisherfolk"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4  q-pr-md">
          <q-card bordered flat class="col-12 col-md-4">
            <q-card-section>
              For Farmers
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section>
              <div class="row">
                <div class="col-12 col-md-12 text-weight-bolder">
                  Type of Farming Activity
                </div>
              </div>
              <q-separator></q-separator>
              <div class="row">
                <div class="col-6 col-md-3">
                  Rice
                </div>
                <div class="col-6 col-md-7">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Rice"
                    :disable="farmer.main_livelihood != 'Farmer'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3">
                  Corn
                </div>
                <div class="col-6 col-md-7">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Corn"
                    :disable="farmer.main_livelihood != 'Farmer'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3">
                  Other Crops
                </div>
                <div class="col-6 col-md-9">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <q-radio
                        v-model="farmer.main_livelihood_activity"
                        val="Other Crops"
                        :disable="farmer.main_livelihood != 'Farmer'"
                      />
                    </div>
                  </div>
                  <div
                    class="row"
                    v-if="farmer.main_livelihood_activity === 'Other Crops'"
                  >
                    <q-input
                      class="col-12 col-md-12 q-pt-md"
                      outlined
                      v-model="farmer.main_livehood_activity_specific"
                      label="Specify:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3">
                  Livestock
                </div>
                <div class="col-6 col-md-9">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <q-radio
                        v-model="farmer.main_livelihood_activity"
                        val="Livestock"
                        :disable="farmer.main_livelihood != 'Farmer'"
                      />
                    </div>
                  </div>
                  <div
                    class="row"
                    v-if="farmer.main_livelihood_activity === 'Livestock'"
                  >
                    <q-input
                      class="col-12 col-md-12 q-pt-md"
                      outlined
                      v-model="farmer.main_livehood_activity_specific"
                      label="Specify:"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-3">
                  Poultry
                </div>
                <div class="col-6 col-md-9">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <q-radio
                        v-model="farmer.main_livelihood_activity"
                        val="Poultry"
                        :disable="farmer.main_livelihood != 'Farmer'"
                      />
                    </div>
                  </div>
                  <div
                    class="row"
                    v-if="farmer.main_livelihood_activity === 'Poultry'"
                  >
                    <q-input
                      class="col-12 col-md-12 q-pt-md"
                      outlined
                      v-model="farmer.main_livehood_activity_specific"
                      label="Specify:"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 q-pr-md">
          <q-card bordered flat class="col-12 col-md-4">
            <q-card-section>
              For Farmworkers
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section>
              <div class="row">
                <div class="col-12 col-md-12 text-weight-bolder">
                  Kind of work
                </div>
              </div>
              <q-separator></q-separator>
              <div class="row">
                <div class="col-6 col-md-4">
                  Land Preparation
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Land Preparation"
                    :disable="farmer.main_livelihood != 'Farmworker/Laborer'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Planing/Transplanting
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Planing/Transplanting"
                    :disable="farmer.main_livelihood != 'Farmworker/Laborer'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Cultivation
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Cultivation"
                    :disable="farmer.main_livelihood != 'Farmworker/Laborer'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Harvesting
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Harvesting"
                    :disable="farmer.main_livelihood != 'Farmworker/Laborer'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Others, please specify
                </div>
                <div class="col-6 col-md-8">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <q-radio
                        v-model="farmer.main_livelihood_activity"
                        val="Other Work"
                        :disable="
                          farmer.main_livelihood != 'Farmworker/Laborer'
                        "
                      />
                    </div>
                  </div>
                  <div
                    class="row"
                    v-if="farmer.main_livelihood_activity === 'Other Work'"
                  >
                    <q-input
                      class="col-12 col-md-12 q-pt-md"
                      outlined
                      v-model="farmer.main_livehood_activity_specific"
                      label="Specify:"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4 q-pr-md">
          <q-card bordered flat class="col-12 col-md-4">
            <q-card-section>
              For Fisherfolk
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section>
              <div class="row">
                <div class="col-12 col-md-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
              <div class="row q-mt-md">
                <div class="col-12 col-md-12 text-weight-bolder">
                  Type of Fishing Activity
                </div>
              </div>
              <q-separator></q-separator>
              <div class="row">
                <div class="col-6 col-md-4">
                  Fish Capture
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    :disable="farmer.main_livelihood != 'Fisherfolk'"
                    val="Fish Capture"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Aquaculture
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    :disable="farmer.main_livelihood != 'Fisherfolk'"
                    val="Aquaculture"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Gleaning
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    :disable="farmer.main_livelihood != 'Fisherfolk'"
                    val="Gleaning"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Fish Processing
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    :disable="farmer.main_livelihood != 'Fisherfolk'"
                    val="Fish Processing"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Fish Vending
                </div>
                <div class="col-6 col-md-8">
                  <q-radio
                    v-model="farmer.main_livelihood_activity"
                    val="Fish Vending"
                    :disable="farmer.main_livelihood != 'Fisherfolk'"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-6 col-md-4">
                  Others, please specify
                </div>
                <div class="col-6 col-md-8">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <q-radio
                        v-model="farmer.main_livelihood_activity"
                        val="Other Fish Activity"
                        :disable="farmer.main_livelihood != 'Fisherfolk'"
                      />
                    </div>
                  </div>
                  <div
                    class="row"
                    v-if="
                      farmer.main_livelihood_activity === 'Other Fish Activity'
                    "
                  >
                    <q-input
                      class="col-12 col-md-12 q-pt-md"
                      outlined
                      v-model="farmer.main_livehood_activity_specific"
                      label="Specify:"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row q-mt-md">
        <div class="col-6 col-md-6">
          <q-btn class="full-width" @click="togglePrevious()">
            Previous
          </q-btn>
        </div>
        <div class="col-6 col-md-6">
          <q-btn
            icon="save"
            class="full-width"
            :loading="processingRequest"
            color="primary"
            @click="toggleSave()"
            >Submit</q-btn
          >
        </div>
      </div>
    </q-step>
  </q-stepper>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "FarmerCreate",
  data() {
    return {
      farmer: {
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
        is_household_head: null,
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
        household_head: {
          fname: "",
          mname: "",
          lname: "",
          relationship_type: ""
        },
        main_livelihood: "",
        main_livelihood_activity: "",
        main_livehood_activity_specific: ""
      }
    };
  },
  computed: {
    ...mapState("farmers", ["processingRequest", "crud_step"]),
    typesOfRelationships() {
      return ["Wife", "Husband", "Brother", "Sister"];
    },
    listsOfReligions() {
      return ["Roman Catholic", "INC", "Muslim", "Others"];
    },
    step: {
      get() {
        return this.$store.state.farmers.crud_step;
      },
      set(value) {
        this.$store.commit("farmers/SET_CRUD_STEP", value);
      }
    }
  },
  methods: {
    ...mapActions("farmers", ["storeFarmer"]),
    ...mapMutations("farmers", [
      "SET_PROCESS_REQUEST",
      "SET_PAGE",
      "SET_CRUD_STEP",
      "SET_FARMER"
    ]),
    toggleNext() {
      let step = this.crud_step + 1;
      this.SET_CRUD_STEP(step);
    },
    togglePrevious() {
      let step = this.crud_step - 1;
      this.SET_CRUD_STEP(step);
    },
    toggleSave() {
      this.SET_PROCESS_REQUEST(true);
      this.storeFarmer(this.farmer)
        .then(response => {
          this.SET_PROCESS_REQUEST(false);
          this.SET_FARMER(response.data.farmer);
          this.SET_PAGE("profile");
          this.$q.notify({
            type: "positive",
            position: "bottom-right",
            message: "Successfully added to the database!"
          });
          console.log(response);
        })
        .catch(error => {
          this.SET_PROCESS_REQUEST(false);

          this.$q.notify({
            type: "negative",
            position: "bottom-right",
            message: "Failed to submit, please check the errors!"
          });
          console.log(error);
        });
    }
  }
};
</script>
