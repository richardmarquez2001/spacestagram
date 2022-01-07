<template>
  <q-btn
    class="q-mr-md"
    icon="favorite_border"
    @click="setLike"
    v-bind:color="likeColor"
    text-color="black"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LikeButton',
  setup() {
    const likeColor = ref('');

    const setLike = () => {
      const newColor = likeColor.value == '' ? 'red' : '';
      likeColor.value = newColor;
    };
    return { setLike, likeColor };
  },
});
</script>

<style scoped></style>
