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

exports.run = async function () {
  var { data } = await axios.post('https://totheglory.im/signed.php');
  // 您已连续签到26天，奖励35积分，明天继续签到将获得36积分奖励。
  // if (data) return '已签到' + data.signindays;
  // throw data.msg;
};

exports.check = async function () {
  var { data } = await axios.get('https://totheglory.im');
  return data.code === 0;
};