import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "介绍",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "指令",
      icon: "book",
      prefix: "command/",
      link: "command/",
      children: "structure",
    },
    {
      text: "更新",
      icon: "info",
      prefix: "update/",
      link: "update/",
      children: "structure",
    },
  ],
});
