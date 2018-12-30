// ==UserScript==
// @name              Chrono.gg
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://www.chrono.gg/
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-chronogg.js
// @expire            900e3
// @domain            api.chrono.gg
// ==/UserScript==

exports.run = async function () {
  await axios.options('https://api.chrono.gg/quest/spin');
  let res = await axios.get('https://api.chrono.gg/quest/spin');
  // res.data { "quest": { "_id": -1, "name": "default", "earns": "coins", "kind": "daily", "value": 20, "bonus": 3 }, "chest": { } }
  if (res.data.quest.value > 0) return '获得' + res.data.quest.value + '金币';
  else throw '未知错误';
};

exports.check = async function () { };
