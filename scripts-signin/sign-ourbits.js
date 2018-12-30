// ==UserScript==
// @name              OurBits
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://ourbits.club/login.php
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-ourbits.js
// @expire            900e3
// @domain            ourbits.club
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('https://ourbits.club/attendance.php');
  // res.data
  // 一个HTML页面
  // 您今天已经签到过了，请勿重复刷新
  console.log(res);
  if (res.data.includes('成功')) return '已签到';
  else if (res.data.includes('已经签到')) throw '今日已签到';
  else throw '未知错误';
};

exports.check = async function() {
  var res = await axios.get('https://ourbits.club/index.php');
  //未登录会返回302，重定向到login.php
  return res.status === 200;
};
