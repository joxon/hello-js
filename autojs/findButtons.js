className('Button')
  .textStartsWith('收集能量')
  .find()
  .forEach(button => {
    toastLog('检测到按钮[' + button.text() + ']')
    const b = button.bounds()
    press(b.centerX(), b.centerY(), 400)
  })
