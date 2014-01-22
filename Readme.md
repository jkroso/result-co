
# result-co

  turn a generator function back into a normal one

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

  turn a generator function back into a normal one

```js
co(function*(a, b, c){
  return (yield a) + (yield b) + (yield c)
})(1,2,3) // => 6
```