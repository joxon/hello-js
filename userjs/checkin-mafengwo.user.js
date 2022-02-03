// ==UserScript==
// @name         checkin-mafengwo
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-mafengwo.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-mafengwo.user.js
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
