<template>
  <q-layout>
    <header-default />
      <router-view />
    <Footer />
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Footer from '../components/footer/Footer.vue'
import HeaderDefault from '../components/header/HeaderDefault.vue'

export default defineComponent({
  components: { HeaderDefault, Footer },
  name:'MainLayout',

})
</script>
