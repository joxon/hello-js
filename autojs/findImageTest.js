if (!requestScreenCapture()) {
  toastLog('requestScreenCapture() failed!')
  exit()
}
let handImage = images.read('/sdcard/_Android/_AutoJS/forest-hand.png')
let handPoint = findImage(captureScreen(), handImage, {
  threshold: 0.5
})
toastLog(handPoint)
click(handPoint.x, handPoint.y + 10)
