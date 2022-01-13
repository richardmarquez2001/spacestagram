<template>
  <q-btn
    v-if="!!date"
    class="q-mr-md"
    icon="favorite_border"
    @click="setLike"
    v-bind:color="likeColor"
    text-color="black"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  name: 'LikeButton',
  props: { date: { type: String, required: true } },
  setup(props) {
    const likeColor = ref('white');

    const setLike = () => {
      if (Boolean(localStorage.getItem(props.date))) {
        // if true
        localStorage.removeItem(props.date);
      } else {
        // if false
        localStorage.setItem(props.date, 'true');
      }

      const newColor = likeColor.value === 'white' ? 'red' : 'white';
      likeColor.value = newColor;
    };

    watchEffect(() => {
      likeColor.value = Boolean(localStorage.getItem(props.date))
        ? 'red'
        : 'white';
    });

    return { setLike, likeColor };
  },
});
</script>

<style scoped></style>
