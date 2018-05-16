var html = require('choo/html')
var content = require('./content')

module.exports = entry

function entry (state, emit) {
  return html`
    <div class="">
      <ul>
        <li><b>${state.title}</b></li>
      </ul>
      <div class="copy copy-width">
        ${content(state.text)}
      </div>
    </div>
  `
}
