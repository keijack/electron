const { app, BrowserWindow } = require('electron')

let win
app.on('ready', function () {
  win = new BrowserWindow({})
  win.loadURL('about:blank')
  win.setMenuBarVisibility(false)

  setTimeout(() => {
    if (win.isMenuBarVisible()) {
      process.stdout.write('Window has a menu')
    } else {
      process.stdout.write('Window has no menu')
    }
    process.stdout.end(() => app.quit())
  })
})
