<template>
  <nav>
    <q-header class="nav-color">
      <q-btn no-caps flat to="/" class="q-my-sm q-ml-md">spacestagram</q-btn>
      <q-btn
        no-caps
        flat
        href="https://github.com/richardmarquez2001/spacestagram"
        class="q-my-sm"
        >view on github</q-btn
      >
    </q-header>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderBar',
});
</script>

<style lang="scss" scoped>
.nav-color {
  background-color: $secondary;
}
</style>
