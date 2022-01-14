<template>
  <q-btn
    rounded
    class="button q-mr-md q-mb-sm"
    icon="ios_share"
    @click="copyURL"
  >
    <q-popup-proxy>
      <div class="share-popup q-pa-sm bg-primary text-secondary">copied!</div>
    </q-popup-proxy>
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
        `${window.location.toString()}showcase/${props.date}`
      );
    };

    return { copyURL };
  },
});
</script>

<style lang="scss" scoped>
.share-popup {
  font-size: 12px;
}
</style>
