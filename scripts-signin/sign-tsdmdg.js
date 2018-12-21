// ==UserScript==
// @name              TSDM打工
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://www.tsdm.me/forum.php
// @updateURL
// @expire            900e3
// @domain            www.tsdm.me
// ==/UserScript==

exports.run = async function () {
  for (var i = 1; i <= 6; ++i) {
    var res = await axios.post('http://www.tsdm.me/plugin.php?id=np_cliworkdz:work', {
      act: 'clickad' // click AD 点击广告
    });
    console.log(res);
    if (res.data === i) continue;
    else if (res.data.includes('必须与上一次间隔')) throw '冷却中';
    else throw '点击次数积累失败';
  }
  res = await axios.post('http://www.tsdm.me/plugin.php?id=np_cliworkdz:work', {
    act: 'getcre' // get credit hu获取积分
  });
  if (res.data.includes('不要作弊哦，重新进行游戏吧！')) throw '打工失败';
  else if (res.data.includes('恭喜，您已经成功领取了奖励天使币')) return '签到成功';
  else throw '未知错误';
};

exports.check = async function () {
  var res = await axios.get('http://www.tsdm.me/plugin.php?id=np_cliworkdz:work');
  if (res.data.includes('请先登录再进行点击任务')) return false;
  else return true;
};
