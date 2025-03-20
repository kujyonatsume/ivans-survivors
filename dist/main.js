"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 720, height: 720,
        resizable: false,
        useContentSize: true,
        autoHideMenuBar: true,
        webPreferences: {
            preload: path_1.default.join(__dirname, 'preload.js'), // ✅ 使用 preload.js
            contextIsolation: true, // ✅ 確保安全
        }
    });
    win.loadFile(path_1.default.join(__dirname, '../public/index.html'));
};
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
const sendMap = {
    savedata(e, ...data) {
        fs_1.default.writeFileSync("a.json", JSON.stringify(data[0]), "utf8");
    }
};
const invokeMap = {
    ping(value) {
        return `${value} pong`;
    }
};
electron_1.ipcMain.on('send', (event, ...args) => {
    sendMap[args.shift()](event, ...args);
});
electron_1.ipcMain.handle('invoke', (event, ...args) => {
    return invokeMap[args.shift()](args[0]);
});
