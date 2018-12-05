// ==UserScript==
// @name              字幕组
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://www.zimuzu.tv/user/login
// @updateURL
// @expire            900e3
// @domain            www.zimuzu.tv
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('http://www.zimuzu.tv/');
  if (res.status === 200) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {
  var res = await axios.get('http://www.zimuzu.tv/user/user');
  if (res.data.includes('请先登录')) return false;
  else return true;
};
