/*
 * @MICROFRONTEND
 *
 * Šiuo metu kompiliuojant single-spa aplikaciją galima naudoti
 * išskirtinai tik Webpack, ties Vite palaikymu pagal naujausią
 * informaciją vis dar yra dirbama iš single-spa kūrėjų pusės.
 *
 * Webpack konfigūracija kuriamą išplečiant single-spa pateikiamą
 * bazinę Webpack konfigūraciją, kuru sukuriama naudojant
 * `SystemJSPublicPathWebpackPlugin` plugin'ą. Žemiau pateikiamas
 * `configureWebpack` leidžia praplėsti bazinę konfigūraciją pagal poreikius.
 *
 * `externals` yra nurodomas projekto priklausomybių prefix'as,
 * kurios neturi būti įtraukiamos į sukompiliuotą kodą.
 * Visos priklausomybės su `@rc-ses` prefix'u, kurios yra
 * `src/@types` kataloge apibrėžia atitinkamų single-spa modulių
 * viešą eksportuojamą funkcionalumą, kurį galima "kviesti" bet
 * kur šioje aplikacijoje norint gauti arba pateikti informaciją
 * atitinkamiems moduliams.
 *
 * `output.libraryTarget` - privalomas single-spa nustatymas.
 *
 * `output.filename` nurodo galutinio sukompiliuoto failo pavadinimą,
 * kuris privalo atitikti pavyzdyje nurodytą konvenciją ir privalo
 * būti žinomas šakninio single-spa projekto kuratoriams.
 */
module.exports = {
  chainWebpack(config) {
    config.plugin('SystemJSPublicPathWebpackPlugin').tap((args) => {
      args[0].rootDirectoryLevel = 1;
      return args;
    });
  },
  configureWebpack: {
    externals: [/^@rc-ses\/.+/],
    output: {
      libraryTarget: 'system',
      filename: "rc-ses-self-service-provider-demo-vue-ui-nots.js"
    },
  },
  devServer: {
    host: "localhost"
  }
}
