# EPXFresh Prototype

EPXFresh 海外独立站 UI 原型 - React + Vite + Tailwind CSS

## 🚀 快速开始

```bash
# 进入项目目录
cd d:/保鲜膜/epxfresh-prototype

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 浏览器打开
# http://localhost:5173/
```

## 📦 项目结构

```
src/
├── components/
│   ├── ui/              # 基础UI组件
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   ├── Hero.tsx          # 首屏
│   ├── ProductCard.tsx    # 产品卡片
│   ├── AIAssistant.tsx    # AI助手
│   └── App.tsx           # 主应用
├── lib/
│   └── utils.ts          # 工具函数
├── index.css             # 全局样式 + 设计系统
├── main.tsx              # 入口
└── App.tsx               # 应用根组件
```

## 🎨 设计系统

### 核心色彩

| 颜色 | 用途 | 色值 |
|------|------|------|
| Fresh Green | 主色、新鲜 | `hsl(142 76% 36%)` |
| Eco Teal | B2B、环保 | `hsl(174 82% 31%)` |
| Warm Earth | 促销、评分 | `hsl(35 92% 56%)` |
| Cream | 背景色 | `hsl(40 33% 96%)` |

### 使用品牌色

```tsx
// 使用Tailwind自定义颜色
<div className="bg-fresh-primary text-white">
  主色调按钮
</div>

<div className="bg-eco-teal text-white">
  B2B区块
</div>

<div className="text-warm-earth">
  促销价格
</div>

<div className="text-gradient-fresh">
  渐变文字
</div>
```

## 🛠️ 添加新组件

### 1. 创建组件

```tsx
// src/components/MyComponent.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface MyComponentProps {
  className?: string
}

export const MyComponent: React.FC<MyComponentProps> = ({ className }) => {
  return (
    <div className={cn('p-6 bg-white rounded-xl shadow-card', className)}>
      <h2 className="text-2xl font-semibold text-fresh-primary">
        Component Content
      </h2>
    </div>
  )
}
```

### 2. 使用组件

```tsx
// 在App.tsx中
import { MyComponent } from './components/MyComponent'

function App() {
  return (
    <div>
      <MyComponent />
    </div>
  )
}
```

## 🎯 设计原则

1. **使用设计系统** - 所有颜色使用设计token，不要硬编码
2. **响应式优先** - Mobile First设计
3. **组件化** - 小而专注的组件
4. **动画要柔和** - 使用CSS动画，不要过度
5. **一致性** - 保持品牌视觉统一

## 📝 修改品牌色

编辑 `src/index.css`:

```css
:root {
  --fresh-primary: [你的颜色];      /* 主绿色 */
  --eco-teal: [你的颜色];           /* 青绿色 */
  --warm-earth: [你的颜色];         /* 暖橙色 */
  --neutral-cream: [你的颜色];       /* 奶油白 */
}
```

编辑 `tailwind.config.ts`:

```ts
colors: {
  'fresh-primary': "hsl(var(--fresh-primary))",
  'eco-teal': "hsl(var(--eco-teal))",
  'warm-earth': "hsl(var(--warm-earth))",
}
```

## 🔧 开发命令

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# TypeScript检查
npx tsc --noEmit
```

## 📚 技术栈

- **React 18** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 快速构建
- **Tailwind CSS** - 样式系统
- **shadcn/ui** - 组件库
- **Lucide React** - 图标库

## 📖 学习资源

- [React文档](https://react.dev)
- [Tailwind CSS文档](https://tailwindcss.com)
- [shadcn/ui文档](https://ui.shadcn.com)
- [Lucide图标库](https://lucide.dev)

## 🚴 下一步

1. 添加更多页面（Products, About, Contact等）
2. 实现购物车功能
3. 集成AI助手后端
4. 添加表单和验证
5. 优化SEO

## 📞 支持

如有问题，请查看完整的设计文档：
- `d:\保鲜膜\EPXFresh海外独立站建站方案SPEC.md` - 完整方案
- `d:\保鲜膜\epxfresh-prototype\EPXFresh-UI设计系统总结.md` - UI设计总结
