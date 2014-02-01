
var map = require('result').when

module.exports = co

/**
 * turn a generator function back into a normal one
 *
 * @param {Generator} Generator
 * @return {Function}
 */

function co(Generator){
  return function(){
    var gen = Generator.apply(this, arguments)
    return map(undefined, success, failure)

    function success(value){ return step(gen.next (value)) }
    function failure(value){ return step(gen.throw(value)) }
    function step(state){
      if (state.done) return state.value
      return map(state.value, success, failure)
    }
  }
}
