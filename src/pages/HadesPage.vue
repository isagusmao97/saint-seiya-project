<template>
    <q-page>
        <div class="text-center text-h2 font" style="margin-top:50px">Hades Saga</div>
        <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">This saga, different from the previous sagas, is divided into three parts 
            the first call of Sanctuary that marks the beginning of the journey portraying the return of the specters of Hades to attack Athena in the sanctuary 
            where she is. The second called Hell, where the Bronze Knights go after Seiya who was taken by Rhadamanthys to the kingdom of the Underworld, and where 
            Athena is together with de Golden Knight of Virgo Shaka. The third part and the end of the arch is Elíseos. In this part, the Bronze 
            Knights need to deliver the armor to Athena and for that, they need to go through the Wailing Wall which is then destroyed by the 12 Golden Knights 
            helping Seiya and others to start the final battle against Hades in order to destroy his body end the Holy War.</div>
        <div class="text-center text-h2 font" style="margin-top:50px">Gods and Judges of Hell</div>

        <div>
            <div class="q-pa-xl row items-center q-gutter-lg q-ml-xl">
                <q-card class="my-card">
                   <img src="../assets/imagens/pandora.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="PANDORA" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                 <q-card class="my-card">
                   <img src="../assets/imagens/hypnos.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="HYPNOS" @click="card2 = true"/>
                    </q-card-section>
                </q-card>

                 <q-card class="my-card">
                   <img src="../assets/imagens/thanatos.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="THANATOS" @click="card3 = true"/>
                    </q-card-section>
                </q-card>

                 <q-card class="my-card">
                   <img src="../assets/imagens/rhadamanthys.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="RHADAMANTHYS" @click="card4 = true"/>
                    </q-card-section>
                </q-card>

                 <q-card class="my-card">
                   <img src="../assets/imagens/minos.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="MINOS" @click="card5 = true"/>
                    </q-card-section>
                </q-card>

                 <q-card class="my-card">
                   <img src="../assets/imagens/aiakos.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="AIAKOS" @click="card6 = true"/>
                    </q-card-section>
                </q-card>
            </div>

            <q-dialog v-model="card1">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        PANDORA
                        </div>
                        <div class="body-text2 text-justify font">Sister to the spirit of Hades in this life. She was an ordinary girl surrounded by her loving family, 
                        but upon being chosen by the spirit guardian gods of Hades, Thanatos and Hypnos, she was given the power to command the 108 Specters. From then on, 
                        she became the administrator of all events in the Underworld.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card2">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        HYPNOS
                        </div>
                        <div class="body-text2 text-justify font">Physically, Hypnos is exactly like his twin brother Thanatos, differing only in the golden color of his eyes and hair.
                        Unlike his brother, Hypnos is shown to be quite calm and controlled, never letting himself get carried away by anger.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card3">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        THANATOS
                        </div>
                        <div class="body-text2 text-justify font">Physically, Thanatos is exactly like his twin brother Hypnos, differing only in the silver color of his eyes and hair.
                        Thanatos demonstrates a much more impatient and explosive personality than his brother. He cannot stand human beings, seeing no value in them except as expendable servants. 
                        He is also overconfident of himself, enjoying "playing" with his victims before eliminating them.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card4">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        RHADAMANTHYS
                        </div>
                        <div class="body-text2 text-justify font">Rhadamanthys is the Specter of the Celestial Star of Ferocity, bending the Wyvern Surplice. 
                        He is one of the Three Underworld Tycoons. His actions appear to be motivated by emotional reasons, but he acts on his intuition, developed over years of 
                        battle; sometimes it even ignores orders to follow it. Has extreme loyalty to Hades and closeness to his subordinates.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card5">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        MINOS
                        </div>
                        <div class="body-text2 text-justify font">One of the Three Judges of the Underworld. As they have the same level of powers, he, 
                        Radamanthys and Aiacos are companions in battle, but also rivals with each other. He is calm and rational and always calculates the next step according to the situation.
                        Being the only one who survived of the three, he tries to stop Seiya and the Knights from heading to the Elysian Fields, but Hyoga stays to face him.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card6">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        AIAKOS
                        </div>
                        <div class="body-text2 text-justify font">Aiacos shows some sense of companionship, such as when he intervened in the fight between Radamanthys against Kanon, 
                        saving the Wyvern Judge from defeat. However, Aiacos mocks the poor performance of Radamanthys, insinuating that he could have lost had he not been rescued. 
                        As one of the three Judges of Hades' troops, Aiacos is confident of his strength, even though his overconfidence in his abilities was ultimately what led to his defeat.</div>
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