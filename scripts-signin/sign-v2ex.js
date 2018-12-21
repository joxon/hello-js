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
  var ret = await axios.get('https://www.v2ex.com/mission/daily');
  if (ret.status != 200) throw '需要登录';
  if (/每日登录奖励已领取/.test(ret.data)) return '已领取';

  let m = /redeem\?once=(.*?)'/.exec(ret.data);
  if (!m) throw '失败1';
  await axios.get('https://www.v2ex.com/mission/daily/redeem?once=' + m[1]);
  var ret = await axios.get('https://www.v2ex.com/mission/daily');
  if (/每日登录奖励已领取/.test(ret.data)) return '成功';
  throw '失败2';
};

/**
 * 检查是否在线接口，可以使用axios库发起请求,请求url域名必须通过@domain声明
 * return true 代表在线
 */
exports.check = async function() {
  var ret = await axios.get('https://www.v2ex.com/mission/daily');
  return ret.status == 200;
};

// 说明:
// 前面的 == UserScript == 不可少
// @name 脚本名称
// @namespace 脚本官方网址
// @version 脚本版本
// @author 脚本作者
// @loginURL 登录链接(帮助用户通过这个链接去登录)
// @expire 会话过期时间(毫秒), 系统会隔一段时间调用一次check接口检查在线状态并保持会话活跃
// @domain 请求域名(向用户申明该脚本会访问的域名)
// @domain 另一个请求域名(@domain支持多个)
// (@author, @name) 唯一确定一个脚本, 重复会被当成一个脚本
// 后面的 == /UserScript== 不可少

// 更多demos
// ps: 作者自己写的脚本用到了async / await不支持低版本浏览器

// axios Response Schema
// The response for a request contains the following information.
// {
//   // `data` is the response that was provided by the server
//   data: { },
//   // `status` is the HTTP status code from the server response
//   status: 200,
//   // `statusText` is the HTTP status message from the server response
//   statusText: 'OK',
//   // `headers` the headers that the server responded with
//   // All header names are lower cased
//   headers: { },
//   // `config` is the config that was provided to `axios` for the request
//   config: { },
//   // `request` is the request that generated this response
//   // It is the last ClientRequest instance in node.js (in redirects)
//   // and an XMLHttpRequest instance the browser
//   request: { }
// }
