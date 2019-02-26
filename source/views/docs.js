var html = require('choo/html')
var renderPage = require('../components/page')

module.exports = view

function view (state, emit) {
  const files = state.page().v().files
  console.log(files)
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <div class="ph3 ph5-l">
        ${renderPage(state.page().v(), emit)}
      </div>
      <div class="f4 ph3 ph5-l pb4 pb5-ns pt2">
        ${Object.values(files).map((file) => {
          return html`<a target="_blank" rel="noopener noreferrer" class="db" href="${file.path}">${file.name}</a>`
        })}
      </div>
    </section>
  `
}
