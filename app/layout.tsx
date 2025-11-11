import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "RelayX | 一站式隧道与套餐运营平台",
  description:
    "帮助隧道运营团队在同一个控制平面内完成套餐配置、节点管理、支付结算与统计分析",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" data-theme="dark">
      <head>
        <script
          defer
          data-domain="relayx.cc"
          src="https://plausible.relayx.cc/js/script.js"
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
