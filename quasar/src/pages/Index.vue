<template>
  <div>
    <feed-hero />
    <feed-list />
  </div>
</template>

<script lang="ts">
import FeedHero from 'src/components/feed/FeedHero.vue';
import { defineComponent } from 'vue';
import FeedList from 'src/components/feed/FeedList.vue';
export default defineComponent({
  components: { FeedList, FeedHero },
  name: 'PageIndex',
});
</script>
