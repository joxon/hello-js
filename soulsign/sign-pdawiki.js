// ==UserScript==
// @name              SteamCN
// @namespace         https://github.com/joxon/hello-js
// @version           1.0.0
// @author            joxon
// @loginURL          https://steamcn.com/member.php?mod=logging&action=login
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-pdawiki.js
// @expire            900e3
// @domain            www.pdawiki.com
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('https://www.pdawiki.com/forum/');
  res = await axios.get('https://www.pdawiki.com/forum/');
  if (res.status === 200) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {
  var res = await axios.get(
    'https://www.pdawiki.com/forum/dsu_paulsign-sign.html'
  );
};
