import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { smitter } from '../'

class Mock {
  calls = []
  fn = (...args) => this.calls.push(args)
}

let instance = smitter()

test('smitter', () => {
  assert.type(smitter, 'function')  
  assert.type(instance, 'object')
  assert.type(instance.emit, 'function')
  assert.type(instance.on, 'function')
})

test('add handler and emit data', () => {
  let handler = new Mock()
  instance.on('foo', handler.fn)
  instance.emit('foo', 42)
  assert.equal(handler.calls.length, 1)
  assert.equal(handler.calls[0][0], 42)
})

test('remove handler', () => {
  let handler = new Mock()
  let remove = instance.on('bar', handler.fn)
  instance.emit('bar')
  remove()
  instance.emit('bar')
  assert.equal(handler.calls.length, 1)
})

test('emit: with invalid type', () => {
  instance.emit('baz')
})

test.run()