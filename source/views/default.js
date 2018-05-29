var html = require('choo/html')
var renderPage = require('../components/page')

module.exports = view

function view (state, emit) {
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <div class="ph3 ph5-l pb4 pb5-ns pt2">
        ${renderPage(state.page().v(), emit)}
      </div>
    </section>
  `
}
