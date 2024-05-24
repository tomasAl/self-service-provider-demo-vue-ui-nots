<script setup>

/*
 * @MICROFRONTEND
 *
 * @rc-ses aplinkos teikiamo funkcionalumo interfeisų import'ai
 * apibrėžti src/@types. Vėliau vietoje tokio formato jie bus pateikiami
 * kaip npm biblioteka.
 */
import { User, getUser } from "@rc-ses/self-service-portal-ui";

/*
 * @MICROFRONTEND
 *
 * `getUser` metodo kvietimas, bei User tipas, kuriuos eksportuoja
 * single-spa modulis @rc-ses/self-service-portal-ui
 */
const user = getUser();
</script>

<template>
  <v-expansion-panels>
    <v-expansion-panel :style="{ backgroundColor: 'transparent', border: 'none', boxShadow: 'unset', color: '#333' }">
      <v-expansion-panel-title :style="{ display: 'block', textAlign: 'center' }">
        Vartotojas:
        <v-btn
          type="button"
          color="primary"
          variant="text"
        >{{ user?.name }} {{ user?.last_name }}</v-btn>
      </v-expansion-panel-title>

      <v-expansion-panel-text>
        <v-container>
          <v-row v-for="(value, key) in user" :key="key" justify="space-around">
            <v-col :style="{ padding: '.25rem .5rem', textAlign: 'end'}">{{ key }}:</v-col>
            <v-col :style="{ padding: '.25rem .5rem', textAlign: 'start'}">{{ value }}</v-col>
          </v-row>
        </v-container>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
  .v-expansion-panel__shadow {
    box-shadow: unset !important;
  }
</style>
