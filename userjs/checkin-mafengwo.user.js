// ==UserScript==
// @name         checkin-mafengwo
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://raw.githubusercontent.com/joxon/hello-js/master/userjs/checkin-mafengwo.js
// @version      1.0.0
// @author       joxon
// @match        https://www.mafengwo.cn/
// @icon         https://www.mafengwo.cn/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  document.querySelector('#head-btn-daka')?.click()
})()

document.querySelector("#info_block > tbody > tr > td > table > tbody > tr > td:nth-child(1) > span > a.faqlink")