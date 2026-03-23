import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Платформа", href: "#features" },
  { label: "Олимпиады", href: "#calendar" },
  { label: "Навигатор БВИ", href: "#navigator" },
  { label: "Наставники", href: "#mentors" },
  { label: "Адвокат", href: "#advocate" },
  { label: "Контакты", href: "#contacts" },
];

const FEATURES = [
  {
    icon: "CalendarDays",
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(79,142,255,0.3)",
    label: "01",
    title: "Умный олимп-календарь",
    desc: "Персональный график перечневых олимпиад: Ломоносов, Высшая проба, ПВГ, Турнир им. Ломоносова. Уведомления о регистрации и дедлайнах.",
    tags: ["Ломоносов", "Высшая проба", "ПВГ", "Турнир им. Ломоносова"],
  },
  {
    icon: "Scale",
    color: "from-violet-500 to-purple-700",
    glow: "rgba(168,85,247,0.3)",
    label: "02",
    title: "Олимп-адвокат",
    desc: "Первый в России конструктор юридической защиты прав абитуриента. Готовая жалоба на основе законов РФ за 2 минуты.",
    tags: ["Апелляция", "Жалоба в вуз", "Нарушения приёма"],
  },
  {
    icon: "Trophy",
    color: "from-orange-500 to-amber-500",
    glow: "rgba(255,92,26,0.3)",
    label: "03",
    title: "Навигатор льгот и БВИ",
    desc: "Автоматический расчёт шансов поступления. Введи дипломы и баллы ЕГЭ — узнай, где проходишь без вступительных испытаний.",
    tags: ["МГУ", "ВШЭ", "РЭУ", "РУДН", "МФТИ"],
  },
  {
    icon: "BookOpen",
    color: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    label: "04",
    title: "Комплексная подготовка",
    desc: "Агрегатор лучших бесплатных ресурсов и фондов. Подготовка к олимпиадам уровня МГУ доступна из любого города.",
    tags: ["Ресурсы", "Фонды", "Материалы"],
  },
  {
    icon: "Users",
    color: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
    label: "05",
    title: "Система наставничества",
    desc: "Консультации от студентов-олимпиадников топовых вузов. Наставники — призёры прошлых лет через платформу добро.рф.",
    tags: ["добро.рф", "Призёры", "Консультации"],
  },
  {
    icon: "ShieldCheck",
    color: "from-emerald-500 to-green-600",
    glow: "rgba(16,185,129,0.3)",
    label: "06",
    title: "Кибербезопасность данных",
    desc: "Персональные данные под защитой сертифицированных специалистов. Гарантия конфиденциальности и прозрачность всех процессов.",
    tags: ["Конфиденциальность", "Защита данных"],
  },
];

const OLIMPIADS = [
  { name: "Олимпиада «Ломоносов»", org: "МГУ", date: "Нояб — Март", level: "I уровень", color: "#4f8eff" },
  { name: "Высшая проба", org: "НИУ ВШЭ", date: "Окт — Апрель", level: "I уровень", color: "#a855f7" },
  { name: "Победитель", org: "ПВГ", date: "Нояб — Февр", level: "II уровень", color: "#FF5C1A" },
  { name: "Турнир им. Ломоносова", org: "МГУ", date: "Октябрь", level: "II уровень", color: "#10b981" },
  { name: "Олимпиада МФТИ", org: "МФТИ", date: "Нояб — Март", level: "I уровень", color: "#f59e0b" },
  { name: "Курчатов", org: "НИЯУ МИФИ", date: "Дек — Март", level: "II уровень", color: "#ec4899" },
];

