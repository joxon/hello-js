className('Button')
  .depth(14)
  .find()
  .forEach(button => {
    if (/\s/.test(button.text())) {
      console.log(1)

      const bounds = button.bounds()
      click(bounds.centerX(), bounds.centerY())
    }
  })
