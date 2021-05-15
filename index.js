export default function smitter() {
  let all = {}

  return {
    emit(type, data) {
      return all[type] ? all[type].map((fn) => fn(data)) : []
    },
    on(type, fn) {
      all[type] = (all[type] || []).concat(fn)
      let removed = false
      return () => {
        if (!removed) {
          removed = true
          all[type].splice(all[type].indexOf(fn), 1)
        }
      }
    },
  }
}
