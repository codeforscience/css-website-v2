var Markdown = require('markdown-it')
var raw = require('choo/html/raw')

var md = new Markdown({
    html: true,
    linkify: true,
    typographer: true
  })

module.exports = content

function content (str) {
  return raw(md.render(str))
}
