// ==UserScript==
// @name              六维空间
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://bt.neu6.edu.cn/member.php?mod=logging&action=login
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-neu6.js
// @expire            900e3
// @domain            bt.neu6.edu.cn
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('http://bt.neu6.edu.cn/forum.php');
  if (res.status === 200) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {
  var res = await axios.get('http://bt.neu6.edu.cn/forum.php');
  //未登录会返回302
  return res.status === 200;
};
