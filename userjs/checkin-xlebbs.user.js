// ==UserScript==
// @name         checkin-xlebbs
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://raw.githubusercontent.com/joxon/hello-js/master/userjs/checkin-xlebbs.js
// @version      1.0.0
// @author       joxon
// @match        https://www.xlebbs.com/
// @icon         https://www.xlebbs.com/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'
  fetch(
    'https://www.xlebbs.com/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&sign_as=1&inajax=1',
    {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        pragma: 'no-cache',
        'sec-ch-ua':
          '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'iframe',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'sec-gpc': '1',
        'upgrade-insecure-requests': '1'
      },
      referrer: 'https://www.xlebbs.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: 'formhash=4c11efd0&qdxq=kx&qdmode=3&todaysay=&fastreply=0',
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  ).then((response) => {
    if (response.ok) {
      alert('checkin done')
    } else {
      alert('checkin failed')
    }
  })
})()
