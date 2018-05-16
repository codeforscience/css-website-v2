var html = require('choo/html')
var ov = require('object-values')
var content = require('../components/content')

module.exports = home

function home (state, emit) {
  var sectionClass = 'black-70 bt b--black-10 ph3 ph5-ns pb4 pb5-ns pt2'

  return html`
    <section class="bl b--black-10 flex flex-column black-70 w-75 absolute right-0">
      <div class="ph4 pv5 flex flex-wrap bg-light-gray">
        ${ov(state.page().v('domains')).map(domainPillar)}
      </div>
      <div class="${sectionClass}" id="about">
        <h2 class="f2 ttu fw5">About CS&S</h2>
        <div class="f5 f4-ns fw4 measure">
          ${content(state.page().v('about'))}
        </div>
      </div>
      <div class="${sectionClass} bg-lightest-blue" id="programs">
        <h2 class="f2 ttu fw5">CS&S Programs</h2>
        <div class="cf">
          ${ov(state.page().v('programs')).map(programText)}
        </div>
        <article class="pv2 w-100">
          <h2 class="f5 f4-ns fw6 mb3">Sponsored Projects</h2>
          <div class="flex flex-wrap justify-between pv2">
            ${ov(state.page().v('projects')).map(projectBox)}
          </div>
        </article>
      </div>
      <div class="${sectionClass}" id="sponsors">
        <h2 class="f2 ttu fw5">CS&S Supporters</h2>
        <div class="pv3 flex flex-wrap">
          ${ov(state.page().v('sponsors')).map(sponsorImg)}
        </div>
      </div>
      <div class="${sectionClass} bg-light-gray" id="people">
        <h2 class="f2 ttu fw5">People of CS&S</h2>
        <div class="pv3 flex flex-wrap">
          ${ov(state.page().v('team')).map(personBox)}
        </div>
      </div>
      <div class="${sectionClass}" id="people">
        <h2 class="f2 ttu fw5">CS&S Board</h2>
        <div class="pv3 flex flex-wrap">
          ${ov(state.page().v('board')).map(personBox)}
        </div>
      </div>
      <div class="${sectionClass} bg-lightest-blue">
        <h2 class="f2 ttu fw5">Join US</h2>
        <div class="pv3">
          something here
        </div>
      </div>
    </section>
  `
}

function programText (props) {
  return html`
    <article class="pv2 fl w-100 w-50-l pr0 pr2-l">
      <h2 class="f5 f4-ns fw6 mb3">${props.title}</h2>
      <p class="f5 f4-ns fw4 measure mt0">${props.description}</p>
    </article>
  `
}

function domainPillar (props) {
  return html`
    <div class="w-33 tc pv4 ph3">
      <img src="${props.image}" height="200" class="">
      <h3 class="f5 f4-ns fw6 black-70">${props.title}</h3>
      <hr class="mw3 bb bw1 b--black-70">
      <p class="f5 f4-ns fw4 black-70">
        ${props.description}
      </p>
    </div>
  `
}

function sponsorImg (props) {
  return html`
    <a class="pr5" href="${props.link}"><img src="${props.image}"></a>
  `
}

function projectBox (props) {
  return html`
    <a href="${props.link}" class="w-33 bg-white ba br2 b--black-10 pv4 ph2 tc">
      <img src="${props.image}" height="200">
      <h3 class="f5 f4-ns fw6 black-50">${props.title}</h3>
      <div class="f5 f4-ns fw4 black-80 measure-narrow">${props.description}</div>
    </a>
  `
}

function personBox (props) {
  return html`
    <article class="bg-white br2 pa3 pb4-ns mv2 ba b--black-10 mr3">
      <h4 class="f5 f4-ns fw6 mb0 mt1">${props.name}</h4>
      <h5 class="f5 b ttu black-50 mv0">${props.title}</h5>
      <p class="lh-copy measure-narrow f5 f4-ns fw4">
        ${props.description}
      </p>
    </article>
  `
}
