# smitter

smitter is a small 250 byte event emitter.

## Installation

```
npm i smitter
```

## Usage

```js
import smitter from 'smitter'

// create an instance
let emitter = smitter()

// subscribe to an event called 'hi'
let off = emitter.on('hi', x => {
  console.log(`hi ${x}!`)
})

// fire an event called 'hi' and pass data to the handler
emitter.emit('hi', 'mom') // 'hi mom!' logged to console

// remove subscription
off()

emitter.emit('hi', 'dad') // nothing
```

### Typescript

If you're using Typescript, you can strictly type your events and handlers.

```typescript
let emitter = smitter<{
  hi: { name: string }
}>()

// strictly typed payloads
emitter.on('hi', ({ name }) => {})

// [E] Argument of type 'string' is not assignable to parameter of type { name: string }
emitter.emit('hi', 'mom')

// OK
emitter.emit('hi', { name: 'mom' })
```

## License

[MIT License](https://opensource.org/licenses/MIT) © [Self Aware](https://selfaware.studio)
