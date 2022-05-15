// ==UserScript==
// @name         checkin-ourbits
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-ourbits.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-ourbits.user.js
// @version      20220515
// @author       joxon
// @match        https://ourbits.club/*
// @icon         https://ourbits.club/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  const checkinAnchor = document.querySelector(
    '#info_block > tbody > tr > td > table > tbody > tr > td:nth-child(1) > span > a.faqlink'
  )
  if (checkinAnchor?.innerHTML === '签到得魔力') {
    checkinAnchor.click()
  } else {
    console.log('already checked in..')
  }
})()
