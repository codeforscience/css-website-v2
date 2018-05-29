var html = require('choo/html')
var contact = require('../components/contact')

module.exports = view

function view (state, emit) {
  return html`
    <section class="dt w-100 vh-100 bl b--black-10 black-70">
      ${contact({
        divClass: `tc v-mid dtc w-100 h-100 bg-lightest-blue`,
        id: 'contact'
      })}
    </section>
  `
}
