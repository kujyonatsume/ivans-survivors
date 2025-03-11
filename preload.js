const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipcContext', {
    send: (channel, ...data) => {
        ipcRenderer.send(channel, ...data);
    },
    on: (channel, callback) => {
        ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
});
