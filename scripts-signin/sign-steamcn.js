// ==UserScript==
// @name              SteamCN
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://steamcn.com/member.php?mod=logging&action=login
// @updateURL
// @expire            900e3
// @domain            steamcn.com
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('https://steamcn.com/forum.php');
  if (res.status === 200) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {};
