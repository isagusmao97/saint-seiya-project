<template>
    <q-page class="flex flex-center">
         <div class="text-center text-h2 font" style="margin-top:50px">Sanctuary Saga</div>
         <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">After being wounded by a poisoned arrow, Saori must be saved by his Bronze Saints. 
            Seyia, Shiryu, Hyoga and Shun thus start a battle against time to reach the Grand Master
            in less than twelve hours, so that the leader can remove the arrow from Athena’s reincarnation chest.</div>
        <div class="text-center text-h2 font" style="margin-top:60px">Golden Knights</div>
        <div class="text-center text-body2 text-justify text-weight-light q-pa-xl">The Gold Saints are the 12 most powerful warriors among the Saints of Athena.
            Invincible since mythological ages, they wear the 12 Golden Cloths, corresponding to the constellations of the zodiac.</div>

        <div>
            <div class="q-pa-xl row items-center q-gutter-lg q-ml-xl">
                 <q-card class="my-card">
                   <img src="../assets/imagens/mu.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="MU - ARIES" @click="card1 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/aldebaran.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="ALDEBARAN - TAURUS" @click="card2 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/saga.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SAGA - GEMINI" @click="card3 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/deathmask.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="DEATHMASK - CANCER" @click="card4 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/aiolia.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="AIOLIA - LEO" @click="card5 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/shaka.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SHAKA - VIRGO" @click="card6 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/dohko.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="DOHKO - LIBRA" @click="card7 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/milo.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="MILO - SCORPIO" @click="card8 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/aiolos.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="AIOLOS - SAGITTARIUS" @click="card9 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/shura.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="SHURA - CAPRICORN" @click="card10 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/camus.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="CAMUS - AQUARIUS" @click="card11 = true"/>
                    </q-card-section>
                </q-card>

                <q-card class="my-card">
                   <img src="../assets/imagens/afrodite.jpg">

                    <q-card-section align="center">
                        <q-btn flat  style="color: #ECB905; margin-top:10px" class="font" label="APHRODITE - PISCES" @click="card12 = true"/>
                    </q-card-section>
                </q-card>
            </div>

            <q-dialog v-model="card1">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        MU (ARIES)
                        </div>
                        <div class="body-text2 text-justify font">Mu is the 20th century Aries Gold Saint who protects the House of Aries in Sanctuary. 
                            Skilled in Armor Restoration, he is the one who repairs the Bronze Armors of Seiya and the others before the Battle of the 
                            Twelve Houses of the Zodiac.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card2">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        ALDEBARAN (TAURUS)
                        </div>
                        <div class="body-text2 text-justify font">Aldebaran is the 20th century Gold Saint of the Bull, who protects the House of Bull in the Sanctuary. 
                        Endowed with extraordinary resistance, not even Seiya's Meteor of Pegasus was able to damage his body.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card3">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        SAGA (GEMINI)
                        </div>
                        <div class="body-text2 text-justify font">Gemini Saga is Kanon's older twin brother, destined to become the Gemini Gold Saint of the 20th century, 
                        who was formerly regarded as the next successor to the Grandmaster, having all the characteristics necessary for the post - humanity, skill and physical strength.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card4">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        DEATHMASK (CANCER)
                        </div>
                        <div class="body-text2 text-justify font">Cancer Deathmask is the Gold Saint of Cancer and protector of the fourth house of the 20th century Zodiac. 
                        He loves fighting, killing and believes that, for a greater goal, some sacrifices are inevitable. The walls of the House of Cancer are adorned with the faces 
                        of people who have been killed to this day by Death Mask.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card5">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        AIOLIA (LEO)
                        </div>
                        <div class="body-text2 text-justify font">Brother of Aiolos. Despite his explosive personality, he has a pure heart that quickly distinguishes the righteous, 
                        so he was one of the first Gold Saints to recognize Athena's authority. As his brother Aiolos was condemned as a traitor, he tries to clear the family name by 
                        swearing allegiance to the Grandmaster, even willingly participating in the extermination of the Bronze Saints.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card6">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        SHAKA (VIRGO)
                        </div>
                        <div class="body-text2 text-justify font">Shaka de Virgo is the 20th Century Virgo Gold Saint, who protects the House of Virgo in the Sanctuary. 
                        Considered as the reincarnation of Buddha, he has a power of observation that allows him to know the truth hidden under appearances. The power to 
                        come and go in time and space impresses even other Gold Saints. He has a heroic death under the destructive "Exclamation of Athena", created by Saga, 
                        Shura and Camus, but he submitted to this blow in order to accompany Athena in the Worlds of the Dead.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card7">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        DOHKO (LIBRA)
                        </div>
                        <div class="body-text2 text-justify font">Libra Dohko was a legendary and renowned Gold Saint of the Sanctuary of Athena for having fought and survived 
                        the Holy War against Hades in the 18th century alongside his battle partner, Shion of Aries. After the end of the conflict and being tasked by Athena to 
                        watch over the seal that imprisoned the specter of the Emperor of the Dead, Dohko was secluded in the Five Ancient Peaks of Rozan until the 20th century, 
                        a period when he came to be venerated as Elder Master and, while keeping his vigil, trained Shiryu, who would become the Dragon Bronze Saint.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card8">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        MILO (SCORPIO)
                        </div>
                        <div class="body-text2 text-justify font">Milo de Scorpio was, in the 20th century, the Gold Saint of Scorpio who protected the House of Scorpio in the 
                        Sanctuary. He was a loyal Knight to the Sanctuary, initially obeying the Grandmaster's orders, although there were occasions when he would refuse to 
                        undertake specific missions out of pride, a sentiment that determined the direction of their conversations initially, having become considerably more 
                        humble afterwards. of his battle against Swan Hyoga.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card9">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        AIOLOS (SAGITTARIUS)
                        </div>
                        <div class="body-text2 text-justify font">Sagittarius Aiolos is the Sagittarius Gold Saint of the 20th century. 
                        Before he died, 13 years ago, he gave Athena as a baby and her Gold Cloth to the care of Mitsumasa Kido, who was traveling through Greece. 
                        Since then, Aiolos came to be considered a traitor in the Sanctuary, which was commanded by Saga in the guise of Grandmaster.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card10">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        SHURA (CAPRICORN)
                        </div>
                        <div class="body-text2 text-justify font">Capricorn Shura is the Gold Saint who protects the House of Capricorn. Shura considers himself the most faithful knight to Athena, 
                        but his excessive loyalty to the Sanctuary ended up making him commit a series of mistakes. His main move is Excalibur, in which he focuses his cosmos into a slashing blast 
                        of energy, like a sword. This blow has a very strong concentrated intensity, and comes out at the speed of light.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card11">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        CAMUS (AQUARIUS)
                        </div>
                        <div class="body-text2 text-justify font">Aquarius Camus is the Gold Saint who protects the House of Aquarius in the Sanctuary. In the manga, he trained little Hyoga and Isaak 
                        for six years in the icy lands of eastern Siberia. was forced to fight Hyoga at the Sanctuary. Camus is a very powerful knight, with the ability to lower the temperature and 
                        cast Diamond Dust with great ease. The "Aurora Execution" is his most powerful secret move, which emits a cold near absolute zero, and was inherited by Hyoga.</div>
                    </div>
                    </q-card-section>
                </q-card>
            </q-dialog>

            <q-dialog v-model="card12">
                <q-card class="my-card-description">
                    <q-card-section>
                    <div class="items-center">
                        <div class="text-body2 text-center font" style="margin-bottom:10px">
                        APHRODITE (PISCES)
                        </div>
                        <div class="body-text2 text-justify font">Aphrodite of Pisces is the Gold Saint of Pisces and protector of the last House of the Zodiac of the 20th century. 
                        Uses variations of moves with roses, such as Royal Devil Roses. His idea is that only a supreme power can maintain peace and order in the world, even if that
                        power comes from evil. Therefore, even though he was aware that the Grand Master served evil, he ended up obeying his orders and killing Daidalos, Shun's master. 
                        His attitude may not be the most exemplary for a Knight, but his purpose to keep the peace on Earth is equal to that of any Knight.</div>
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
      card8: ref(false),
      card9: ref(false),
      card10: ref(false),
      card11: ref(false),
      card12: ref(false),
      
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