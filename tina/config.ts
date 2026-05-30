import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "b7e0355d-d106-4864-b58d-6c175a4f070f",
  token: "0000000000000000000000000000000000000000",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "pets",
        label: "电子宠物管理",
        path: "content",
        format: "json",
        match: {
          include: "cyber-pets",
        },
        fields: [
          {
            type: "object",
            name: "items",
            label: "宠物列表",
            list: true,
            fields: [
              { type: "string", name: "nameEn", label: "英文名称" },
              { type: "string", name: "icon", label: "图标" },
              { type: "string", name: "palette", label: "配色" },
              { type: "string", name: "image", label: "图片URL" },
              { type: "number", name: "price", label: "价格" },
              { type: "number", name: "mood", label: "心情" },
              { type: "number", name: "energy", label: "能量" },
            ],
          },
        ],
      },
    ],
  },
});
