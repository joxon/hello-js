// ==UserScript==
// @name              HDChina
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://hdchina.org/login.php
// @updateURL
// @expire            900e3
// @domain            hdchina.org
// ==/UserScript==

exports.run = async function () {
  var { data } = await axios.post('https://hdchina.org/plugin_sign-in.php?cmd=signin');
  if (data.state == 'success') return '已签到' + data.signindays;
  throw data.msg;
};

exports.check = async function () {
  var { data } = await axios.get('https://hdchina.org');
  return data.code === 0;
};