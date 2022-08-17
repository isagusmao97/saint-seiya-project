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
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="IO - SCYLLA" @click="card2 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/krishna.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="KRISHNA - CHRISAOR" @click="card3 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/kasa.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="KASA - LYMNADES" @click="card4 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/isaak.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="ISAAK - KRAKEN" @click="card5 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/sorento.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SORENTO - SIRENE" @click="card6 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/kanon.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="KANON - SEADRAGON" @click="card7 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/thetis.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="THETIS - MERMAID" @click="card8 = true"/>
                    </q-card-section>
                </q-card>
            </div>

            <q-dialog v-model="card1">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        BIAN (SEAHORSE)
                        </div>
                        <div class="body-text2 text-justify font">It is the 20th-century Seahorse Marina and one of the most powerful among the seven General Marinas. 
                        Fought against Seiya to protect the North Pacific Ocean Pillar.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card2">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        IO (SCYLLA)
                        </div>
                        <div class="body-text2 text-justify font">One of the Marine Generals who protected the Pillar of the South Pacific Ocean. Scylla or Scylla was a 
                        legendary sea monster with the upper half of its body the image of a beautiful virgin and, the lower half, six demonic beasts. Just like legend, 
                        Io hides the powers of eagle, wolf, bee, serpent, bat, and bear within her Scale.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card3">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        KRISHNA (CHRISAOR)
                        </div>
                        <div class="body-text2 text-justify font">Krishna of Chrysaor is one of the Marine Generals, protector of the Indian Ocean Pillar. 
                        He deeply identifies with Poseidon's earth-cleansing ideal. He firmly believed that this would serve to end the dark age.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card4">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        KASA (LYMNADES)
                        </div>
                        <div class="body-text2 text-justify font">Kasa of Lymnades is one of the Marine Generals, charged with protecting the Southern Ocean Pillar. 
                        Its Scale represents a water monster from Greek mythology. He has the power to read a person's mind and find out who their most loved being is,
                        imitating him not only physically but also psychologically.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card5">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        ISAAK (KRAKEN)
                        </div>
                        <div class="body-text2 text-justify font">Isaak of Kraken is one of the Marine Generals who protected the Arctic Ocean Pillar. 
                        He was one of Camus' disciples at the same time as Hyoga, but ends up disappearing after being caught by a strong current saving Hyoga's life. 
                        Rescued by Poseidon, he became a Marina.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card6">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        SORENTO (SIRENE)
                        </div>
                        <div class="body-text2 text-justify font">One of the Marine Generals. His flute deprives the enemy of his strength and his power was able to corner 
                        even Aldebaran. He protected the South Atlantic Ocean Pillar, but was eventually defeated by Shun. Owner of a pure heart, he believed that purifying 
                        the earth's face was the way for Poseidon to create utopia on earth.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card7">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        KANON (SEADRAGON)
                        </div>
                        <div class="body-text2 text-justify font">Saga's younger twin brother. Worried about the evil in his heart, Saga imprisons him in the cliff dungeon of Cape Sunion. 
                        By a fluke of fate, Kanon ends up freeing the soul of Poseidon, the Emperor of the Seas who had been sealed by Athena. From there, he passed himself off as 
                        General Marina of Sea Dragon, commanding the other Marinas with plans to dominate both land and sea.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card8">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        THETIS (MERMAID)
                        </div>
                        <div class="body-text2 text-justify font">She suddenly appeared in front of Julian Solo when he turned 16, in order to induce him to awaken as Emperor of the Seas. 
                        After that, she began to work as her advisor, secretarial work on tasks such as taking messages to Athena. In the Undersea Temple, she shows all her agility to Kiki, 
                        but ends up defeated by Shaina's "Thunder Claws", who came to bring the Libra Armor to the Knights.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>
        </div>
    </q-page>
</template>

 <script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      card1: ref(false),
      card2: ref(false),
      card3: ref(false),
      card4: ref(false),
      card5: ref(false),
      card6: ref(false),
      card7: ref(false),
      card8: ref(false)
      
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 220px
  

.my-card-description
  width: 500px
</style>