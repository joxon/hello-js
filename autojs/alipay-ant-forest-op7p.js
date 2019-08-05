;(() => {
  const width = 1440 // 1080
  const height = 3120 // 1920
  const password = '8384'

  // 注意不要遮挡点击区域！
  // console.show()
  // const consoleWidth = 100
  // const consoleHeight = 100
  // console.setSize(consoleWidth, consoleHeight)
  // const consoleX = (device.width - consoleWidth) / 2
  // const consoleY = 0
  // console.setPosition(consoleX, consoleY)

  threads.start(function() {
    // 暂不支持箭头函数
    toastLog('按音量下键停止脚本...')
    events.observeKey()
    events.onKeyDown('volume_down', () => {
      toastLog('已停止脚本')
      exit()
    })
  })

  // const autoMode = 'normal' // 'fast'
  // auto(autoMode)

  // 检查无障碍服务是否已经启用，
  // 如果没有启用则跳转到无障碍服务启用界面，
  // 并等待无障碍服务启动；
  // 当无障碍服务启动后脚本会继续运行。
  auto.waitFor()

  setScreenMetrics(width, height)
  print('初始化完成...')

  if (!device.isScreenOn()) {
    toastLog('尝试解锁...')
    unlock(password)
    toastLog('解锁成功')
  }

  if (notInForest()) {
    print('打开支付宝...')
    launch('com.eg.android.AlipayGphone')
    sleep(1000)
    print('打开支付宝成功')

    if (notInForest()) {
      print('等待支付宝主界面加载...')
      waitForActivity('com.eg.android.AlipayGphone.AlipayLogin')
      print('支付宝主界面加载完毕')
      print('进入蚂蚁森林...')
      enterForestByText()
      sleep(5000)
      print('已进入蚂蚁森林')
    }
  }

  print('准备收集自己的能量...')
  clickButtonsByRegExp(/收集能量/)
  sleep(1000)
  print('已收集自己的能量')

  print('准备进入好友列表...')
  enterFriendList()
  sleep(2000)
  print('已进入好友列表')

  print('请求截图权限...')
  if (!requestScreenCapture()) {
    print('requestScreenCapture()失败')
    exit()
  }
  print('请求截图权限成功')

  print('准备遍历好友列表...')
  enterFriendPageAndCollect()

  toastLog('脚本结束')
  exit()
})()

function unlock(password) {
  device.wakeUpIfNeeded()
  sleep(2000)
  swipe(720, 2500, 720, 500, 500)
  const len = password.length
  for (let i = 0; i < len; ++i) {
    let ch = password.charAt(i)
    print(ch)
    let b = text(ch)
      .findOne()
      .bounds()
    click(b.centerX(), b.centerY())
  } //需要点击确定键的可以在下面加上click(x坐标，y坐标);
  click(1130, 2730)
  sleep(500)
}

function notInForest() {
  return currentActivity() !== 'com.alipay.mobile.nebulacore.ui.H5Activity'
}

// 根据颜色寻找图标，可能找不到颜色
function enterForestByColor() {
  const forestGreen = '#29ab91'
  const point = findColor(captureScreen(), forestGreen)
  if (point === null) {
    print('没有找到蚂蚁森林绿！')
    exit()
  }
  click(point.x, point.y)
}

// 根据文本寻找图标
function enterForestByText() {
  click('蚂蚁森林')
}

function clickButtonsByRegExp(regex) {
  className('Button')
    .find()
    .forEach(button => {
      // 爱心能量、不可偷能量、时间未到能量，
      // 其text都是一个空格，但是不能用等号匹配？
      print('检测到按钮[' + button.text() + ']')
      if (regex.test(button.text())) {
        print('准备点击...')
        const b = button.bounds()
        print('左上角&右下角：' + b)
        // 用click或者press都会有时点不到
        // 感觉是截图遮罩的问题
        // 不…是console挡住了
        click(b.centerX(), b.centerY())
        print('点击完毕')
      } else {
        print('不可点击')
      }
    })
}

function scrollFromTopToBottom(px) {
  print('手指向下划动' + px + '个像素')
  const x1 = 720 // device.width / 2
  const y1 = 300
  const x2 = x1
  const y2 = y1 + px
  console.assert(y2 < device.height, '结束y坐标要小于屏幕高度')
  const ms = 100
  swipe(x1, y1, x2, y2, ms)
}

function scrollFromBottomToTop(px) {
  print('手指向上划动' + px + '个像素')
  const x1 = 720 // device.width / 2
  const y1 = 2500
  const x2 = x1
  const y2 = y1 - px
  console.assert(y2 > 0, '结束y坐标要大于0')
  const ms = 100
  swipe(x1, y1, x2, y2, ms)
}

function enterFriendList() {
  scrollFromBottomToTop(2000)
  scrollFromBottomToTop(2000)
  scrollFromBottomToTop(2000)
  // click('查看更多好友')
  className('android.view.View')
    .desc('查看更多好友')
    .findOne()
    .click()
}

function enterFriendPageAndCollect() {
  const handImage = images.read(
    '/sdcard/_Android/_AutoJS/forest-hand-50x50.png'
  )
  const heartImage = images.read(
    '/sdcard/_Android/_AutoJS/forest-heart-50x50.png'
  )
  console.log('TCL: enterFriendPageAndCollect -> handImage', handImage)
  console.log('TCL: enterFriendPageAndCollect -> heartImage', heartImage)

  const enterFriendPageByImage = image => {
    let point = findImage(captureScreen(), image, {
      threshold: 0.9
    })
    if (point === null) {
      return false
    } else {
      click(point.x, point.y + 10) // y坐标需要下移才能正确点击，不然会点到上面的人
      return true
    }
  }

  let pageCount = 0
  do {
    if (
      enterFriendPageByImage(handImage) ||
      enterFriendPageByImage(heartImage)
    ) {
      ++pageCount
      print('进入第' + pageCount + '个好友页面...')
      sleep(4000)
      clickButtonsByRegExp(/收集能量|\s/)
      sleep(1000)
      back()
      print('退出好友页面')
    } else {
      scrollFromBottomToTop(500)
    }
  } while (!desc('没有更多了').exists())

  print('所有好友收集完毕')
  print('进入页面共' + pageCount + '个')

  handImage.recycle()
  heartImage.recycle()
}
