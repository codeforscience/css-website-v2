var html = require('choo/html')
var ov = require('object-values')
var content = require('../components/content')
var contact = require('../components/contact')

module.exports = home

function home (state, emit) {
  var sectionClass = 'bt b--black-10 ph3 ph5-l pb4 pb5-ns pt2'

  return html`
    <section class="bl b--black-10 flex flex-column black-70">
      <div class="cover bg-center" style="background-image: url(${state.page().v('background')})">
        <div class="${sectionClass} bg-black-60 w-100 vh-75 dt">
          <div class="tc dtc v-mid">
            <h1 class="f2 f1-l fw2 mw7 ph5 center white-90 mb0 lh-title">${state.page().v('tagline')}</h1>
            <h2 class="f5 f4-ns fw5 measure-wide center white-80 mt3 mb4">${state.page().v('description')}</h2>
          </div>
        </div>
      </div>
      <div class="${sectionClass} bg-lightest-blue" id="about">
        <h2 class="f2 ttu fw5">About CS&S</h2>
        <div class="f5 f4-ns fw4 cf">
          ${content(state.page().v('about-text'))}
        </div>
        <div class="cf">
          ${ov(state.page().v('programs')).map(programText)}
        </div>
        <article class="pv2 w-100">
          <h2 class="f5 f4-ns fw6 mb3">Sponsored Projects</h2>
          <div class="flex flex-wrap pv2">
            ${ov(state.page().v('projects')).map(projectBox)}
          </div>
        </article>
      </div>
      <div class="${sectionClass}" id="sponsors">
        <h2 class="f2 ttu fw5">CS&S Supporters</h2>
        <div class="pv3-l pv1 flex flex-wrap">
          ${ov(state.page().v('sponsors')).map(sponsorImg)}
        </div>
      </div>
      <div class="${sectionClass} bg-light-gray" id="people">
        <h2 class="f2 ttu fw5">People of CS&S</h2>
        <div class="pv3-l pv1 flex flex-wrap">
          ${ov(state.page().v('team')).map(personBox)}
        </div>
      </div>
      <div class="${sectionClass}" id="people">
        <h2 class="f2 ttu fw5">CS&S Board</h2>
        <div class="pv3-l pv1 flex flex-wrap">
          ${ov(state.page().v('board')).map(personBox)}
        </div>
      </div>
      <div class="${sectionClass} bg-lightest-blue">
        <h2 class="f2 ttu fw5">Call to Action!</h2>
        <div class="f5 f4-ns fw4 measure-wide mt0">${content(state.page().v('cta'))}</p>
      </div>
    </section>
  `
}

function domainPillar (props) {
  return html`
    <div class="w-33-l tc pt4-ns ph3-ns pt2 center">
      <img src="${props.image}" height="200" class="">
      <h3 class="f5 f4-ns fw6 black-70">${props.title}</h3>
      <hr class="mw3 bb bw1 b--black-70">
      <p class="mb0 f5 f4-ns fw4 black-70 mw6 center">
        ${props.description}
      </p>
    </div>
  `
}

function programText (props) {
  return html`
    <article class="pv2 fl w-100 w-50-l pr0 pr5-l">
      <h2 class="f5 f4-ns fw6 mb3">${props.title}</h2>
      <p class="f5 f4-ns fw4 measure mt0">${content(props.description)}</p>
    </article>
  `
}

function projectBox (props) {
  return html`
    <a href="${props.link}" class="flex flex-column tc justify-around pa3 w-40-l w-100 h5 mr2 mb3 db bg-white ba br2 b--black-10">
      <img src="${props.image}" style="max-height:100px;max-width:75%;" class="center">
      <div class="tc">
        <h3 class="f5 f4-ns fw6 black-50 mb0">${props.title}</h3>
        <div class="f5 f4-ns fw4 black-80 mb1">${props.description}</div>
      </div>
    </a>
  `
}

function sponsorImg (props) {
  return html`
    <a class="pr5 mb3 db dib-l" href="${props.link}"><img src="${props.image}"></a>
  `
}


function personBox (props) {
  return html`
    <article class="bg-white br2 pa3 pb4-ns mv2 ba b--black-10 mr3-l mr2">
      <h4 class="f5 f4-ns fw6 mb0 mt1">${props.name}</h4>
      <h5 class="f5 b ttu black-50 mv0">${props.title}</h5>
      <p class="lh-copy measure-narrow f5 f4-ns fw4">
        ${props.description}
      </p>
    </article>
  `
}
