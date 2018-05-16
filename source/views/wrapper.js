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
      ${renderNavigation(state, emit)}
      <main class="relative lh-copy">
        ${view(state, emit)}
      </main>
    </body>
  `
}

function renderLoading (state, emit) {
  return html`
    <body>
      ${renderNavigation(state, emit)}
      <div class="loading"></div>
    </body>
  `
}

function renderNotFound (state, emit) {
  return html`
    <body>
      ${renderNavigation(state, emit)}
      <div class="notfound">
        Page not found
      </div>
    </body>
  `
}

function renderNavigation (state, emit) {
  return html`
    <nav class="fixed left-0 vh-100 pv4 ph4 measure-narrow">
      <div class="tc">
        <img src="/assets/Blue-logo-black-text-stacked.png" class="" title="${state.page().v('title')}">
      </div>
      <h3 class="f5 f4-ns fw4 bt b--gray pv3">
        ${state.page().v('description')}
      </h3>

      <div class="dtc v-mid w-100 tc">
        <a class="link dim black-70 f5 f4-ns fw6 dib mr3" href="/services" title="About">Services</a>
        <a class="link dim black-70 f5 f4-ns fw6 dib mr3" href="#" title="Store">Blog</a>
        <a class="link dim black-70 f5 f4-ns fw6 dib" href="#" title="Contact">Join Us</a>
      </div>

      <footer class="absolute bottom-0 mb4 black-70">
        <a href="mailto:hi@codeforscience.org" class="link fw6 f4 dim black-70 lh-solid">hi@codeforscience.org</a>
        <a href="http://twitter.com/codeforsociety" class="dim black-50 mt1 f5 db b ttu lh-solid">@codeforsociety</p>
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
