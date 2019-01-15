var html = require('choo/html')
var renderPage = require('../components/page')

module.exports = view

function view (state, emit) {
  const files = state.page().v().files
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <div class="ph3 ph5-l pb4 pb5-ns pt2">
        ${renderPage(state.page().v(), emit)}
      </div>
      <div class="">
        ${Object.values(files).map((file) => {
          return html`<a class="db" href="${file.url}">${file.name}</a>`
        })}
      </div>
    </section>
  `
}
