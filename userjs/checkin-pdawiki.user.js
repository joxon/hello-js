// ==UserScript==
// @name         checkin-padwiki
// @namespace    https://github.com/joxon/hello-js/tree/master/userjs
// @updateURL    https://raw.githubusercontent.com/joxon/hello-js/master/userjs/checkin-padwiki.js
// @version      1.0.0
// @author       joxon
// @match        https://www.pdawiki.com/forum/plugin.php?id=dsu_paulsign:sign
// @icon         https://www.pdawiki.com/favicon.ico
// @grant        none
// @run-at       document-idle
// ==/UserScript==

;(function () {
  'use strict'

  if (
    document.querySelector('#ct > div > h1')?.innerText ===
    '您今天已经签到过了或者签到时间还未开始'
  ) {
    console.log('already checked in. skipping..')
    return
  }

  const formHash = document.querySelector(
    '#qiandao > input[type=hidden]'
  )?.value
  if (typeof formHash !== 'string') {
    console.log('formHash does not exist. failing..')
    return
  }

  fetch(
    'https://www.pdawiki.com/forum/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1',
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
      referrer: 'https://www.pdawiki.com/forum/plugin.php?id=dsu_paulsign:sign',
      referrerPolicy: 'strict-origin-when-cross-origin',
      // qdmode=1 自己填写
      // qdmode=2 快速选择
      // qdmode=3 不想填写
      // qdxq=kx xq=心情 kx=开心
      body: `formhash=${formHash}&qdxq=kx&qdmode=3&fastreply=0`,
      method: 'POST',
      mode: 'cors',
      credentials: 'include'
    }
  ).then((response) => {
    if (response.ok) {
      alert('checkin done')
      location.reload()
    } else {
      alert('checkin failed')
    }
  })
})()
