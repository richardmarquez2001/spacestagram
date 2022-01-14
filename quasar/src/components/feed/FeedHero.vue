<template>
  <main>
    <q-card class="bg-primary hero row q-mt-md q-mb-xl" v-if="!!nasaData[0]">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <q-img
          v-if="nasaData[0].media_type === 'image'"
          :src="nasaData[0].url"
          class="hero-image"
          spinner-color="black"
        />
        <q-video
          v-else-if="nasaData[0].media_type === 'video'"
          width="300px"
          :src="nasaData[0].url"
          spinner-color="black"
        />
      </div>

      <div class="col-md-6 col-sm-12 col-xs-12 q-pa-md">
        <div>
          <h3 class="row text-size-sm text-gray">
            <span class="col justify-start">Today's Image</span>
            <span class="col row justify-end">
              {{ nasaData[0].date }}
            </span>
          </h3>
          <h2 class="text-size-title">{{ nasaData[0].title }}</h2>
          <article>{{ nasaData[0].explanation }}</article>
        </div>

        <div class="row q-pt-md justify-end">
          <like-button :date="nasaData[0].date" />
          <view-button :date="nasaData[0].date" />
          <share-button :date="nasaData[0].date" />
        </div>
      </div>
    </q-card>
  </main>
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

<style lang="scss" scoped>
.hero {
  width: 100%;
}
.hero-image {
  width: 100%;
}
</style>
