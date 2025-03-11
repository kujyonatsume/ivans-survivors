const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');


const createWindow = () => {
    const win = new BrowserWindow({
        width: 720, height: 720,
        resizable:false,
        useContentSize: true,
        autoHideMenuBar:true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'), // ✅ 使用 preload.js
            contextIsolation: true, // ✅ 確保安全
            enableRemoteModule: false
        }
    });

    win.loadFile('index.html');
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
