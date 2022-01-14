<template>
  <q-page>
    <div class="row q-ma-xl">
      <div class="col-md-4 col-sm-12 col-xs-12">
        <q-img
          v-if="data.media_type === 'image'"
          :src="data.url"
          spinner-color="black"
        />
        <q-video
          v-else-if="data.media_type === 'video'"
          :src="data.url"
          spinner-color="black"
        />
      </div>
      <div class="col-md-8 col-sm-12 q-pa-xl">
        <h2 class="text-size-sm text-gray">{{ data.date }}</h2>

        <h1 class="text-size-title">{{ data.title }}</h1>
        <article>{{ data.explanation }}</article>
        <div class="q-pt-xl row justify-end">
          <like-button :date="data.date" />
          <share-button :date="data.date" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import axios from 'axios';

import { NasaData, ApiResponse } from 'src/models/nasa';

import API_URLS from 'src/utils/API_URLS';
import LikeButton from 'src/components/buttons/LikeButton.vue';
import ShareButton from 'src/components/buttons/ShareButton.vue';

export default defineComponent({
  props: { date: String },
  components: { LikeButton, ShareButton },
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
