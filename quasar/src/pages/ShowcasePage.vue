<template>
  <div>
    <div class="row">
      <div class="col-6">
        <q-img :src="data.url" />
      </div>
      <div class="col-6">
        <div>{{ data.title }}</div>
        <div>{{ data.date }}</div>
        <div>{{ data.explanation }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { NasaData, ApiResponse } from 'src/models/nasa';
import API_URLS from 'src/utils/API_URLS';

import axios from 'axios';
export default defineComponent({
  props: { date: String },
  name: 'ShowcasePage',
  setup(props) {
    console.log(props.date);
    const data = ref<NasaData>({});

    watchEffect(() => {
      axios
        .get(API_URLS.NASA, {
          params: {
            thumbs: true,
            date: props.date,
          },
        })
        .then((response: ApiResponse) => {
          data.value = response.data;
        })
        .catch((err) => {
          console.log(`[ERROR] ShowcasePage.vue: ${(err as Error).message}`);
        });
    });
    return { data };
  },
});
</script>

<style scoped></style>
