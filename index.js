import {when} from 'result'

/**
 * turn a generator function back into a normal one
 *
 * @param {Generator} Generator
 * @return {Function}
 */

export default Generator => function() {
  const gen = Generator.apply(this, arguments)
  const success = value => step(gen.next(value))
  const failure = error => step(gen.throw(error))
  const step = state =>
    state.done ? state.value : when(state.value, success, failure)
  return when(undefined, success, failure)
}
