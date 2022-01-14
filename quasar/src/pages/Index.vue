<template>
  <q-page class="bg-primary container">
    <feed-hero />
    <feed-list />
  </q-page>
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

<style lang="scss" scoped>
.container {
  width: 70vw;
  margin: 0 auto;
}
</style>
