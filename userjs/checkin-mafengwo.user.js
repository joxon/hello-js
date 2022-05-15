// ==UserScript==
// @name         checkin-mafengwo
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-mafengwo.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-mafengwo.user.js
// @version      20220515
// @author       joxon
// @match        https://www.mafengwo.cn/
// @icon         https://www.mafengwo.cn/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  const checkinAnchor = document.querySelector('#head-btn-daka')
  if (checkinAnchor?.classList.value.includes('btn-active')) {
    console.log('found checkin anchor');
    checkinAnchor.click()
    console.log('clicked checkin anchor');
  } else {
    console.log('checkin anchor not active or already checked in..');
  }
})()
