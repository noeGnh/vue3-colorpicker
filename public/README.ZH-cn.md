# colorpicker

⚠️ 本仓库是 [vue3-colorpicker](https://github.com/aesoper101/vue3-colorpicker) 的一个分支。

非常漂亮的一款拾色器,支持多种颜色格式的输入输出,支持渐变色选择。

注意：本文档适用于 v2 以上版本。如果您正在使用旧版本，请参阅 v1 分支。v2 版本为破坏性更新，不再支持 v1 中的某些功能,请谨慎使用。

[在线 demo 演示](https://aesoper101.github.io/vue3-colorpicker/)

[English](https://github.com/aesoper101/vue3-colorpicker/blob/main/README.md)

![Vue3-colorpicker](https://raw.githubusercontent.com/aesoper101/vue3-colorpicker/main/src/assets/example.jpg?raw=true)

## 安装

```bash
pnpm add @arkn/vue3-colorpicker
```

或者

```bash
yarn add @arkn/vue3-colorpicker
```

或者

```bash
npm install @arkn/vue3-colorpicker
```

## 如何使用

### 第一步全局注册

```ts
import Vue3ColorPicker from "@arkn/vue3-colorpicker";
import "@arkn/vue3-colorpicker/style.css";

createApp(App)
  .use(router)
  .use(Vue3ColorPicker)
  .mount("#app");
```

或者局部注册

```vue3
import { ColorPicker } from "@arkn/vue3-colorpicker";
import "@arkn/vue3-colorpicker/style.css";

export default defineComponent({
components: { ColorPicker },
});
```

### 使用组件

```vue3
<template>
  <div>
     <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor"/>
  </div>
</template>
<script lang="ts">
  import { ref } from "vue";
  import { ColorInputWithoutInstance } from "tinycolor2";

  export default defineComponent({
     setup() {
       const pureColor = ref<ColorInputWithoutInstance>("red");
       const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

       return { pureColor, gradientColor }
     }
  });
</script>
```

具体文档请参考 [在线 demo 演示](https://aesoper101.github.io/vue3-colorpicker/)

案例代码在 src/stories 目录下
