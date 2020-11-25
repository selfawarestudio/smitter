# smitter

smitter is a small 124 byte event emitter.

## Installation

```
npm i smitter
```

## Usage

```js
// create an instance
let emitter = smitter()

let off = emitter.on('hi', (x) => {
  console.log(`hi ${x}!`)
})

emitter.emit('hi', 'mom') // 'hi mom!' logged to console

// remove subscription
off()

emitter.emit('hi', 'dad') // nothing
```

## License

[MIT License](https://opensource.org/licenses/MIT) © [Self Aware](https://selfaware.studio)
