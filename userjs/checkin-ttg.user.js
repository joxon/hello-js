// ==UserScript==
// @name         checkin-ttg
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://raw.githubusercontent.com/joxon/hello-js/master/userjs/checkin-ttg.js
// @version      1.0.0
// @author       joxon
// @match        https://totheglory.im/*
// @icon         https://totheglory.im/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  const checkinAnchor = document.querySelector('#signed')
  if (checkinAnchor?.innerHTML.includes('已签到')) {
    console.log('already checked in..')
  } else {
    checkinAnchor.click()
    console.log('done')
  }
})()
