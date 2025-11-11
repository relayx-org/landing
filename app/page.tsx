"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

const features = [
  {
    title: "多样化身份管理",
    description:
      "支持邮箱、Google、Passkey 等登录方式，确保稳定可扩展的用户体系。",
    highlight: "基于 StackAuth 的安全认证与权限控制。",
  },
  {
    title: "灵活套餐与支付",
    description: "通过流量、连接数、隧道数、带宽等维度组合套餐并自动结算。",
    highlight: "内置易支付、BEPUSDT 等多渠道支付方案。",
  },
  {
    title: "全协议隧道转发",
    description: "原生支持 TCP、UDP、WS、TLS 等多种协议与节点组负载均衡。",
    highlight: "可视化管理每条隧道与节点状态。",
  },
];

const solutions = [
  {
    title: "隧道运营商",
    detail: "集中管理多租户套餐、账单与隧道资源，提高交付效率。",
  },
  {
    title: "自建团队",
    detail: "一键部署节点端，统一控制面，覆盖全球线路与分发需求。",
  },
  {
    title: "渠道代理",
    detail: "通过套餐模板与统计报表扩展代理体系，透明掌握营收表现。",
  },
];

const plans = [
  {
    name: "SaaS 版",
    price: "¥36/月",
    description: "云端托管，无需部署，含免费隧道额度。",
    features: ["5 个免费隧道名额", "无需服务器即可使用", "适合个人快速体验"],
    href: "https://www.relayx.cc/home",
    cta: "立即使用",
  },
  {
    name: "个人版",
    price: "¥40/月",
    description: "私有部署版本，完整后台与多用户能力。",
    features: [
      "本地部署，完全掌控数据",
      "提供多种登录方式",
      "覆盖隧道、节点与统计功能",
    ],
    href: "https://docs.relayx.cc/deploy/intro",
    cta: "立即部署",
  },
  {
    name: "商业版",
    price: "¥80/月",
    description: "面向商业化运营的高级方案。",
    features: ["内置支付与营销组件", "支持优惠券与 OpenAPI", "优先级技术支持"],
    href: "https://docs.relayx.cc/deploy/intro",
    cta: "立即部署",
    highlight: true,
  },
];

const faqs = [
  {
    question: "RelayX 提供哪些登录方式？",
    answer: "平台支持邮箱、Google、Passkey 等多种登录方式，方便用户快速接入。",
  },
  {
    question: "系统支持哪些转发协议？",
    answer:
      "RelayX 支持 TCP、UDP、WS 加密、TLS 加密等协议，并可对节点组进行负载均衡。",
  },
  {
    question: "可以体验 Demo 环境吗？",
    answer:
      "可以访问 demo.relayx.cc，使用 demo@relayx.cc 与 hellorelayx 登录体验完整流程。",
  },
];

