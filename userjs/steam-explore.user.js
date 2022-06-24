// ==UserScript==
// @name         Steam自动探索队列
// @namespace    https://steamcn.com/t157861-1-1
// @updateURL    https://github.com/joxon/hello-js/raw/master/userjs/steam-explore.user.js
// @downloadURL  https://github.com/joxon/hello-js/raw/master/userjs/steam-explore.user.js
// @version      0.3
// @description  Steam节庆活动用脚本，自动探索3次队列。
// @author       joxon
// @match        https://store.steampowered.com/*
// @run-at       document-idle
// ==/UserScript==

;(function runScript() {
  let running = true

  /**	Show a dialog with a single button, like alert().  Button click or closing the modal resolve deferred with done().
   *
   * @param strTitle			Title bar text
   * @param strDescription	Message text
   * @param strOKButton		Text on the OK button ("OK" by default)
   * @returns CModal
   */
  // function ShowAlertDialog( strTitle, strDescription, strOKButton, rgModalParams )
  let progressDialog = ShowAlertDialog(
    '探索中',
    $J('<div/>')
      .append($J('<div/>', { class: 'waiting_dialog_throbber' }))
      .append($J('<div/>', { id: 'progressContainer' }).text('获取进度...')),
    '停止'
  ).done(abort)

  function abort() {
    running = false
    progressDialog.Dismiss()
  }

  function abortAndShowRetryDialog() {
    abort()
    /**	Show a popup dialog like confirm(), with two buttons.  Clicking ok resolves with done(), cancel or closing the window resolves with fail()
     *
     * @param strTitle			Title bar text
     * @param strDescription	Message text
     * @param strOKButton		Text to show on OK button (default "OK")
     * @param strCancelButton	Text to show on Cancel button (default "Cancel")
     * @param strSecondaryActionButton	Add a secondary ok button (three buttons total).  Resolves with done() like OK but passes 'SECONDARY' as argument to handler
     * @returns CModal
     */
    // function ShowConfirmDialog( strTitle, strDescription, strOKButton, strCancelButton, strSecondaryActionButton )
    ShowConfirmDialog('错误', '是否重试?', '重试', '放弃').done(runScript)
  }

  function abortAndShowSuccessDialog() {
    abort()
    /**	Show a dialog with a single button, like alert().  Button click or closing the modal resolve deferred with done().
     *
     * @param strTitle			Title bar text
     * @param strDescription	Message text
     * @param strOKButton		Text on the OK button ("OK" by default)
     * @returns CModal
     */
    // function ShowAlertDialog( strTitle, strDescription, strOKButton, rgModalParams )
    ShowAlertDialog('完成', '已完成全部3轮探索队列')
  }

  let queueNumber = 0
  function updateProgressDialog() {
    $J('#progressContainer').html(
      '<br>剩余' + queueNumber + '个待探索队列, 当前队列剩余' + appIdQueue.length + '个待探索游戏'
    )
  }

  function beginQueue() {
    if (!running) {
      return
    }

    $J.get('/explore/').done((htmlText) => {
      const cardInfo = htmlText.match(/<div class="subtext">\D+(\d)\D+<\/div>/)
      if (!cardInfo) {
        abortAndShowSuccessDialog()
        return
      }

      const matchedAppids = htmlText.match(/0,\s+(\[.*\])/)
      if (!matchedAppids) {
        abortAndShowRetryDialog()
        return
      }

      appIdQueue = JSON.parse(matchedAppids[1])
      queueNumber = cardInfo[1]
      appIdQueue.length == 0 ? generateQueue() : exploreQueue()
      updateProgressDialog()
    })
  }

  function generateQueue() {
    running &&
      $J
        .post('/explore/generatenewdiscoveryqueue', { sessionid: g_sessionID, queuetype: 0 })
        .done(beginQueue)
        .fail(abortAndShowRetryDialog)
  }

  let appIdQueue = []
  function exploreQueue() {
    if (!running) {
      return
    }

    const appId = appIdQueue.shift()
    if (!appId) {
      generateQueue()
      return
    }

    updateProgressDialog()
    $J.post(appIdQueue.length ? '/app/' + appId : '/explore/next/', {
      sessionid: g_sessionID,
      appid_to_clear_from_queue: appId
    })
      .done(exploreQueue)
      .fail(abortAndShowRetryDialog)
  }

  beginQueue()
})()
