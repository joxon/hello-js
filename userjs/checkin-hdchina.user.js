// ==UserScript==
// @name         checkin-hdchina
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-hdchina.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-hdchina.user.js
// @version      1.0.0
// @author       joxon
// @match        https://hdchina.org/*
// @icon         https://hdchina.org/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  const checkinAnchor = document.querySelector(
    '#site_header > font > div.userinfort > p > a:nth-child(2)'
  )
  if (
    checkinAnchor?.innerHTML.includes('已签到') ||
    checkinAnchor?.innerHTML.includes('查看签到记录')
  ) {
    alert('already checked in..')
  } else {
    checkinAnchor.click()
  }
})()
