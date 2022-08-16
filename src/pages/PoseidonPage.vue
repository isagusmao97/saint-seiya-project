<template>
    <q-page>
        <div class="text-center text-h2 font" style="margin-top:50px">Poseidon Saga</div>
        <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">The Greek god returns incarnated in Julian Solo and he ends up kidnapping Saori,
            taking her to the dephs of the Mediterranean Sea, which is where the god’s sanctuary is located. He explains to Athena’s reincarnation the reason for her plans, 
            which is to destroy the Earth. And now, the Knights must find a way to save the goddess of wisdorn and not let her 
            die in Poseoidon’s hands. </div>
        <div class="text-center text-h2 font" style="margin-top:60px">Marina’s Knight</div>
        <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">Unlike the Bronze Saints, who are chosen from among several candidates and qualified after hard training, 
        the Marinas are sea warriors chosen by the Scale itself. The profile of who is chosen to be a Marina is varied - from music students to former candidates for Knight of Athena. 
        When they envision Poseidon's resurrection, they gather at the Undersea Temple to receive his Scales. Scales is the name for the armor used by the Marinas, warriors charged with the 
        protection of Poseidon. It is said that the Scales of the Seven Marine Generals are as powerful as the Armor of the Gold Saints.</div>


        <div>
            <div class="q-pa-xl row items-center q-gutter-lg q-ml-xl">
                <q-card class="my-card">
                   <img src="../assets/imagens/bian.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="BIAN - SEAHORSE" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/io.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="IO - SCYLLA" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/krishna.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="KRISHNA - CHRISAOR" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/kasa.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="KASA - LYMNADES" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/isaak.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="ISAAK - KRAKEN" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/sorento.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SORENTO - SIRENE" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/kanon.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="KANON - SEADRAGON" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/thetis.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="THETIS - MERMAID" @click="card1 = true"/>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

// <script>
// import { ref } from 'vue'

// export default {
//   setup () {
//     return {
//       card1: ref(false),
//       card2: ref(false),
//       card03: ref(false),
//       card04: ref(false),
//       card05: ref(false),
//       card06: ref(false),
//       card07: ref(false),
//       card08: ref(false)
      
//     }
//   }
// }
// </script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 220px
  

.my-card-description
  width: 500px
</style>