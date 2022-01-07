<template>
  <q-btn label="View" @click="routeToPage" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  name: 'ViewButton',
  setup(props) {
    const router = useRouter();
    const routeToPage = async (): Promise<void> => {
      await router.push(`/showcase/${props.date}`);
    };
    return { routeToPage };
  },
});
</script>

<style scoped></style>
