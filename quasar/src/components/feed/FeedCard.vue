<template>
  <q-card v-if="!!data" class="feed-card col-4 q-my-xl">
    <q-img
      v-if="data.media_type === 'image'"
      width="300px"
      :src="data.url"
      spinner-color="black"
    />
    <q-video
      v-else-if="data.media_type === 'video'"
      width="300px"
      :src="data.url"
      spinner-color="black"
    />
    <div>{{ data.title }}</div>
    <div>{{ data.date }}</div>
    <div>{{ data.explanation }}</div>
    <div>
      <like-button :date="data.date" />
      <view-button :date="data.date" />
      <share-button :date="data.date" />
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { NasaData } from 'src/models/nasa';

import LikeButton from 'src/components/buttons/LikeButton.vue';
import ViewButton from 'src/components/buttons/ViewButton.vue';
import ShareButton from 'src/components/buttons/ShareButton.vue';

export default defineComponent({
  components: { LikeButton, ViewButton, ShareButton },
  name: 'FeedCard',
  props: {
    data: Object as PropType<NasaData>,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.feed-card {
  width: 300px;
}
</style>
