<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
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

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>