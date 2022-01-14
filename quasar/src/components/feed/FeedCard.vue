<template>
  <q-card v-if="!!url" class="bg-primary card col-3 q-mt-md q-mx-md">
    <q-img
      v-if="media_type === 'image'"
      class="full-width"
      :src="url"
      spinner-color="black"
    />
    <q-video
      v-else-if="media_type === 'video'"
      class="full-width"
      :src="url"
      spinner-color="black"
    />
    <div class="q-ma-md text-dark-blue">
      <h3 class="text-size-sm text-gray">{{ date }}</h3>
      <h2 class="text-size-title">{{ title }}</h2>
      <article class="q-mb-md text-size-md">{{ explanationData }} ...</article>
      <div class="q-pb-md row full-width justify-end">
        <like-button :date="date" />
        <view-button :date="date" />
        <share-button :date="date" />
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

import LikeButton from 'src/components/buttons/LikeButton.vue';
import ViewButton from 'src/components/buttons/ViewButton.vue';
import ShareButton from 'src/components/buttons/ShareButton.vue';

export default defineComponent({
  components: { LikeButton, ViewButton, ShareButton },
  name: 'FeedCard',
  props: {
    media_type: { type: String, required: true },
    url: { type: String, required: true },
    date: { type: String, required: true },
    title: { type: String, required: true },
    explanation: { type: String, required: true },
  },
  setup(props) {
    const explanationData = computed(() => {
      return props.explanation.substr(0, 300);
    });
    return { explanationData };
  },
});
</script>
