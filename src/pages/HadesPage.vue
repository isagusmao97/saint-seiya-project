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

            </div>
        </div>
        
    </q-page>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 220px
  

.my-card-description
  width: 500px
</style>