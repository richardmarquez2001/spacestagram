<template>
  <q-card v-if="!!nasaData[0]">
    <q-img :src="nasaData[0].url" width="200px" />
    <div>
      <div>{{ nasaData[0].title }}</div>
      <div>{{ nasaData[0].date }}</div>
      <div>{{ nasaData[0].explanation }}</div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import axios from 'axios';

import { NasaData, ApiResponse } from 'src/models/nasa';
import API_URLS from 'src/utils/API_URLS';

export default defineComponent({
  name: 'FeedHero',
  setup() {
    const nasaData = ref<NasaData[]>([]);

    const date = new Date();
    const stringDate = date.toISOString().split('T')[0];

    watchEffect(() => {
      console.log(stringDate);
      axios
        .get(API_URLS.NASA, { params: { thumbs: true, date: stringDate } })
        .then((response: ApiResponse) => {
          nasaData.value.push(response.data);
        })
        .catch((err) => {
          console.log(err); // TODO: Make error explicit to user via popup/red text
        });
    });

    return { nasaData };
  },
});
</script>

<style scoped></style>
