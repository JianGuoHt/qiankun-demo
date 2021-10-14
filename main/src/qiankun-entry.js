import { registerMicroApps, start, setDefaultMountApp } from "qiankun"
import microApps from "./micro-app"

// 全局的微应用生命周期钩子
const lifeCycles = {
  // 挂载前回调
  beforeLoad: [
    (app) => {
      console.log("%c before load", "background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff", app)
    },
  ],
  // 挂载后回调
  beforeMount: [
    (app) => {
      console.log("%c before mount", "background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff", app)
    },
  ],
  // 卸载后回调
  afterUnmount: [
    (app) => {
      console.log("%c after unload", "background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff", app)
    },
  ],
}

// 注册微应用
registerMicroApps(microApps, lifeCycles)
// 设置主应用启动后默认进入的微应用
setDefaultMountApp(microApps[0].activeRule)
// 启动
start()
