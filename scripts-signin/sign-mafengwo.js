// ==UserScript==
// @name              蚂蜂窝
// @namespace         https://github.com/joxon
// @version           1.0.0
// @author            joxon
// @loginURL          http://www.mafengwo.cn/
// @updateURL
// @expire            900e3
// @domain            www.mafengwo.cn/
// ==/UserScript==

exports.run = async function() {
  var res = await axios.get('http://www.mafengwo.cn/ajax/ajax_japp.php', {
    params: {
      callback: 'jQuery18109735794919726609_1544006793583',
      app: 'daka',
      loaded_modules:
        '/js/Dropdown,/js/pageletcommon/pageHeadUserInfoWWWNormal,jq-tmpl,InputListener,SuggestionXHR,DropList,Suggestion,MesSearchEvent,/js/SiteSearch,/js/jquery.lazyload,Pagination,/js/index/ControllerRecommend,ClickToggle,Slider,xdate,/js/hotel/module/FestivalDateConfig,jqui-core,jqui-datepicker,/js/hotel/module/DateRangePicker,Storage,/js/hotel/module/ModuleProvider,/js/hotel/module/BookingDate,/js/hotel/module/Log,/js/hotel/module/Search_v2,dialog/Layer,dialog/DialogBase,dialog/Dialog,/js/module/app/Page,Toggle,PageAdmin,Cookie,ResourceKeeper,jq-jgrowl,FrequencyVerifyControl,FrequencySystemVerify,ScrollObserver,QRCode,TopTip',
      params: '{}',
      _: '1544006907788'
    }
  });
  if (res.status === 200) return '签到成功';
  else throw '未知错误';
};

exports.check = async function() {};
