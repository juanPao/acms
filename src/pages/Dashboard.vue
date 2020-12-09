<template>
  <q-page class="flex flex-center">
    
    <q-card>
      <q-card-section>
       Dashboard
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: 'Dashboard',
  data(){
    return {
      dna: {}
    }
  },
  computed: {
    //...mapState("reservations", ["reservations"]),
  },
  created(){
    this.initiateReservations();
  },
  methods: {
    initiateReservations() {
      this.$axios.get("https://www.reddit.com/r/aww.json")
      .then((response) => {
        this.dna = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
}
</script>
