<template>
  <q-btn class="q-mr-md" icon="ios_share" @click="copyURL">
    <q-popup-proxy> Copied! </q-popup-proxy>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  name: 'ShareButton',
  setup(props) {
    const copyURL = async () => {
      await navigator.clipboard.writeText(
        `localhost:8080/showcase/${props.date}`
      );
    };

    return { copyURL };
  },
});
</script>

<style scoped></style>
