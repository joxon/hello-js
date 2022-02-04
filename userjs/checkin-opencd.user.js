// ==UserScript==
// @name         checkin-opencd
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-opencd.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-opencd.user.js
// @version      1.0.0
// @author       joxon
// @match        https://open.cd/index.php
// @icon         https://open.cd/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  const checkinAnchor = document.querySelector(
    '#info_block > tbody > tr > td > table > tbody > tr > td:nth-child(3) > div:nth-child(2) > a:nth-child(1)'
  )
  if (checkinAnchor?.innerHTML.includes('已签到') || checkinAnchor?.innerHTML.includes('查看签到记录')) {
    alert('already checked in..')
  } else {
    checkinAnchor.click()
  }
})()