;(() => {
  const autoMode = 'normal' // 'fast'
  auto(autoMode)

  if (!requestScreenCapture()) {
    toastLog('requestScreenCapture() failed!')
    exit()
  }

  const width = 1080
  const height = 1920
  setScreenMetrics(width, height)

  // 打开蚂蚁森林
  if (notInForest()) {
    launch('com.eg.android.AlipayGphone')
    if (notInForest()) {
      // toastLog(currentActivity())
      // waitForActivity('com.eg.android.AlipayGphone.AlipayLogin')
      enterForestByText()
      sleep(3000)
    }
  }
  collectEnergy()
  sleep(1000)
  enterFriendList()
  sleep(2000)
  enterFriendPageAndCollect()
})()

function notInForest() {
  return currentActivity() !== 'com.alipay.mobile.nebulacore.ui.H5Activity'
}

// 根据颜色寻找图标，可能找不到颜色
function enterForestByColor() {
  const forestGreen = '#29ab91'
  const point = findColor(captureScreen(), forestGreen)
  if (point === null) {
    toastLog('没有找到蚂蚁森林绿！')
    exit()
  }
  click(point.x, point.y)
}

// 根据文本寻找图标
function enterForestByText() {
  click('蚂蚁森林')
}

function collectEnergy() {
  // 只收集能量，不能帮别人收
  // className('Button')
  //   .textStartsWith('收集能量')
  //   .find()
  //   .forEach(energy => {
  //     const bounds = energy.bounds()
  //     click(bounds.centerX(), bounds.centerY())
  //   })

  className('Button')
    .depth(14)
    .find()
    .forEach(button => {
      // 爱心能量、不可偷能量、时间未到能量，其text都是一个空格，但是不能用等号匹配？
      // 可偷能量的text以收集能量开头
      if (/\s/.test(button.text()) || button.text().startsWith('收集能量')) {
        const bounds = button.bounds()
        click(bounds.centerX(), bounds.centerY())
      }
    })
}

function enterFriendList() {
  click('查看更多好友')
}

function enterFriendPageAndCollect() {
  const handImage = images.read('/sdcard/_Android/_AutoJS/forest-hand.png')
  const heartImage = images.read('/sdcard/_Android/_AutoJS/forest-heart.png')

  const enterFriendPage = () => {
    let handPoint = findImage(captureScreen(), handImage, {
      threshold: 0.7
    })
    let heartPoint = findImage(captureScreen(), heartImage, {
      threshold: 0.7
    })
    if (handPoint === null && heartPoint === null) {
      return false
    } else if (handPoint) {
      click(handPoint.x, handPoint.y + 10) // y坐标需要下移才能正确点击，不然会点到上面的人
      return true
    } else if (heartPoint) {
      click(heartPoint.x, heartPoint.y + 10) // y坐标需要下移才能正确点击，不然会点到上面的人
      return true
    }
  }

  const scrollDown = () => {
    const distance = 800
    const x1 = 500
    const y1 = 1600
    const x2 = x1
    const y2 = y1 - distance
    const ms = 100
    swipe(x1, y1, x2, y2, ms)
  }

  do {
    if (enterFriendPage()) {
      sleep(3000)
      collectEnergy()
      sleep(1000)
      back()
    } else {
      scrollDown()
    }
  } while (!text('没有更多了').exists())

  handImage.recycle()
}
