// ==UserScript==
// @name         checkin-ttg
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/checkin-ttg.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/checkin-ttg.user.js
// @version      20220515
// @author       joxon
// @match        https://totheglory.im/*
// @icon         https://totheglory.im/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'
  if (document.querySelector('#sp_signed')?.innerHTML.includes('已签到')) {
    console.log('already checked in..')
  } else {
    document.querySelector('#signed')?.click()
    console.log('done')
  }
})()
