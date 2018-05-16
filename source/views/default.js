var html = require('choo/html')
var renderPage = require('../components/page')

module.exports = view

function view (state, emit) {
  return html`
    <div>
      ${renderPage(state.page().v(), emit)}
    </div>
  `
}
