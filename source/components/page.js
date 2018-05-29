var html = require('choo/html')
var content = require('./content')

module.exports = entry

function entry (state, emit) {
  return html`
    <div class="pv3 lh-copy">
      <h2 class="f2 ttu fw5 measure-narrow">${state.title}</h2>
      <div class="f5 f4-ns fw4 measure">
        ${content(state.text)}
      </div>
    </div>
  `
}
