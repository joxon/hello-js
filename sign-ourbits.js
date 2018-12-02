// ==UserScript==
// @name              OurBits
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://ourbits.club/login.php
// @updateURL
// @expire            900e3
// @domain            ourbits.club
// ==/UserScript==

exports.run = async function () {
  var { data } = await axios.get('https://ourbits.club/attendance.php');
  // 返回一个HTML页面
};

exports.check = async function () {
  var { data } = await axios.get('https:///ourbits.club');
  return data.code === 0;
};