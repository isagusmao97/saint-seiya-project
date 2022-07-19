<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar >
        <q-toolbar-title class="text-center">
          Saint Seiya
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
   <div>
      <div class="q-pa-none" style="width:100%">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="../assets/imagens/imagem02.jpg" />
      <q-carousel-slide :name="2" img-src="../assets/imagens/imagem01.jpg" />
      <q-carousel-slide :name="3" img-src="../assets/imagens/imagem03.jpg" />
    </q-carousel>
  </div>
    </div>   
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent,ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',

  setup () {

    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>

<style lang="sass" scoped>
.q-carousel
  width:100%
  height: 600px
</style>