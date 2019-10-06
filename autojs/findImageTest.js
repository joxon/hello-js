if (!requestScreenCapture()) {
  toastLog('requestScreenCapture() failed!')
  exit()
}
let handImage = images.read('/sdcard/_Android/_AutoJS/forest-hand-50x50.png')
toastLog(handImage)
let handPoint = findImage(captureScreen(), handImage, {
  threshold: 1.0
})
toastLog(handPoint)
if (handPoint) click(handPoint.x, handPoint.y + 10)
