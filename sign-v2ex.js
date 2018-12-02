// ==UserScript==
// @name              v2ex签到
// @namespace         https://github.com/inu1255/soulsign-chrome
// @version           1.0.0
// @author            inu1255
// @loginURL          https://www.v2ex.com/signin
// @expire            900e3
// @domain            www.v2ex.com
// ==/UserScript==

/**
 * 签到接口，可以使用axios库发起请求,请求url域名必须通过@domain声明
 * throw 签到失败并抛出失败原因
 * return 签到成功并返回成功信息
 */
exports.run = async function() {
  var ret = await axios.get("https://www.v2ex.com/mission/daily");
  if (ret.status != 200) throw "需要登录";
  if (/每日登录奖励已领取/.test(ret.data)) return "已领取";
  let m = /redeem\?once=(.*?)'/.exec(ret.data);
  if (!m) throw "失败1";
  await axios.get("https://www.v2ex.com/mission/daily/redeem?once=" + m[1]);
  var ret = await axios.get("https://www.v2ex.com/mission/daily");
  if (/每日登录奖励已领取/.test(ret.data)) return "成功";
  throw "失败2";
};

/**
 * 检查是否在线接口，可以使用axios库发起请求,请求url域名必须通过@domain声明
 * return true 代表在线
 */
exports.check = async function() {
  var ret = await axios.get("https://www.v2ex.com/mission/daily");
  return ret.status == 200;
};
