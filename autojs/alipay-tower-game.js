if (!requestScreenCapture()) {
  toastLog('requestScreenCapture() failed!')
  exit()
}

const width = 1080
const height = 1920
// Skyscraper Stack: #45bff7
// Alipay: '#acacae'
const stickColor = '#45bff7'
const midx = width / 2
const midy = height / 2
const delta = 2
const minx = midx - delta
const maxx = midx + delta
const sleepms = 1

setScreenMetrics(width, height)

while (true) {
  let point = findColor(captureScreen(), stickColor)
  if (point === null) {
    continue
  }
  console.log('x=' + point.x + ' y=' + point.y)
  if (minx <= point.x && point.x <= maxx) {
    console.warn('mid!!')
    click(midx, midy)
  }
  sleep(sleepms)
}
