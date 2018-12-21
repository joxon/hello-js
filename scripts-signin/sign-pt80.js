// ==UserScript==
// @name              PT80
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://www.pt80.net/member.php?mod=logging&action=login
// @updateURL
// @expire            900e3
// @domain            www.pt80.net
// ==/UserScript==

exports.run = async function() {
  var res = await axios.post(
    'http://www.pt80.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1',
    {
      // 4c856b34
      formhash: '4c856b34',
      // qdxq 签到心情
      // kx 开心 ng 难过 ym 郁闷 wl 无聊
      // nu 怒 ch 擦汗 fd 奋斗 yl 慵懒 shuai 衰
      qdxq: 'wl',
      // qdmode 签到模式
      // 1 自己填写
      // 3 不想填写
      qdmode: '3',
      todaysay: '',
      fastreply: '0'
    }
  );
  console.log(res);
  if (res.data.includes('您当前的访问请求当中含有非法字符')) throw '请求格式错误';
  else if (res.data.includes('恭喜你签到成功')) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {
  var res = await axios.get('http://www.pt80.net/plugin.php?id=dsu_paulsign:sign');
  if (res.data.includes('您需要先登录才能继续本操作')) return false;
  else return true;
};
