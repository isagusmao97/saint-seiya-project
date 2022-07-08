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
    <div class="text-center text-h2 font" style="margin-top:50px">SAINT SEIYA</div>
    <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">It all started in late 1985 when the author, Masami Kurumada, started the series originally called Saint Seiya. 
      The first appearance took place on November 19, 1985, in an advertisement on the pages of issue 51/85 of the 
      Weekly Shonen Jump magazine (a kind of weekly magazine published by Shueisha). 
      But it was in issue 01/86, published on December 3, 1985, that the first chapter was published. 
      Each magazine had approximately 400 pages, with several stories (most were in black and white) and the chapters 
      of Knights of the Zodiac were published until the year 1990.</div>
      <div align="center">
        <q-btn flat  style="color: #8C7ACE; margin-top:10px" label="Main Characters" />
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