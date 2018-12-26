// ==UserScript==
// @name              TTG
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          https://totheglory.im/login.php
// @updateURL
// @expire            900e3
// @domain            totheglory.im
// ==/UserScript==

// 表单信息存放在html中，由服务器生成
// function() {
//   $.post("signed.php", {
//     signed_timestamp: "1545842107",
//     signed_token: "2b44caa6523b036bc52ee706ab0cf626"
//   }, function (data) {
//     $('#sp_signed').html("<b style=\"color:green;\">已签到</b>");
//     alert(data);
//   });
// }

// document.getElementById('signed').click()

exports.run = async function () {
  var res = await axios.post('https://totheglory.im/signed.php');
  console.log(res);
  // res.data
  // "亲，不要投机取巧哦！"
  // res payload
  // 您已连续签到26天，奖励35积分，明天继续签到将获得36积分奖励。
  // form data
  // signed_timestamp	1543990604 1544457765
  // signed_token	ae57fb9b69cfd83f6c6c8089b00e0f2f 2a0618ca8b790ffc664af2b8d70f2506
  if (res.data.includes('投机取巧')) throw '请求格式不正确';
};

exports.check = async function () {
  var res = await axios.get('https://totheglory.im/index.php');
  //未登录会返回302，重定向到login.php
  return res.status === 200;
};
