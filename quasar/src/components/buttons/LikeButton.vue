<template>
  <q-btn
    v-if="!!date"
    rounded
    class="button q-mr-md q-mb-sm"
    icon="favorite_border"
    @click="setLike"
    v-bind:color="likeColor"
    v-bind:text-color="textColor"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  name: 'LikeButton',
  props: { date: { type: String, required: true } },
  setup(props) {
    const likeColor = ref('primary');
    const textColor = ref('secondary');

    const setLike = () => {
      if (Boolean(localStorage.getItem(props.date))) {
        // if true
        localStorage.removeItem(props.date);
      } else {
        // if false
        localStorage.setItem(props.date, 'true');
      }

      likeColor.value = likeColor.value === 'primary' ? 'accent' : 'primary';
      textColor.value =
        textColor.value === 'secondary' ? 'primary' : 'secondary';
    };

    watchEffect(() => {
      likeColor.value = Boolean(localStorage.getItem(props.date))
        ? 'accent'
        : 'primary';
    });

    return { setLike, likeColor, textColor };
  },
});
</script>

<style scoped></style>