const STATS = [
  { value: "50+", label: "перечневых олимпиад", icon: "Zap" },
  { value: "200+", label: "вузов в базе", icon: "Building2" },
  { value: "2 мин", label: "на жалобу в вуз", icon: "Clock" },
  { value: "100%", label: "бесплатно", icon: "Heart" },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen mesh-bg font-body text-white">

      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060910]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Icon name="Rocket" size={16} className="text-white" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wide">
                взлёт<span className="gradient-text">.рф</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-7">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button className="btn-secondary text-sm py-2 px-5">Войти</button>
              <button className="btn-primary text-sm py-2 px-5">
                Начать бесплатно
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/70 hover:text-white transition-colors"
            >
              <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-[#0a0e1a]/95 backdrop-blur-xl border-t border-white/[0.06] px-4 py-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left py-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button className="btn-secondary text-sm w-full justify-center">Войти</button>
              <button className="btn-primary text-sm w-full justify-center">Начать бесплатно</button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #1E3AFF 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #8B2BFF 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF5C1A 0%, transparent 70%)" }} />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="badge-pill anim-up mb-8" style={{ animationDelay: "0.1s" }}>
              <Icon name="Sparkles" size={12} />
              При поддержке депутата Госдумы К.А. Горячевой
            </div>

            <h1
              className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-6 anim-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="block text-white">Цифровой</span>
              <span className="block gradient-text">навигатор</span>
              <span className="block text-white">в мир вузов</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed mb-10 anim-up"
              style={{ animationDelay: "0.35s" }}
            >
              Единая экосистема для абитуриентов: от выбора олимпиады
              до приказа о зачислении на бюджет. Умный календарь,
              юридическая защита, навигатор льгот и БВИ — всё в одном месте.
            </p>

            <div
              className="flex flex-wrap gap-4 mb-14 anim-up"
              style={{ animationDelay: "0.45s" }}
            >
              <button className="btn-primary text-base">
                <Icon name="Rocket" size={18} />
                Начать бесплатно
              </button>
              <button className="btn-secondary text-base">
                <Icon name="Play" size={18} />
                Смотреть демо
              </button>
            </div>

            <div
              className="flex flex-wrap gap-2 anim-up"
              style={{ animationDelay: "0.55s" }}
            >
              <span className="text-white/30 text-xs font-medium mr-1 self-center">Олимпиады:</span>
              {["Ломоносов", "Высшая проба", "ПВГ", "Турнир им. Ломоносова", "МФТИ", "Курчатов", "РУДН"].map(t => (
                <span key={t} className="olimp-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Floating card */}
        <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 anim-up" style={{ animationDelay: "0.6s" }}>
          <div className="feature-card gradient-border rounded-2xl p-6 w-72 animate-float">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs text-white/40 font-medium">Твой прогресс</span>
              <span className="badge-pill text-xs">✓ Активен</span>
            </div>
            <div className="space-y-4">
              {[
                { label: "Олимпиада «Ломоносов»", status: "Регистрация", color: "#4f8eff", pct: 70 },
                { label: "Высшая проба ВШЭ", status: "Подготовка", color: "#a855f7", pct: 45 },
                { label: "БВИ МГУ", status: "Проходишь!", color: "#10b981", pct: 95 },
              ].map(item => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-white/80 font-medium">{item.label}</span>
                    <span style={{ color: item.color }}>{item.status}</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/50">3 события на этой неделе</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs">Листай вниз</span>
          <Icon name="ChevronDown" size={16} className="text-white/30" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="stat-card rounded-2xl p-6 text-center anim-up" style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="w-10 h-10 rounded-xl gradient-bg mx-auto mb-3 flex items-center justify-center">
                  <Icon name={s.icon} size={18} className="text-white" />
                </div>
                <div className="font-heading text-3xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-pill mx-auto mb-4">
              <Icon name="Layers" size={12} />
              Возможности платформы
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Всё, что нужно для <span className="gradient-text">победы</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Шесть инструментов, которые закрывают весь путь абитуриента от первого шага до зачисления
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f, i) => (
              <div key={f.label} className="feature-card gradient-border rounded-2xl p-7 anim-up" style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center`}
                    style={{ boxShadow: `0 8px 24px ${f.glow}` }}
                  >
                    <Icon name={f.icon} size={22} className="text-white" />
                  </div>
                  <span className="font-heading text-4xl font-bold text-white/[0.06]">{f.label}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{f.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map(t => (
                    <span key={t} className="olimp-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALENDAR ── */}
      <section id="calendar" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, #1E3AFF 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-2/5">
              <div className="badge-pill mb-4">
                <Icon name="CalendarDays" size={12} />
                Олимп-календарь
              </div>
              <h2 className="font-heading text-4xl font-bold text-white mb-5">
                Не пропусти ни одной <span className="gradient-text">регистрации</span>
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-8">
                Система сама пришлёт уведомление о старте регистрации, промежуточных этапах
                и дедлайне загрузки работ. Персональный график для каждого предмета.
              </p>
              <button className="btn-primary">
                <Icon name="Bell" size={18} />
                Подключить уведомления
              </button>
            </div>

            <div className="lg:w-3/5 w-full">
              <div className="feature-card gradient-border rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <span className="font-heading font-semibold text-white">Ближайшие олимпиады</span>
                  <div className="flex gap-2">
                    <button className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors">
                      <Icon name="ChevronLeft" size={14} className="text-white/60" />
                    </button>
                    <button className="w-7 h-7 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] flex items-center justify-center transition-colors">
                      <Icon name="ChevronRight" size={14} className="text-white/60" />
                    </button>
                  </div>
                </div>
                <div className="divide-y divide-white/[0.04]">
                  {OLIMPIADS.map((o) => (
                    <div key={o.name} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors group">
                      <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: o.color }} />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-white text-sm truncate">{o.name}</div>
                        <div className="text-xs text-white/40 mt-0.5">{o.org} · {o.date}</div>
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="olimp-tag">{o.level}</span>
                        <Icon name="ChevronRight" size={14} className="text-white/20 group-hover:text-white/50 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 py-4 border-t border-white/[0.06]">
                  <button className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1.5 font-medium">
                    Все олимпиады <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NAVIGATOR ── */}
      <section id="navigator" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="feature-card gradient-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 opacity-10 blur-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #FF5C1A 0%, transparent 70%)" }} />
            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="badge-pill mb-4">
                  <Icon name="Trophy" size={12} />
                  Навигатор льгот и БВИ
                </div>
                <h2 className="font-heading text-4xl font-bold text-white mb-4">
                  Узнай свои шансы на <span className="gradient-text-amber">бюджет</span> за минуту
                </h2>
                <p className="text-white/55 text-base leading-relaxed mb-8">
                  Введи свои дипломы олимпиад и баллы ЕГЭ — система автоматически покажет,
                  в каких вузах ты проходишь без вступительных испытаний (БВИ)
                  или получаешь дополнительные 100 баллов.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["МГУ", "ВШЭ", "МФТИ", "РЭУ", "РУДН", "СПбГУ", "МГИМО"].map(v => (
                    <span key={v} className="py-1.5 px-4 rounded-xl text-sm font-semibold text-white/80"
                      style={{ background: "rgba(255,92,26,0.1)", border: "1px solid rgba(255,92,26,0.25)" }}>
                      {v}
                    </span>
                  ))}
                </div>
                <button className="btn-primary" style={{ background: "linear-gradient(135deg, #FF5C1A, #FFB800)" }}>
                  <Icon name="Calculator" size={18} />
                  Рассчитать шансы
                </button>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="space-y-3">
                  {[
                    { uni: "МГУ им. Ломоносова", prog: "Мех-мат", status: "БВИ", pct: 98, color: "#10b981" },
                    { uni: "НИУ ВШЭ", prog: "Прикладная математика", status: "БВИ", pct: 95, color: "#10b981" },
                    { uni: "МФТИ", prog: "Физтех", status: "+100 баллов", pct: 78, color: "#4f8eff" },
                    { uni: "РЭУ им. Плеханова", prog: "Экономика", status: "+100 баллов", pct: 85, color: "#4f8eff" },
                    { uni: "РУДН", prog: "Международные отношения", status: "Участник", pct: 55, color: "#f59e0b" },
                  ].map(item => (
                    <div key={item.uni} className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white">{item.uni}</div>
                        <div className="text-xs text-white/40">{item.prog}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-20 bg-white/[0.06] rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                          style={{ background: `${item.color}20`, color: item.color, minWidth: 80, textAlign: "center" as const }}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTORS ── */}
      <section id="mentors" className="py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="badge-pill mx-auto mb-4">
              <Icon name="Users" size={12} />
              Наставничество
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Учись у <span className="gradient-text">призёров</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-base">
              Студенты-олимпиадники топовых вузов помогут пройти этот путь.
              Реализовано совместно с платформой добро.рф
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Алексей К.", uni: "МГУ, мех-мат", olimp: "Ломоносов, I место", subj: "Математика", avatar: "🎓" },
              { name: "Мария С.", uni: "ВШЭ, Экономика", olimp: "Высшая проба, призёр", subj: "Обществознание", avatar: "👩‍🎓" },
              { name: "Дмитрий В.", uni: "МФТИ, Физтех", olimp: "Курчатов, I место", subj: "Физика", avatar: "🔬" },
              { name: "Анна П.", uni: "МГИМО, МО", olimp: "МГИМО олимп, победитель", subj: "История, Английский", avatar: "🌍" },
            ].map((m, i) => (
              <div key={m.name} className="feature-card gradient-border rounded-2xl p-6 text-center anim-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${0.1 * i}s` }}>
                <div className="w-16 h-16 rounded-2xl gradient-bg mx-auto mb-4 flex items-center justify-center text-2xl">
                  {m.avatar}
                </div>
                <div className="font-heading font-semibold text-white mb-0.5">{m.name}</div>
                <div className="text-xs text-violet-400 mb-3">{m.uni}</div>
                <div className="text-xs text-white/40 mb-3">{m.olimp}</div>
                <div className="olimp-tag inline-block">{m.subj}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="btn-secondary">
              <Icon name="UserPlus" size={18} />
              Найти наставника
            </button>
          </div>
        </div>
      </section>

      {/* ── ADVOCATE ── */}
      <section id="advocate" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="feature-card gradient-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #a855f7 0%, #1E3AFF 100%)" }} />
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #a855f7, #1E3AFF)", boxShadow: "0 8px 32px rgba(168,85,247,0.4)" }}>
                  <Icon name="Scale" size={28} className="text-white" />
                </div>
                <div className="badge-pill mb-4">
                  <Icon name="ShieldCheck" size={12} />
                  Олимп-адвокат
                </div>
                <h2 className="font-heading text-4xl font-bold text-white mb-4">
                  Первый в России <span className="gradient-text">юридический щит</span> абитуриента
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">
                  Если вуз нарушает правила приёма или тебя несправедливо «завалили» на апелляции —
                  бот сформирует готовую жалобу на основе действующих законов РФ всего за 2 минуты.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {["Нарушение порядка приёма", "Апелляция отклонена", "Ошибка в документах", "Неправомерный отказ"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm text-white/60">
                      <Icon name="CheckCircle" size={14} className="text-violet-400 flex-shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
                <button className="btn-primary" style={{ background: "linear-gradient(135deg, #a855f7, #5B21FF)" }}>
                  <Icon name="FileText" size={18} />
                  Составить жалобу
                </button>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-[#0a0e1a] rounded-2xl p-6 border border-white/[0.08] font-mono text-sm">
                  <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06]">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-white/30 text-xs">олимп-адвокат.рф</span>
                  </div>
                  <div className="space-y-3 text-xs leading-relaxed">
                    <div className="text-white/40">// Ситуация: отказ в признании диплома</div>
                    <div><span className="text-violet-400">const</span> <span className="text-white">ситуация</span> <span className="text-white/40">=</span> {"{"}</div>
                    <div className="pl-4 text-white/70">вуз: <span className="text-emerald-400">"МГУ им. Ломоносова"</span>,</div>
                    <div className="pl-4 text-white/70">нарушение: <span className="text-emerald-400">"Отказ в БВИ"</span>,</div>
                    <div className="pl-4 text-white/70">основание: <span className="text-emerald-400">"Приказ №762н"</span></div>
                    <div>{"}"}</div>
                    <div className="mt-3 pt-3 border-t border-white/[0.06]">
                      <span className="text-amber-400">→</span> <span className="text-white/70">Жалоба сформирована: </span>
                      <span className="text-emerald-400">жалоба_МГУ_БВИ.pdf</span>
                    </div>
                    <div className="text-white/30 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Готово за 1 мин 47 сек
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-10 lg:p-16 text-center"
            style={{ background: "linear-gradient(135deg, rgba(30,58,255,0.3) 0%, rgba(91,33,255,0.3) 50%, rgba(139,43,255,0.2) 100%)", border: "1px solid rgba(91,33,255,0.3)" }}>
            <div className="absolute inset-0 opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, #5B21FF 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                Начни путь к бюджету сегодня
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                Присоединяйся к тысячам абитуриентов, которые уже используют взлёт.рф
                для успешного поступления в топовые вузы России
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary text-lg px-8 py-4">
                  <Icon name="Rocket" size={20} />
                  Зарегистрироваться
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  Узнать больше
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <section id="contacts" className="py-20 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                  <Icon name="Rocket" size={16} className="text-white" />
                </div>
                <span className="font-heading text-xl font-bold">взлёт<span className="gradient-text">.рф</span></span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Цифровой навигатор в мир высшего образования. Реализуется при поддержке
                депутата Госдумы К.А. Горячевой и программы «Я в деле».
              </p>
              <div className="flex gap-3">
                {["MessageCircle", "Globe", "Mail"].map(icon => (
                  <button key={icon}
                    className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.1] transition-colors">
                    <Icon name={icon} size={16} className="text-white/60" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Платформа</h4>
              <ul className="space-y-2.5">
                {["Олимп-календарь", "Навигатор БВИ", "Олимп-адвокат", "Подготовка", "Наставничество", "Личный кабинет"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-white mb-4">Поддержка</h4>
              <ul className="space-y-2.5">
                {["Часто задаваемые вопросы", "Написать нам", "Партнёрство", "Политика конфиденциальности", "Условия использования"].map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/25 text-xs">© 2026 взлёт.рф — все права защищены</p>
            <p className="text-white/25 text-xs">При поддержке депутата Госдумы К.А. Горячевой · Программа «Я в деле»</p>
          </div>
        </div>
      </section>
    </div>
  );
}