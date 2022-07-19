<template>
    <q-page >
        <div class="text-center text-h2 font" style="margin-top:50px">SAINT SEIYA</div>
    <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">It all started in late 1985 when the author, Masami Kurumada, started the series originally called Saint Seiya. 
      The first appearance took place on November 19, 1985, in an advertisement on the pages of issue 51/85 of the 
      Weekly Shonen Jump magazine (a kind of weekly magazine published by Shueisha). 
      But it was in issue 01/86, published on December 3, 1985, that the first chapter was published. 
      Each magazine had approximately 400 pages, with several stories (most were in black and white) and the chapters 
      of Knights of the Zodiac were published until the year 1990.</div>
      <div  class="q-mb-xl" align="center">
        <q-btn flat  style="color: #8C7ACE; margin-top:10px" label="Main Characters" to="/pages/maincharacters"/>
      </div>

      <div class="q-pa-md row q-gutter-md flex-center">
    <q-card class="my-card">
      <img src="../assets/imagens/santuario.jpg">

      <q-card-section align="center">
        <div class="text-h6 font">Sanctuary Saga</div>
        <q-btn flat  style="color: #8C7ACE; margin-top:10px" label="VER MAIS"  />
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="../assets/imagens/posseidon.jpg">

      <q-card-section align="center">
        <div class="text-h6 font">Poseidon Saga</div>
        <q-btn flat  style="color: #8C7ACE; margin-top:10px" label="VER MAIS"  />
      </q-card-section>
    </q-card>

    <q-card class="my-card">
      <img src="../assets/imagens/hades.jpg">

      <q-card-section align="center">
        <div class="text-h6 font">Hades Saga</div>
        <q-btn flat  style="color: #8C7ACE; margin-top:10px" label="VER MAIS"  />
      </q-card-section>
    </q-card>
    </div>
    </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>