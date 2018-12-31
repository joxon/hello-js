// ==UserScript==
// @name              HDChina
// @namespace         https://github.com/joxon/hello-js
// @version           1.0.0
// @author            joxon
// @loginURL          https://hdchina.org/login.php
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-hdchina.js
// @expire            900e3
// @domain            hdchina.org
// ==/UserScript==

exports.run = async function() {
  var res = await axios.post(
    'https://hdchina.org/plugin_sign-in.php?cmd=signin'
  );
  console.log(res);
  if (res.data.state == 'success') return '已签到' + res.data.signindays + '天';
  else if (res.data.state == 'false') throw '今日已签到';
  else throw '未知错误';
};

exports.check = async function() {
  var res = await axios.get('https://hdchina.org/index.php');
  //未登录会返回302，重定向到login.php
  return res.status === 200;
};
