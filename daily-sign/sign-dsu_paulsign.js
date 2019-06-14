function qiandao() {
  var x = new Ajax();
  x.get('plugin.php?id=dsu_paulsign:sign&operation=qiandao&qdxq=e&formhash=你的FORMHASH', function (s, x) {
    var nowtime = new Date();
    console.log('在 ' + nowtime.toLocaleString() + ' 完成一次签到');
  });
}

setInterval(function () {
  qiandao();
}, 3000);
