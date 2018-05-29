var html = require('choo/html')

var views = require('./')

module.exports = view

function view (state, emit) {
  var page = state.page

  // loading
  if (!state.site.loaded) return renderLoading(state, emit)
  // 404
  if (!page().v('url')) return renderNotFound(state, emit)
  // view
  var view = views[page().v('view')] || views.default

  // title
  var title = getTitle(state)
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)

  // template
  return html`
    <body>
      <main class="relative flex flex-wrap">
        ${renderNavigation(state, emit)}
        <div class="min-vh-100-l w-100 w-75-l lh-copy">
          ${view(state, emit)}
        </div>
      </main>
    </body>
  `
}

function renderLoading (state, emit) {
  return html`
    <body>
      <main class="relative flex">
        ${renderNavigation(state, emit)}
        <div class="loading">
        </div>
      </main>
    </body>
  `
}

function renderNotFound (state, emit) {
  return html`
    <body>
      <main class="relative flex">
        ${renderNavigation(state, emit)}
        <section class="dt w-75-l w-100 vh-100 bl b--black-10 black-70">
          <div class="tc v-mid dtc w-100 h-100 bg-lightest-blue">
            <h3 class="ttu tracked-tight f-subheadline">Page not found</h3>
          </div>
        </section>
      </main>
    </body>
  `
}

function renderNavigation (state, emit) {
  return html`
    <nav class="bb bn-l b--black-10 w-25-l w-100 vh-100-l pa3 pv4-l top-0 sticky-l">
      <div class="flex flex-column-l justify-between mw-100">
        <a href="/" class="dim flex-none-l items-center mw-100 mw5">
          <img src="/assets/Blue-logo-black-text-stacked.png" class=" mw-100-l mw5" title="${state.page().v('title')}">
        </a>
        <h3 class="f5 f4-ns fw4 bt b--gray pv3-l pv2 mw5 dn db-l">
          ${state.page('/').v('subtitle')}
        </h3>

        <div class="flex-grow pa3 pa0-l flex-none-l items-center">
          <a class="link black-70 f5 f4-ns fw6 dim mr3 mr4-ns" href="/collaborative-communities" title="Collaborative Communities">Hire Us!</a>
          <a class="link black-70 f5 f4-ns fw6 dim" target="_blank" href="https://blog.datproject.org/author/css/" title="CSS Blog">Blog</a>
        </div>
      </div>

      <footer class="absolute bottom-0 mb4 black-70 dn db-l">
        <a href="mailto:${state.page('/contact').v('email')}" class="link fw6 f4 dim black-70 lh-solid">${state.page('/contact').v('email')}</a>
        <a href="http://twitter.com/${state.page('/contact').v('twitter')}" target="_blank" class="dim black-50 mt1 f5 db b ttu lh-solid">${state.page('/contact').v('twitter')}</p>
      </footer>
    </nav>
  `
}

function getTitle (state) {
  var siteTitle = state.page('/').v('title')
  var pageTitle = state.page().v('title')

  return siteTitle !== pageTitle
    ? siteTitle + ' | ' + pageTitle
    : siteTitle
}
