<template>
  <q-layout>
    <header-bar />
      <router-view />
    <Footer />
  </q-layout>
</template>

<script lang="ts">

import HeaderBar from 'src/components/header/HeaderBar.vue'
import { defineComponent } from 'vue'
import Footer from '../components/footer/Footer.vue'

export default defineComponent({
  components: { Footer, HeaderBar },
  name:'MainLayout',

})
</script>
