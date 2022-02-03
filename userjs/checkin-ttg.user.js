// ==UserScript==
// @name         checkin-ttg
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-ttg.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-ttg.user.js
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
    alert('already checked in..')
  } else {
    checkinAnchor.click()
    alert('done')
  }
})()
