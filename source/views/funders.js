var html = require('choo/html')
var renderPage = require('../components/page')

module.exports = view

function view (state, emit) {
  const sponsors = Object.values(state.page().v('sponsors'))

  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <div class="ph3 ph5-l pb4 pb5-ns pt2">
        ${renderPage(state.page().v(), emit)}
      </div>
      <div class="ph3 ph5-l pb4 pb5-ns pt2" id="sponsors">
        <div class="pv3-l pv1 flex flex-wrap">
          ${sponsors.map(sponsorImg)}
        </div>
      </div>
    </section>
  `

  function sponsorImg (props) {
    return html`
      <a class="pr5 mb3 db dib-l" href="${props.link}"><img src="${props.image}"></a>
    `
  }
}
