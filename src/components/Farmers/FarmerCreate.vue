<template>
      <q-stepper
        v-model="step"
        ref="stepper"
        color="primary"
        header-nav
        animated
      >
        <!-- PERSONAL INFORMATION -->
        <q-step :name="1" title="Step 1 - Personal Information" icon="account_box" >
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
                  prefix="First name:"
                  v-model="farmer.fname"
                />
                <!-- <template v-slot:before>
                <q-icon name="mail" />  
              </template> -->
                <q-input
                  class="col-12 col-md-4 q-pr-md"
                  outlined
                  v-model="farmer.mname"
                  prefix="Middle Name:"
                />
                <q-input
                  class="col-12 col-md-4 q-pr-md"
                  outlined
                  v-model="farmer.lname"
                  prefix="Last Name:"
                />
              </div>
              <div class="row q-pt-md">
                <q-input
                  class="col-12 col-md-4 q-pr-md"
                  outlined
                  v-model="farmer.extension_name"
                  prefix="Extension Name:"
                />
                <div class="col-12 col-md-8 q-pr-md">
                  Gender
                  <q-radio v-model="farmer.gender" val="male" label="Male" />
                  <q-radio
                    v-model="farmer.gender"
                    val="female"
                    label="Female"
                  />
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
              prefix="Contact Number:"
            />
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              type="date"
              v-model="farmer.birthdate"
              prefix="Date of Birth:"
            />
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.place_of_birth"
              prefix="Place of Birth:"
            />
          </div>
          <div class="row q-pt-md">
            <q-select
              class="col-12 col-md-4 q-pr-md"
              outlined
              :options="listsOfReligions"
              v-model="farmer.religion"
              prefix="Religion:"
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
              prefix="Name of Spouse:"
            />
          </div>
          <div class="row q-pt-md">
            <q-input
              class="col-12 col-md-4 q-pr-md"
              outlined
              v-model="farmer.mothers_maiden_name"
              prefix="Mother's Maiden Name:"
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
                  <q-radio
                    v-model="farmer.is_household_head"
                    val="1"
                    label="Yes"
                  />
                  <q-radio
                    v-model="farmer.is_household_head"
                    val="0"
                    label="no"
                  />
                </div>
                <div
                  class="col-12 col-md-4 q-pr-md"
                  v-if="farmer.is_household_head == 0"
                >
                  <q-select
                    outlined
                    v-model="farmer.household_head.relationship_type"
                    :options="typesOfRelationships"
                    prefix="Relationship:"
                  />
                </div>
              </div>
              <div class="row q-pt-md" v-if="farmer.is_household_head == 0">
                <q-input
                  class="col-12 col-md-4 q-pr-md"
                  outlined
                  v-model="farmer.household_head.fname"
                  prefix="First name:"
                />
                <q-input
                  class="col-12 col-md-4 q-pr-md"
                  outlined
                  v-model="farmer.household_head.mname"
                  prefix="Middle name:"
                />
                <q-input
                  class="col-12 col-md-4 q-pr-md"
                  outlined
                  v-model="farmer.household_head.lname"
                  prefix="Last name:"
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
              prefix="House/Lot/Building Number:"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_street"
              prefix="Street/Subd:"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_barangay"
              prefix="Barangay:"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_municipality"
              prefix="Municipality/City:"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_province"
              prefix="Province:"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_region"
              prefix="Region:"
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
              <q-radio
                v-model="farmer.highest_education"
                val="None"
                label="None"
              />
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
              <q-radio
                v-model="farmer.is_indigenous_group"
                val="1"
                label="Yes"
              />
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
              prefix="Specify:"
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
              prefix="Specify government ID:"
            />
          </div>
          <div class="row q-pt-md">
            <div class="col-6 col-md-3">
              Member of any Farmers Association/Cooperative?
            </div>
            <div class="col-6 col-md-2">
              <q-radio
                v-model="farmer.is_association_member"
                val="1"
                label="Yes"
              />
              <q-radio
                v-model="farmer.is_association_member"
                val="0"
                label="no"
              />
            </div>
            <q-input
              v-if="farmer.is_association_member == 1"
              class="col-12 col-md-7 q-pt-md"
              outlined
              v-model="farmer.association"
              prefix="Specify association:"
            />
          </div>
          <q-separator></q-separator>
          <div class="row q-pt-md">
            <q-input
              class="col-12 col-md-6 q-pr-md"
              outlined
              v-model="farmer.emergency_contact_person"
              prefix="Person to notify in case of emergency:"
            />
            <q-input
              class="col-12 col-md-6 q-pr-md"
              outlined
              v-model="farmer.emergency_contact_person_number"
              prefix="Emergency Contact Number:"
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
      step: 1,
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
        }
      }
    };
  },
  computed: {
    ...mapState("farmers", ["processingRequest"]),
    typesOfRelationships() {
      return ["Wife", "Husband", "Brother", "Sister"];
    },
    listsOfReligions() {
      return ["Roman Catholic", "INC", "Muslim", "Others"];
    }
  },
  methods: {
    ...mapActions("farmers", ["storeFarmer"]),
    ...mapMutations("farmers", [
      "SET_PROCESS_REQUEST",
      "SET_PAGE",
      "SET_FARMER",
    ]),
    toggleNext(){
      this.step++;
    },
    togglePrevious(){
      this.step--;
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

          console.log(error);
        });
    }
  }
};
</script>
