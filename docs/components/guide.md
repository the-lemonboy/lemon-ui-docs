## 安装
### 通过npm安装
```shell
npm i lemon-ui-vue2 -S
```

### 通过yarn安装
``` shell
yarn add lemon-ui-vue2 -S
```

## 快速开始
### 引入Lemon-ui
你可以引入整个Lemon-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Lemon-ui。

### 完整引入
在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import LemonUI from 'lemon-ui-vue2';
import App from './App.vue';

Vue.use(LemonUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入
