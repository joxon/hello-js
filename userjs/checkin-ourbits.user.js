// ==UserScript==
// @name         checkin-ourbits
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://raw.githubusercontent.com/joxon/hello-js/master/userjs/checkin-ourbits.js
// @version      1.0.0
// @author       joxon
// @match        https://ourbits.club/*
// @icon         https://ourbits.club/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  const checkinAnchor = document.querySelector("#info_block > tbody > tr > td > table > tbody > tr > td:nth-child(1) > span > a.faqlink")
  if (checkinAnchor?.innerHTML === '签到得魔力') {
    checkinAnchor.click()
    alert('done');
  } else {
    alert('already checked in..');
  }

})()
