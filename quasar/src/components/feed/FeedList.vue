<template>
  <q-infinite-scroll @load="fetchData">
    <div class="row">
      <div
        v-for="(item, index) in nasaData"
        :key="index"
        class="col-lg-4 col-md-4 col-sm-12 q-mb-xl"
      >
        <feed-card
          :date="item.date"
          :explanation="item.explanation"
          :media_type="item.media_type"
          :title="item.title"
          :url="item.url"
        />
      </div>
    </div>
    <template v-slot:loading>
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </template>
  </q-infinite-scroll>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

import { ApiResponse, NasaData } from 'src/models/nasa';
import API_URLS from 'src/utils/API_URLS';
import FeedCard from 'src/components/feed/FeedCard.vue';

export default defineComponent({
  name: 'FeedList',
  components: { FeedCard },
  setup() {
    const nasaData = ref<NasaData[]>([]);

    const getDate = (index: number) => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return date.toLocaleDateString('pt-br').split('/').reverse().join('-');
    };

    const fetchData = (index: number, done: () => void) => {
      axios
        .get(API_URLS.NASA, {
          params: { thumbs: true, date: getDate(index) },
        })
        .then((response: ApiResponse) => {
          nasaData.value.push(response.data);
        })
        .catch((err) => {
          console.log(`[FeedsList.vue] ${(err as Error).message}`); // TODO: Make error explicit to user via popup/red text
        });
      done();
    };

    return { nasaData, fetchData };
  },
});
</script>
