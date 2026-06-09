// tina/config.ts
import { defineConfig } from "tinacms";
var bilingualFields = [
  { type: "string", name: "nameZh", label: "\u4E2D\u6587\u540D\u79F0", isTitle: true, required: true },
  { type: "string", name: "nameEn", label: "English Name", required: true },
  { type: "string", name: "descZh", label: "\u4E2D\u6587\u63CF\u8FF0" },
  { type: "string", name: "descEn", label: "English Description" }
];
var config_default = defineConfig({
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
        label: "\u7F51\u7AD9\u8BBE\u7F6E / Site Settings",
        path: "content",
        format: "json",
        match: {
          include: "site-settings"
        },
        fields: [
          {
            type: "string",
            name: "theme",
            label: "\u9996\u9875\u98CE\u683C",
            options: ["fresh", "editorial", "compact"]
          },
          { type: "string", name: "heroTitleZh", label: "\u4E2D\u6587\u9996\u9875\u6807\u9898" },
          { type: "string", name: "heroTitleEn", label: "English Hero Title" },
          {
            type: "string",
            name: "paymentMethod",
            label: "\u6536\u6B3E\u65B9\u5F0F",
            options: ["Stripe", "PayPal", "Alipay", "WeChat Pay"]
          },
          { type: "string", name: "paymentAccount", label: "\u8001\u677F\u6536\u6B3E\u8D26\u53F7" }
        ]
      },
      {
        name: "products",
        label: "\u5546\u54C1\u7BA1\u7406 / Products",
        path: "content",
        format: "json",
        match: {
          include: "products"
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "\u5546\u54C1\u5217\u8868",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameZh || item?.nameEn || "\u5546\u54C1" })
            },
            fields: [
              { type: "string", name: "id", label: "\u5546\u54C1 ID", required: true },
              ...bilingualFields,
              {
                type: "string",
                name: "category",
                label: "\u5206\u7C7B",
                options: ["health", "smart", "care", "service"]
              },
              { type: "number", name: "price", label: "\u4EF7\u683C USD", required: true },
              { type: "string", name: "image", label: "\u56FE\u7247 URL" }
            ]
          }
        ]
      },
      {
        name: "cyberPets",
        label: "Cyber \u7535\u5B50\u5BA0\u7269",
        path: "content",
        format: "json",
        match: {
          include: "cyber-pets"
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "\u7535\u5B50\u5BA0\u7269\u5217\u8868",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameZh || item?.nameEn || "Cyber Pet" })
            },
            fields: [
              { type: "string", name: "id", label: "\u5BA0\u7269 ID", required: true },
              { type: "string", name: "nameZh", label: "\u4E2D\u6587\u540D\u79F0", required: true },
              { type: "string", name: "nameEn", label: "English Name", required: true },
              { type: "string", name: "icon", label: "\u56FE\u6807" },
              {
                type: "string",
                name: "palette",
                label: "\u914D\u8272",
                options: ["aurora", "pixel", "moon"]
              },
              { type: "number", name: "price", label: "\u4EF7\u683C USD" },
              { type: "number", name: "mood", label: "\u521D\u59CB\u5FC3\u60C5" },
              { type: "number", name: "energy", label: "\u521D\u59CB\u80FD\u91CF" }
            ]
          }
        ]
      },
      {
        name: "cyberItems",
        label: "Cyber \u76AE\u80A4\u4E0E\u98DF\u7269",
        path: "content",
        format: "json",
        match: {
          include: "cyber-items"
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "\u76AE\u80A4\u4E0E\u98DF\u7269\u5217\u8868",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.nameZh || item?.nameEn || "Cyber Item" })
            },
            fields: [
              { type: "string", name: "id", label: "\u9053\u5177 ID", required: true },
              {
                type: "string",
                name: "type",
                label: "\u7C7B\u578B",
                options: ["skin", "food"]
              },
              { type: "string", name: "nameZh", label: "\u4E2D\u6587\u540D\u79F0", required: true },
              { type: "string", name: "nameEn", label: "English Name", required: true },
              { type: "number", name: "price", label: "\u4EF7\u683C USD" },
              {
                type: "string",
                name: "palette",
                label: "\u76AE\u80A4\u914D\u8272",
                options: ["neon", "pearl"]
              },
              { type: "number", name: "energy", label: "\u98DF\u7269\u589E\u52A0\u80FD\u91CF" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
