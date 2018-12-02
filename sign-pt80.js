// ==UserScript==
// @name              TTG
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://www.pt80.net
// @updateURL
// @expire            900e3
// @domain            www.pt80.net
// ==/UserScript==

exports.run = async function () {
  // Form data
  // formhash	edaf744f
  // qdxq	wl
  // qdmode	3
  // todaysay
  // fastreply	0
  var { data } = await axios.get('http://www.pt80.net/plugin.php?id=dsu_paulsign:sign&operation=qiandao&infloat=1&inajax=1');
  // 返回
  //   <? xml version = "1.0" encoding = "gbk" ?>
  //     <root><![CDATA[<script type="text/javascript" reload="1">
  //       setTimeout("window.location.href='plugin.php?id=dsu_paulsign:sign'", 3000);
  // </script>
  //       <div class="f_c">
  //         <h3 class="flb">
  //           <em id="return_win">签到提示</em>
  //           <span>
  //             <a href="javascript:;" class="flbc" onclick="hideWindow('qwindow')" title="关闭">关闭</a></span>
  //         </h3>
  //         <div class="c">
  //           恭喜你签到成功!获得随机奖励 活跃度 2 点. </div>
  //       </div>
  //       ]]></root>
};

exports.check = async function () {
  // var { data } = await axios.get('https://totheglory.im');
  // return data.code === 0;
};