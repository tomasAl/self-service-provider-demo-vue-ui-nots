import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import 'vuetify/styles'
import { createVuetify} from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          surface: '#333333',
          primary: '#3199b4',
          secondary: '#45ba8a',
        }
      }
    }
  }
});

import App from './App.vue';
import router from './router';

/*
 * @MICROFRONTEND
 *
 * Aplikacija turi būti sukuriama naudojant `singleSpaVue` metodą.
 *
 * Pagrindinis aplikacijos komponentas pateikiamas kaip pirmas
 * parametras `h` metodui. `use` naudojimo pavyzdžiai pateikiami
 * `handleInstance` callback'e.
 */
const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {});
    },
  },
  handleInstance(app) {
    app.use(router);
    app.use(vuetify);
  },
});

/*
 * @MICROFRONTEND
 *
 * single-spa pateikiami lifecycle hook'ai.
 */
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
