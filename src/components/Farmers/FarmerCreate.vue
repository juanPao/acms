<template>
  <q-card>
    <q-card-section class="row">
      <q-avatar class="col-6">
        <img src="~assets/profile_1.png" />
      </q-avatar>
      <div class="col-6"></div>
    </q-card-section>
    <q-card-section class="row">
      <div class="col-12">
        <q-card flat bordered class="q-pa-md">
          <q-card-section class="bg-primary text-white">
            <div class="text-h5">Personal Information</div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row">
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model="farmer.fname"
                label="First Name"
              />
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model="farmer.mname"
                label="Middle Name"
              />
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model="farmer.lname"
                label="Last Name"
              />
            </div>
            <div class="row q-pt-md">
              <q-input
                class="col-12 col-md-4"
                outlined
                v-model="farmer.extension_name"
                label="Extension Name"
              />
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            Gender
            <q-radio v-model="farmer.gender" val="male" label="Male" />
            <q-radio v-model="farmer.gender" val="female" label="Female" />
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="bg-primary text-white">
            Address
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_house_number"
              label="House/Lot/Building Number"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_street"
              label="Street/Subd"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_barangay"
              label="Barangay"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_municipality"
              label="Municipality/City"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_province"
              label="Province"
            />
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.address_region"
              label="Region"
            />
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row">
              <q-input
                class="col-12 col-md-12 q-pt-md"
                outlined
                v-model="farmer.contact_number"
                label="Contact Number"
              />
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="row">
            <q-input
              class="col-12 col-md-6 q-pt-md"
              outlined
              type="date"
              v-model="farmer.birthdate"
              label="Date of Birth"
            />
            <q-input
              class="col-12 col-md-6 q-pt-md"
              outlined
              v-model="farmer.place_of_birth"
              label="Place of Birth"
            />
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="row">
            <q-select
              class="col-12 col-md-6 q-pt-md"
              outlined
              :options="listsOfReligions"
              v-model="farmer.religion"
              label="Religion"
            />
            <div class="col-12 col-md-6 q-pl-md">
              <div class="row">
                Civil Status
              </div>
              <div class="row">
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
              <div class="row" v-if="farmer.civil_status === 'Married'">
                <q-input
                  class="col-12 col-md-12 q-pt-md"
                  outlined
                  v-model="farmer.name_of_spouse"
                  label="Name of Spouse"
                />
              </div>
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="row">
            <q-input
              class="col-12 col-md-12 q-pt-md"
              outlined
              v-model="farmer.mothers_maiden_name"
              label="Mother's Maiden Name"
            />
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row">
              Household Head?
              <q-radio v-model="farmer.is_household_head" val="1" label="Yes" />
              <q-radio v-model="farmer.is_household_head" val="0" label="no" />
            </div>
            <div class="row" v-if="farmer.is_household_head == 0">
              <div class="col-12 col-md-3 q-pa-md">
                Household details
              </div>
              <q-select
                class="col-12 col-md-4 q-pt-md"
                outlined
                v-model="farmer.household_head.relationship_type"
                :options="typesOfRelationships"
                label="Relationship"
              />
            </div>
            <div class="row" v-if="farmer.is_household_head == 0">
              <q-input
                class="col-12 col-md-4 q-pt-md"
                outlined
                v-model="farmer.household_head.fname"
                label="First name"
              />
              <q-input
                class="col-12 col-md-4 q-pt-md"
                outlined
                v-model="farmer.household_head.mname"
                label="Middle name"
              />
              <q-input
                class="col-12 col-md-4 q-pt-md"
                outlined
                v-model="farmer.household_head.lname"
                label="Last name"
              />
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="row">
            <div class="col-6 col-md-3 q-pa-md">Highest Formal Education</div>
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
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="q-pa-md">
            Person with Disability (PWD)
            <q-radio v-model="farmer.is_pwd" val="1" label="Yes" />
            <q-radio v-model="farmer.is_pwd" val="0" label="no" />
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row">
              <div class="col-6 col-md-2 q-pa-md">
                4P's Beneficiary?
              </div>
              <div class="col-6 col-md-10 q-pa-md">
                <q-radio v-model="farmer.is_4ps" val="1" label="Yes" />
                <q-radio v-model="farmer.is_4ps" val="0" label="no" />
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-md-2 q-pa-md">
                Member of indigenous group?
              </div>
              <div class="col-6 col-md-2 q-pa-md">
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
                class="col-12 col-md q-pt-md"
                outlined
                v-model="farmer.indigenous_group"
                label="Specify"
              />
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row">
              <div class="col-6 col-md-2 q-pa-md">
                Has Government ID?
              </div>
              <div class="col-6 col-md-2">
                <q-radio
                  v-model="farmer.is_government_id"
                  val="1"
                  label="Yes"
                />
                <q-radio v-model="farmer.is_government_id" val="0" label="no" />
              </div>
              <q-input
                v-if="farmer.is_government_id == 1"
                class="col-12 col-md q-pt-md"
                outlined
                v-model="farmer.government_id"
                label="Specify government ID"
              />
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <div class="row">
              <div class="col-6 col-md-2 q-pa-md">
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
                class="col-12 col-md q-pt-md"
                outlined
                v-model="farmer.association"
                label="Specify association"
              />
            </div>
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section>
            <q-input
              class="q-pt-md"
              outlined
              v-model="farmer.emergency_contact_person"
              label="Person to notify in case of emergency"
            />
            <q-input
              class="q-pt-md"
              outlined
              v-model="farmer.emergency_contact_person_number"
              label="Emergency Contact Number"
            />
          </q-card-section>
        </q-card>
      </div>
    </q-card-section>
    <q-card-section>
        <q-btn class="full-width " color="primary" size="lg" @click="toggleSave()">Save</q-btn>
    </q-card-section>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

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
        is_household_head: 0,
        highest_education: "",
        is_pwd: 0,
        is_4ps: 0,
        is_indigenous_group: 0,
        indigenous_group: "",
        is_government_id: 0,
        government_id: "",
        is_association_member: 0,
        association: "",
        emergency_contact_person: "",
        emergency_contact_person_number: "",
        household_head: {
            fname: "",
            mname: "",
            lname: "",
            relationship_type: "",
        }
      }
    };
  },
  computed: {
    typesOfRelationships() {
      return ["Wife", "Husband", "Brother", "Sister"];
    },
    listsOfReligions(){
      return ["Roman Catholic", "INC", "Muslim", "Others"];
    }
  },
  methods: {
      ...mapActions("farmers", ['storeFarmer']),
      toggleSave(){
          this.storeFarmer(this.farmer).then((response) => {
              console.log(response);
          }).catch((error) => {
              console.log(error);
          });
      }
  }
};
</script>
