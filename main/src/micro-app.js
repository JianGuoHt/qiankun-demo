// 微应用的一些注册信息
const microApps = [
  {
    name: "app-first-vue",
    entry: process.env.VUE_APP_FIRST_VUE,
    container: "#subapp-viewport",
    activeRule: "/app-first-vue",
    props: {
      routerBase: "/app-first-vue",
    },
  },
  {
    name: "app-second-vue",
    entry: process.env.VUE_APP_SECOND_VUE,
    container: "#subapp-viewport",
    activeRule: "/app-second-vue",
    props: {
      routerBase: "/app-second-vue",
    },
  },
]

export default microApps
