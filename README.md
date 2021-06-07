# vue3-vite-interact-demo


### Build
> [vue create v3](https://blog.csdn.net/u010411264/article/details/108431034)

> [vue3文档](https://www.runoob.com/vue3/vue3-install.html)

> cnpm install vue-router@4

### vite(Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。)

> 全局安装 create-vite-app
```
$ cnpm i -g create-vite-app
```

> 创建项目 runoob-vue3-test2

```
create-vite-app runoob-vue3-test2
```

> 运行

```
$ cd runoob-vue3-test2
$ cnpm install
$ cnpm run dev
```

### 安装SCSS,element-plus,interactjs

- [scss](https://blog.csdn.net/jiangwei1994/article/details/81940324)
- [interactjs - npm](https://www.npmjs.com/package/interactjs)

### 报错

> 报错内容
```
  history: createWebHashHistory(),
  -----------------------------------
  Uncaught (in promise) TypeError: Object(...) is not a function at eval
```
> 解决办法
```
 // node_module里面找不到这个方法
 npm install vue-router@4.0.8 --save
```

### defineComponent(defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断)

- [Vue3 - defineComponent解决了什么？](https://blog.csdn.net/qq_36157085/article/details/109498473)