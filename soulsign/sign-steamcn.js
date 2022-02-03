// ==UserScript==
// @name              SteamCN
// @namespace         https://github.com/joxon/hello-js
// @version           1.0.0
// @author            joxon
// @loginURL          https://steamcn.com/member.php?mod=logging&action=login
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-steamcn.js
// @expire            900e3
// @domain            steamcn.com
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('https://steamcn.com/forum.php');
  if (res.status === 200) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {
  let res = await axios.get('https://steamcn.com/home.php?mod=spacecp');
  if (res.data.includes('提示信息')) {
    return false;
  } else {
    return true;
  }
};
