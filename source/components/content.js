var Markdown = require('markdown-it')
var raw = require('choo/html/raw')

var md = new Markdown()

module.exports = content

function content (str) {
  return raw(md.render(str))
}
