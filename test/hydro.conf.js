
/**
 * Hydro configuration
 *
 * @param {Hydro} hydro
 */

module.exports = function(hydro) {
  hydro.set({
    suite: 'result-co',
    formatter: require('hydro-dot'),
    plugins: [
      require('hydro-chai'),
      require('hydro-bdd')
    ],
    chai: {
      chai: require('chai'),
      styles: ['should', 'expect', 'assert'],
      stack: true
    }
  })
}
