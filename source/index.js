// styles
require('./design')

var choo = require('choo')

var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.use(require('enoki/choo')())
app.use(require('./plugins/scroll'))
app.use(function (state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    state.toggleActive = null
    emitter.on('toggle', (id) => {
      emitter.emit('log:info', `toggle ${id}`)
      if (state.toggleActive === id) {
        state.toggleActive = null
        emitter.emit('render')
        return
      }
      state.toggleActive = id
      emitter.emit('render')
    })
  })
})
app.route('*', require('./views/wrapper'))

// start
if (!module.parent) app.mount('body')
else module.exports = app
