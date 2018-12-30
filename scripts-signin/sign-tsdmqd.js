// ==UserScript==
// @name              TSDM签到
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://www.tsdm.me/forum.php
// @updateURL         https://raw.githubusercontent.com/Joxon/hello-js/master/scripts-signin/sign-tsdmqd.js
// @expire            900e3
// @domain            www.tsdm.me
// ==/UserScript==

exports.run = async function() {
  var res = await axios.post(
    'http://www.tsdm.me/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&sign_as=1&inajax=1',
    {
      // 4c856b34
      // c593da12
      // a37a248f
      formhash: 'a37a248f',
      // qdxq 签到心情
      // kx 开心 ng 难过 ym 郁闷 wl 无聊
      // nu 怒 ch 擦汗 fd 奋斗 yl 慵懒 shuai 衰
      qdxq: 'wl',
      // qdmode 签到模式
      // 1 自己填写
      // 3 不想填写
      qdmode: '1',
      todaysay: '啊啊啊',
      fastreply: '1'
    }
  );
  console.log(res);
  if (res.data.includes('您当前的访问请求当中含有非法字符')) {
    throw '请求格式错误';
  } else if (res.data.includes('恭喜你签到成功')) {
    return '签到成功';
  } else {
    throw '未知错误';
  }
};

exports.check = async function() {
  var res = await axios.get(
    'http://www.tsdm.me/plugin.php?id=np_cliworkdz:work'
  );
  if (res.data.includes('请先登录再进行点击任务')) {
    return false;
  } else {
    return true;
  }
};
