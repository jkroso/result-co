
# result-co

  Turn a generator function back into a normal one but where any `yield`ed values are awaited before continuing. Promises, thunks, etc.. get you closer to blocking symantics but often the syntax they require obscures that. This can help get your syntax a little closer to the blocking version too.

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

  `co` takes a generator function and returns a normal one.

```js
co(function*(a, b, c){
  return (yield a) + (yield b) + (yield c)
})(1,2,3) // => 6
```