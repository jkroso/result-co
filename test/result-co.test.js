
var Result = require('result')
var co = require('..')

function delay(value){
  var result = new Result
  setTimeout(function(){
    if (value instanceof Error) result.error(value)
    else result.write(value)
  }, Math.random() * 10)
  return result
}

it('should return a value', function(){
  co(function*(){ return 1 })().should.eql(1)
})

it('should handle yielded values', function(done){
  var result = Result.wrap(1)
  co(function*(){ return (yield result) })().should.equal(1)
  co(function*(){ return (yield 1) })().should.equal(1)
  co(function*(){ return (yield delay(1)) })().then(function(n){
    n.should.equal(1)
  }).node(done)
})

it('should return a "failed" result if errors aren\'t handled' , function(done){
  var error = new Error('boom')
  co(function*(){ throw error })().read(null, function(e){
    e.should.equal(error)
    done()
  })
})

it('should put error back inside the generator', function(done){
  var error = new Error('boom')
  co(function*(){
    try {
      yield delay(error)
    } catch (e) {
      e.should.equal(error)
    }
  })().node(done)
})

it('should pass in arguments', function(){
  co(function*(a, b, c){
    return (yield a) + (yield b) + (yield c)
  })(1,2,3).should.equal(6)
})

it('should preserve context', function(done){
  var context = {}
  co(function*(){
    this.should.equal(context)
    yield delay(1)
    this.should.equal(context)
  }).call(context).node(done)
})
