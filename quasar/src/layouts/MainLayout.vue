<template>
  <q-layout class="bg-primary">
    <header-bar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import HeaderBar from 'src/components/header/HeaderBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { HeaderBar },
  name: 'MainLayout',
});
</script>
