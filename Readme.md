
# result-co

  Turn a generator function back into a normal one but where any `yield`ed values are awaited before continuing. Promises, thunks, etc.. get you closer to blocking semantics but often the syntax they require obscures that. This helps get your syntax even closer to the blocking version.

## Installation

With your favorite package manager:

- [packin](//github.com/jkroso/packin): `packin add result-co`
- [component](//github.com/component/component#installing-packages): `component install jkroso/result-co`
- [npm](//npmjs.org/doc/cli/npm-install.html): `npm install result-co`

then in your app:

```js
var co = require('result-co')
```

## API

### co(generator)

  `co` takes a generator function and returns a normal one. Except it will have the special ability to unwrap/await results by yielding them.

```js
var Result = require('result')
var wrap = Result.wrap
var add = co(function*(a, b){
  return (yield a) + (yield b)
})
add(1,2) // => 3
add(wrap(1), 2) // => 3
var one = new Result
var three = add(one, 2)
three // => new Result
one.write(1)
three // => wrap(3)
```