import { contextBridge, ipcRenderer } from "electron";

declare global {
  interface Window {
    ipc: any;
  }
  const ipc: any;
}

//通过contextBridge 向渲染进程暴露一个全局的window.electronAPI
contextBridge.exposeInMainWorld('ipc', {
  send: (...args: any) => ipcRenderer.send('send', ...args),
  invoke: (...args: any) => ipcRenderer.invoke('invoke', ...args)
})