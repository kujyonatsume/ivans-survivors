"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
//通过contextBridge 向渲染进程暴露一个全局的window.electronAPI
electron_1.contextBridge.exposeInMainWorld('ipc', {
    send: (...args) => electron_1.ipcRenderer.send('send', ...args),
    invoke: (...args) => electron_1.ipcRenderer.invoke('invoke', ...args)
});
