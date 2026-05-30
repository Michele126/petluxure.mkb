import { defineConfig } from "tinacms";

const bilingualFields = [
  { type: "string", name: "nameZh", label: "中文名称", isTitle: true, required: true },
  { type: "string", name: "nameEn", label: "English Name", required: true },
  { type: "string", name: "descZh", label: "中文描述" },
  { type: "string", name: "descEn", label: "English Description" }
] as const;

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "local",
  token: process.env.TINA_TOKEN || "local",
  build: {
    outputFolder: "admin",
    publicFolder: "."
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "."
    }
  },
  schema: {
    collections: [
      {
        name: "siteSettings",
        label: "网站设置 / Site Settings",
        path: "content",
        format: "json",
        match: {
          include: "site-settings"
        },
        fields: [
          {
            type: "string",
            name: "theme",
            label: "首页风格",
            options: ["fresh", "editorial", "compact"]
          },
          { type: "string", name: "heroTitleZh", label: "中文首页标题" },
          { type: "string", name: "heroTitleEn", label: "English Hero Title" },
          {
            type: "string",
            name: "paymentMethod",
            label: "收款方式",
            options: ["Stripe", "PayPal", "Alipay", "WeChat Pay"]
          },
          { type: "string", name: "paymentAccount", label: "老板收款账号" }
        ]
      },
      {
        name: "products",
        label: "商品管理 / Products",
        path: "content",
        format: "json",
        match: {
          include: "products"
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "商品列表",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameZh || item?.nameEn || "商品" })
            },
            fields: [
              { type: "string", name: "id", label: "商品 ID", required: true },
              ...bilingualFields,
              {
                type: "string",
                name: "category",
                label: "分类",
                options: ["health", "smart", "care", "service"]
              },
              { type: "number", name: "price", label: "价格 USD", required: true },
              { type: "string", name: "image", label: "图片 URL" }
            ]
          }
        ]
      },
      {
        name: "cyberPets",
        label: "Cyber 电子宠物",
        path: "content",
        format: "json",
        match: {
          include: "cyber-pets"
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "电子宠物列表",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameZh || item?.nameEn || "Cyber Pet" })
            },
            fields: [
              { type: "string", name: "id", label: "宠物 ID", required: true },
              { type: "string", name: "nameZh", label: "中文名称", required: true },
              { type: "string", name: "nameEn", label: "English Name", required: true },
              { type: "string", name: "icon", label: "图标" },
              {
                type: "string",
                name: "palette",
                label: "配色",
                options: ["aurora", "pixel", "moon"]
              },
              { type: "number", name: "price", label: "价格 USD" },
              { type: "number", name: "mood", label: "初始心情" },
              { type: "number", name: "energy", label: "初始能量" }
            ]
          }
        ]
      },
      {
        name: "cyberItems",
        label: "Cyber 皮肤与食物",
        path: "content",
        format: "json",
        match: {
          include: "cyber-items"
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "皮肤与食物列表",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameZh || item?.nameEn || "Cyber Item" })
            },
            fields: [
              { type: "string", name: "id", label: "道具 ID", required: true },
              {
                type: "string",
                name: "type",
                label: "类型",
                options: ["skin", "food"]
              },
              { type: "string", name: "nameZh", label: "中文名称", required: true },
              { type: "string", name: "nameEn", label: "English Name", required: true },
              { type: "number", name: "price", label: "价格 USD" },
              {
                type: "string",
                name: "palette",
                label: "皮肤配色",
                options: ["neon", "pearl"]
              },
              { type: "number", name: "energy", label: "食物增加能量" }
            ]
          }
        ]
      }
    ]
  }
});
