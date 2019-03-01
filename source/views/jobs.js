var html = require('choo/html')
var renderPage = require('../components/page')
var content = require('../components/content')

module.exports = view

function view (state, emit) {
  const jobs = state.page().v().jobs
  return html`
    <section class="min-vh-100 bl b--black-10 flex flex-column black-70">
      <div class="ph3 ph5-l pt2">
        ${renderPage(state.page().v(), emit)}
      </div>
      <div class="">
        ${Object.values(jobs).map(jobView)}
      </div>
      <div class="ph3 ph5-l pt3 pb5">
        <hr>
        ${content(state.page().v('footer'))}
      </div>
    </section>
  `

  function jobView (props, id) {
    const open = state.toggleActive === `job-${id}`
    return html`
      <article class="ph3 ph5-l pb4">
        <h3>${props.title}</h3>
        <p class="f4 lh-copy">
          ${content(props.shortDesc)}
          ${!open ? readMore() : ''}
        </p>
        <div id="job-${id}" class="lh-copy f5 ${open ? 'db' : 'dn'}">
          ${content(props.fullDesc)}
        </div>
      </article>
    `

    function readMore () {
      return html`
          <a class="f5 no-underline black bg-animate hover-bg-black
              hover-white dib items-center pa2 ba border-box"
              data-toggle="job-${id}"
              href="" onclick=${onClick}>
            <span class="pr1">${open ? 'Close' : 'Read More'}</span>
            <svg class="w1 v-mid" data-icon="chevronRight" viewBox="0 0 32 32" style="fill:currentcolor">
              <title>chevronRight icon</title>
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"/>
            </svg>
          </a>
      `
    }
  }

  function onClick (e) {
    emit('toggle', e.currentTarget.getAttribute('data-toggle'))
  }
}
