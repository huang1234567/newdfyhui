---
title: newdfyhui
order: 10
hero:
  title: newdfyhui Design
  desc: Just component, not UI
  actions:
    - text: 快速上手
      link: /guide
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 安装引入后即可使用，提供详细的组件使用文档。
  - icon: https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg
    title: Ant Design
    desc: 基于 Ant Design ，在其之上做简朴的逻辑封装，保留了 Ant Design 组件所有功能。
  - icon: https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg
    title: TypeScript
    desc: 使用 TypeScript 开发，提供完整的类型定义文件。
# features:
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
#     title: 学习
#     desc: study
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
#     title: 总结
#     desc: summarize
#   - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
#     title: 分享
#     desc: share
footer: Open-source MIT Licensed | Copyright © 2022<br />Powered by WSK
---

## 快速上手

### 安装依赖

```
npm i -S newdfyhui
```

### 使用

```jsx | pure
import { CountdownButton } from 'newdfyhui';

export default const Demo = () => {
  return (
    <div>
      <CountdownButton onClick={()=>5566}>{'获取验证码'}</CountdownButton>
    </div>
  );
};
```
