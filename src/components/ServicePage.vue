<script setup>
  /*
   * @MICROFRONTEND
   *
   * @rc-ses aplinkos teikiamo funkcionalumo import'ai apibrėžti
   * src/@types. Vėliau vietoje tokio formato jie bus pateikiami
   * kaip npm biblioteka.
   */
  import { addToCart } from '@rc-ses/self-service-portal-ui';
  import { redirectToLanding } from '@rc-ses/self-service-portal-ui-root';

  import UserDetailsSection from './UserDetailsSection.vue';

  const serviceName = 'Vue paslauga #2';
</script>

<template>
  <div>
    <user-details-section />

    <span class="text-h6" style="margin-right: .5rem; vertical-align: sub;">{{ serviceName }}</span>
      <!-- @MICROFRONTEND-->
      <!-- `addToCart` metodo kvietimas, kurį eksportuoja -->
      <!-- single-spa modulis @rc-ses/self-service-portal-ui -->
    <v-btn
      type='button'
      color="primary"
      elevation="0"
      v-on:click="() => addToCart(serviceName)"
    >Pridėti paslaugą į krepšelį</v-btn>
  </div>

    <!-- @MICROFRONTEND-->
    <!-- `redirectToLanding` metodo kvietimas, kurį eksportuoja-->
    <!-- single-spa modulis @rc-ses/self-service-portal-ui-root-->

  <div>
    <v-btn
      type='button'
      color="primary"
      variant='text'
      @click="() => redirectToLanding()"
    >Grįžti į titulinį</v-btn>
  </div>
</template>
