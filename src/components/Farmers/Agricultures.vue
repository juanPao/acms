<template>
  <q-card>
    <q-card-section>
        <div class="row">
            <div class="col-12 col-md-6">
                Lists of Agricultures owned by this profile.
            </div>
            <div class="col-12 col-md-6">
                <q-btn color="primary" class="absolute-right" @click="toggleCreate()">Create</q-btn>
            </div>
        </div>
    </q-card-section>
    <q-card-section>
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          </q-item-section>
          <q-item-section>List item</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-dialog v-model="showCreateDialog" full-width> 
        <AgricultureCrud></AgricultureCrud>
    </q-dialog>
  </q-card>
</template>

<script>
import AgricultureCrud from './AgricultureCrud'

export default {
  name: "Agricultures",
  components: {
      AgricultureCrud,
  },
  data() {
    return {
        showCreateDialog: false,
    };
  },
  methods: {
      toggleCreate(){
          this.showCreateDialog = true;
      }
  }
};
</script>
