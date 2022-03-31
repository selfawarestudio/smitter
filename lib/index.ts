type EventMap = Record<string, any>
type EventType<T extends EventMap> = string & keyof T
type Handler<T> = (payload: T) => void

type HandlerMap = {
  [K in keyof EventMap]: Array<(p: EventMap[K]) => void>
}

interface Smitter<T extends EventMap> {
  on<K extends EventType<T>>(type: K, handler: Handler<T[K]>): () => void
  emit<K extends EventType<T>>(type: K, payload?: T[K]): void
}

/**
 * Smitter: A small emitter.
 * @name smitter
 * @returns {Smitter}
 */
export let smitter = <T extends EventMap>(): Smitter<T> => {
  let all: HandlerMap = {}

  return {
    /**
     * Fire all handlers for the provided type.
     */
    emit(type, payload): void {
      ;(all[type] || []).map(handler => handler(payload))
    },

    /**
     * Add an event handler for the provided type.
     */
    on(type, handler) {
      all[type] = (all[type] || []).concat(handler)
      let removed = false
      return () => {
        if (removed) return
        all[type].splice(all[type].indexOf(handler), 1)
        removed = true
      }
    },
  }
}
