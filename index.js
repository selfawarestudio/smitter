export default function smitter() {
  let all = {}

  return {
    emit(type, data) {
      all[type] && all[type].map((fn) => fn(data))
    },
    on(type, fn) {
      all[type] = (all[type] || []).concat(fn)
      let executed = false
      return () => {
        if (!executed) {
          executed = true
          all[type].splice(all[type].indexOf(fn), 1)
        }
      }
    },
  }
}
