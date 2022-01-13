<template>
  <q-card v-if="!!nasaData[0]">
    <q-img
      v-if="nasaData[0].media_type === 'image'"
      width="300px"
      :src="nasaData[0].url"
      spinner-color="black"
    />
    <q-video
      v-else-if="nasaData[0].media_type === 'video'"
      width="300px"
      :src="nasaData[0].url"
      spinner-color="black"
    />
    <div>
      <div>{{ nasaData[0].title }}</div>
      <div>{{ nasaData[0].date }}</div>
      <div>{{ nasaData[0].explanation }}</div>
    </div>
    <like-button :date="nasaData[0].date" />
    <share-button :date="nasaData[0].date" />
    <view-button :date="nasaData[0].date" />
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import axios from 'axios';

import { NasaData, ApiResponse } from 'src/models/nasa';
import API_URLS from 'src/utils/API_URLS';
import LikeButton from 'src/components/buttons/LikeButton.vue';
import ShareButton from 'src/components/buttons/ShareButton.vue';
import ViewButton from 'src/components/buttons/ViewButton.vue';

export default defineComponent({
  components: { ShareButton, ViewButton, LikeButton },
  name: 'FeedHero',
  setup() {
    LikeButton;
    const nasaData = ref<NasaData[]>([]);

    const date = new Date();

    // used pt-BR as the locale parameter because it matches nasa's api date format (MM-DD-YYYY)
    const stringDate = date
      .toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .split('/')
      .reverse()
      .join('-');

    watchEffect(() => {
      console.log(
        date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      );
      console.log(stringDate);
      axios
        .get(API_URLS.NASA, { params: { thumbs: true, date: stringDate } })
        .then((response: ApiResponse) => {
          nasaData.value.push(response.data);
        })
        .catch((err) => {
          console.log(`[FeedHero.vue] ${(err as Error).message}`); // TODO: Make error explicit to user via popup/red text
        });
    });

    return { nasaData };
  },
});
</script>

<style scoped></style>
