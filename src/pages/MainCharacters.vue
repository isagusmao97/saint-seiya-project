<template>
    <q-page class="flex flex-center">
    <div class="text-center text-h2 font" style="margin-top:50px">Main Characters</div>
    <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">Saint Seiya, also known as Saint Seiya: Knights of The Zodiac 
    or simply Knights of the Zodiac, is a japanese manga series written 
    and illustrated by Masami Kurumada. The story follows five mystical
    warriors called the Saints who fight wearing sacred sets of armor 
    named “Cloths”, the designs of which derive from the various constellations
    the characters have adopted as their destined guardian symbols, and empowered
    by a mystical energy called “Cosmo”. 
    The Saints have sworn to defend the reincarnation of the Greek goddess 
    Athena in her battle against other Olympian gods who want dominate Earth.</div>

    <div>
        <div class="q-pa-md row items-center q-gutter-md">
        <q-card class="my-card">
        <img src="../assets/imagens/santuario.jpg">

      <q-card-section align="center">
        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="ATHENA" @click="card1 = true"/>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
        <img src="../assets/imagens/seiya.jpg">

      <q-card-section align="center">
        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SEIYA" @click="card2 = true"/>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
        <img src="../assets/imagens/shiryu.jpg">

      <q-card-section align="center">
        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SHIRYU" @click="card3 = true"/>
      </q-card-section>
    </q-card>

     <q-card class="my-card">
        <img src="../assets/imagens/shun.jpg">

      <q-card-section align="center">
        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SHUN" @click="card4 = true"/>
      </q-card-section>
    </q-card>

     <q-card class="my-card">
        <img src="../assets/imagens/hyoga.jpg">

      <q-card-section align="center">
        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="HYOGA" @click="card5 = true"/>
      </q-card-section>
    </q-card>

    <q-card class="my-card">
        <img src="../assets/imagens/ikki.jpg">

      <q-card-section align="center">
        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="IKKI" @click="card6 = true"/>
      </q-card-section>
    </q-card>
        </div>

    <q-dialog v-model="card1">
      <q-card class="my-card">
        <q-card-section>
          <div class="items-center">
            <div class="text-body2 text-center font" style="margin-bottom:10px">
              ATHENA (SAORI KIDO)
            </div>
            <div class="body-text2 text-justify font">Greek young girl adopted by
                millionaire Mitsumasa Kido 
                and raised as her granddaughter.
                Saori is the reincarnation of the
                goddess Athena in the 20th cen-
                tury, who always return to Earth 
                when humanity is threatened by
                evil.</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="card2" >
      <q-card class="my-card" >
        <q-card-section>
          <div class="items-center">
            <div class="text-body2 text-center font" style="margin-bottom:10px">
              PEGASUS SEIYA
            </div>
            <div class="body-text2 text-justify font">Seiya is the Bronze Horseman
                of the Pegasus constellation.
                As a child, Seiya was sepa-
                rated from his sister, Seika,
                to do knight training at the 
                Sanctuary of Athena, Greece.
                Thanks to the strict and 
                disciplinary methods of his
                mentor Marin, Seiya was able
                to cultivate enormous po-
                tential and conquer the 
                Pegasus Armor. 
                Motivated by the desire to find
                his sister, Seiya later discovers
                his destiny as a true Knight 
                of Athena.  </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="card3">
      <q-card class="my-card">
        <q-card-section>
          <div class="items-center">
            <div class="text-body2 text-center font" style="margin-bottom:10px">
              DRAGON SHIRYU
            </div>
            <div class="body-text2 text-justify font">Shiryu is the Bronze Horseman
                of Dragon constellation.
                Shiryu was trained in the Ancient
                Five Peaks of Rozan, China, by
                the Elder Master( Golden Knight ,
                Dohko of Libra) to earn the Dragon
                Armor. 
                His armor is known to have surprising 
                offensive and defensive properties, in 
                the respective forms of fist and shield.
                When Shiryu raises his cosmos to the 
                maximum, an image of a dragon appears
                on his back, which begins to disappear
                as the Dragon Knight is very close to 
                death. </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="card4">
      <q-card class="my-card">
        <q-card-section>
          <div class="items-center">
            <div class="text-body2 text-center font" style="margin-bottom:10px">
              ANDROMEDA SHUN
            </div>
            <div class="body-text2 text-justify font">Shun is the Bronze Horseman
                of the Andromeda 
                constellation.
                His armor is known to have 
                chains, which are used both 
                to attack and to defend. 
                Merciful, humble, and gentle
                Shun prefers to resolve conflicts 
                without spiling blood, only 
                engaging in combat when it is 
                really necessary or when his 
                almost infinite patience
                is exhausted. 
                Shun is the reincarnation of 
                Hades the Emperor of Hell and 
                has been linked to the God of 
                Dead since his childhood
                through a pendant in the form 
                of a silver pentagram with the incription
                “Yours Ever”.  </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="card5">
      <q-card class="my-card">
        <q-card-section>
          <div class="items-center">
            <div class="text-body2 text-center font" style="margin-bottom:10px">
              CYGNUS HYOGA
            </div>
            <div class="body-text2 text-justify font">Hyoga is the Bronze Horseman
                of the Cygnus constellation.
                Born in the small village called Kahoutek,
                in eastern Siberia. 
                His dominance over the Cosmos allows 
                him to create ice and snow at tempera-
                tures close to absolute zero. Being an Orthodox  
                Christian, Hyoga keeps a rosary with a
                cross that represents the Northern  
                Cross, the only memory left by his 
                mother  before her died. 
                Of a calm nature, he does not normally
                show his emotions, but on certains 
                occasions, a more sentimental side 
                emerges.</div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="card6">
      <q-card class="my-card">
        <q-card-section>
          <div class="items-center">
            <div class="text-body2 text-center font" style="margin-bottom:10px">
              PHOENIX IKKI
            </div>
            <div class="body-text2 text-justify font">Ikkis is the Bronze Horseman of Phoenix 
                constellation. Ikki has a personality com-
                pletely opposite of his younger brother
                Shun from Andrômeda: lonely, cold, and 
                agressive. He was trained on the Island 
                of the Queen of Death by Guilty, who 
                made him into a being driven by pure ha-
                tred and able to exercise all the power of
                Phoenix Armor. 
                Ikki has already triumphed in several ba-
                ttles and whenever he dies, he returns 
                to life even stronger, making him practically invincible.</div>
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
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 190px
</style>