// ==UserScript==
// @name              联想社区
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://club.lenovo.com.cn/signlist
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-club.lenovo.js
// @expire            900e3
// @domain            club.lenovo.com.cn
// ==/UserScript==
//
https: exports.run = async function() {
  var res = await axios.get('http://club.lenovo.com.cn/sign');
  if (res.data.msg === 'success') return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {};
