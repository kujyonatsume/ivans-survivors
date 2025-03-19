import fs from 'fs';
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 720, height: 720,
        resizable: false,
        useContentSize: true,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, './preload.js'), // ✅ 使用 preload.js
            contextIsolation: true, // ✅ 確保安全
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

const sendMap = {
    savedata(...data) {
        fs.writeFileSync("a.json", JSON.stringify(data), "utf8")
    }
}

const invokeMap = {
    ping: (value) => `${value} pong`
}

ipcMain.on('send', (event, ...args) => {
    sendMap[args.shift()](event, ...args)
});

ipcMain.handle('invoke', (event, ...args) => {
    return invokeMap[args.shift()](args)
});