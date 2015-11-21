
/**
 * Hydro configuration
 *
 * @param {Hydro} hydro
 */

module.exports = function(hydro) {
  require('babel-core/register')({
    extensions: ['.js']
  })
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