export default function HomePage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const moonMaskId = `${useId()}-moon-mask`;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const stored = window.localStorage.getItem("relayx-theme");
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        return;
      }
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("relayx-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  const isDark = theme === "dark";
  const toggleLabel = isDark ? "切换为日间模式" : "切换为夜间模式";

  return (
    <main className="page">
      <header className="page__header">
        <Link href="/" className="page__brand">
          <span className="page__brand-logo">
            <Image src="/logo.svg" alt="RelayX" width={32} height={32} />
          </span>
          <span>RelayX</span>
        </Link>
        <nav className="page__nav">
          <Link href="#features">功能</Link>
          <Link href="#solutions">解决方案</Link>
          <Link href="#pricing">价格</Link>
          <Link href="#faqs">常见问题</Link>
        </nav>
        <div className="page__actions">
          <button
            type="button"
            className="button button--ghost button--icon"
            onClick={toggleTheme}
            aria-label={toggleLabel}
            title={toggleLabel}
          >
            {isDark ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 2v2.4M12 19.6V22M4.4 12H2M22 12h-2.4M5.76 5.76 4.06 4.06M19.94 19.94l-1.7-1.7M18.24 5.76l1.7-1.7M4.06 19.94l1.7-1.7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <mask id={moonMaskId}>
                    <rect width="24" height="24" fill="white" />
                    <circle cx="16.8" cy="8.2" r="6.6" fill="black" />
                  </mask>
                </defs>
                <circle
                  cx="12"
                  cy="12"
                  r="7.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="7.2"
                  fill="currentColor"
                  opacity="0.85"
                  mask={`url(#${moonMaskId})`}
                />
                <path
                  d="M18.5 17.2 19.7 18.4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3 19.6 18.4 20.7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <Link className="button button--ghost" href="https://demo.relayx.cc">
            体验 Demo
          </Link>
          <Link className="button" href="https://www.relayx.cc/home">
            进入控制台
          </Link>
        </div>
      </header>
      <section className="hero">
        <div className="hero__content">
          <span className="hero__badge">隧道管理面板</span>
          <h1 className="hero__title">一站式隧道与套餐运营平台</h1>
          <p className="hero__subtitle">
            RelayX
            帮助隧道运营团队在同一个控制平面内完成套餐配置、节点管理、支付结算与统计分析。
          </p>
          <div className="hero__cta">
            <Link
              className="button button--primary"
              href="https://www.relayx.cc/home"
            >
              登录控制台
            </Link>
            <Link className="button button--ghost" href="#features">
              了解更多
            </Link>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>登录方式</dt>
              <dd>邮箱 · Google · Passkey</dd>
            </div>
            <div>
              <dt>支持协议</dt>
              <dd>TCP · UDP · WS · TLS</dd>
            </div>
            <div>
              <dt>核心组件</dt>
              <dd>Next.js · Hono · Go</dd>
            </div>
          </dl>
        </div>
        <div className="hero__panel">
          <div className="hero__panel-card">
            <h2>运营看板</h2>
            <div className="hero__panel-grid">
              <div>
                <span>今日新增用户</span>
                <strong>32</strong>
              </div>
              <div>
                <span>活跃套餐</span>
                <strong>14</strong>
              </div>
              <div>
                <span>隧道在线率</span>
                <strong>99.5%</strong>
              </div>
              <div>
                <span>支付成功率</span>
                <strong>98.7%</strong>
              </div>
            </div>
            <div className="hero__panel-footer">
              <span className="hero__panel-indicator" />
              <span>实时洞察套餐、支付与隧道表现</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="features">
        <div className="section__header">
          <h2>用 RelayX 更聪明地扩展</h2>
          <p>自动化基础设施发布，实时掌握运行状态，并让治理与团队协作同步。</p>
        </div>
        <div className="grid">
          {features.map((feature) => (
            <article key={feature.title} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <span>{feature.highlight}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--alt" id="solutions">
        <div className="section__header">
          <h2>为复杂运营场景而生</h2>
          <p>RelayX 与您的运营模型共成长，可随业务与客户需求扩展到任何环境。</p>
        </div>
        <div className="grid grid--three">
          {solutions.map((solution) => (
            <article key={solution.title} className="card card--outline">
              <h3>{solution.title}</h3>
              <p>{solution.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section__header">
          <h2>开箱即用的高效运营</h2>
          <p>沉淀运营最佳实践，让团队专注扩展业务与渠道合作。</p>
        </div>
        <div className="grid grid--two">
          <article className="card card--highlight">
            <h3>实时统计</h3>
            <p>按用户、节点、隧道等维度提供流量与营收统计，快速定位趋势。</p>
          </article>
          <article className="card card--highlight">
            <h3>自动部署</h3>
            <p>一键部署、升级与卸载节点端，保持线路稳定与最新特性同步。</p>
          </article>
        </div>
      </section>
      <section className="section" id="pricing">
        <div className="section__header">
          <h2>灵活套餐，按需选择</h2>
          <p>选择合适的版本，即刻启用 RelayX 的隧道、支付与统计能力。</p>
        </div>
        <div className="grid grid--three">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`card card--pricing${
                plan.highlight ? " card--highlight" : ""
              }`}
            >
              <div className="card__header">
                <h3>{plan.name}</h3>
                <span className="card__price">{plan.price}</span>
              </div>
              <p>{plan.description}</p>
              <ul className="card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="button button--ghost card__cta" href={plan.href}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--alt" id="faqs">
        <div className="section__header">
          <h2>常见问题</h2>
          <p>解答团队在迁移到 RelayX 过程中最关心的事项。</p>
        </div>
        <div className="faq">
          {faqs.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="cta">
        <div className="cta__content">
          <h2>立即体验 RelayX</h2>
          <p>访问 Demo 环境或联系我们，快速了解完整的隧道与运营能力。</p>
        </div>
        <div className="cta__actions">
          <Link
            className="button button--primary"
            href="https://demo.relayx.cc"
          >
            体验 Demo
          </Link>
          <Link className="button button--ghost" href="mailto:admin@relayx.cc">
            联系我们
          </Link>
          <Link
            className="button button--ghost"
            href="https://t.me/relayx_group"
          >
            Telegram 交流群
          </Link>
          <Link
            className="button button--ghost"
            href="https://t.me/relayx_channel"
          >
            Telegram 频道
          </Link>
        </div>
      </section>
      <footer className="page__footer">
        <span>© {new Date().getFullYear()} RelayX. 保留所有权利。</span>
        <div className="page__footer-links">
          <Link href="https://docs.relayx.org">文档</Link>
          <Link href="mailto:admin@relayx.cc">联系我们</Link>
          <Link href="https://t.me/relayx_group">Telegram 交流群</Link>
          <Link href="https://t.me/relayx_channel">Telegram 频道</Link>
        </div>
      </footer>
    </main>
  );
}
