export type EventType = string

export type Handler = (payload: any) => void

export type HandlerMap = {
  [key: EventType]: Handler[]
}

export interface Smitter {
  emit(type: EventType, payload?: any): void
  on(type: EventType, handler: Handler): () => void
}

/**
 * Smitter: A small emitter.
 * @name smitter
 * @returns {Smitter}
 */
export let smitter = (): Smitter => {
  let all: HandlerMap = {}

  return {
    /**
     * Fire all handlers for the provided type.
     *
     * @param {EventType} type The event type to fire
     * @param {any} payload Optionally pass arbitrary data to each handler
     * @memberOf smitter
     */
    emit(type: EventType, payload?: any): void {
      all[type] ? all[type].map(handler => handler(payload)) : []
    },

    /**
     * Add an event handler for the provided type.
     *
     * @param {EventType} type The name of the event to register
     * @param {Handler} handler Function to fire for the given event type
     * @returns {Function} Function to remove the event handler
     * @memberOf smitter
     */
    on(type: EventType, handler: Handler): () => void {
      all[type] = (all[type] || []).concat(handler)
      let removed = false
      return () => {
        if (!removed) {
          removed = true
          all[type].splice(all[type].indexOf(handler), 1)
        }
      }
    },
  }
}
