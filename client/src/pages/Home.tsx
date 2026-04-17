import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/*
  Jeff Batton Life Coaching — Home
  Aesthetic: warm, dimly lit room with a fireplace and a mirror.
  Palette: #0d0d0d midnight · #1a1a1a charcoal · #221912 copper-black
           #d4a853 amber · #e8c56a amber-hi · #f5e6c8 cream · #b87333 copper
  Type:    Playfair Display (display) + Lora (body)
  Motion:  ease [0.25, 0.4, 0.25, 1], 0.7s, respects prefers-reduced-motion
*/

const EASE = [0.25, 0.4, 0.25, 1] as const;
const DUR = 0.7;

const CALENDLY_URL = "https://calendly.com/jcbatton/letstalk";
const MIRROR_URL = "https://calendly.com/d/cxkw-gzv-8kv";

/* --------------------------------------------------------------------------
   Reveal — whileInView fade+rise, SSR-safe (no initial opacity in static HTML
   thanks to the prerender style scrubber)
-------------------------------------------------------------------------- */
function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: DUR, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
   Page
-------------------------------------------------------------------------- */
export default function Home() {
  // Calendly popup script loader
  useEffect(() => {
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  const openCalendly = (e: React.MouseEvent, url = CALENDLY_URL) => {
    const w = (window as unknown as {
      Calendly?: { initPopupWidget: (o: { url: string }) => void };
    }).Calendly;
    if (w?.initPopupWidget) {
      e.preventDefault();
      w.initPopupWidget({ url });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] font-body text-[#f5e6c8] antialiased overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          HERO — transformation-first headline, single CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative flex min-h-screen items-stretch overflow-hidden bg-[#1a1a1a]">
        {/* warm firelight — top-left glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 20%, rgba(212,168,83,0.16) 0%, rgba(212,168,83,0.06) 30%, transparent 60%), radial-gradient(ellipse at 85% 92%, rgba(184,115,51,0.12) 0%, transparent 50%)",
          }}
        />
        {/* vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        {/* noise */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] [background-image:var(--noise)]" />

        <div className="relative z-10 flex w-full flex-col md:flex-row">
          {/* Text column */}
          <div className="flex w-full flex-col justify-center px-6 py-24 md:w-[60%] md:py-0 md:pl-[6vw] md:pr-12">
            <div className="max-w-[640px]">
              <Reveal y={18}>
                <span className="mb-7 block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
                  Jeff Batton · Life Coach
                </span>
              </Reveal>
              <Reveal delay={0.08} y={24}>
                <h1 className="mb-6 font-display text-[clamp(36px,5vw,62px)] font-normal leading-[1.08] tracking-[-0.02em] text-white">
                  The same relationship keeps finding you.
                  <br />
                  <span className="text-[#f5e6c8]/80">Different face. Same ending.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16} y={20}>
                <p className="mb-10 max-w-[540px] font-display text-[20px] italic leading-[1.55] text-[#d4a853] md:text-[22px]">
                  You don't need a guru. You need a mirror.
                </p>
              </Reveal>
              <Reveal delay={0.24} y={16}>
                <a
                  href={CALENDLY_URL}
                  onClick={(e) => openCalendly(e)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-[3px] bg-[#d4a853] px-10 py-[18px] font-body text-[16px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_14px_40px_-8px_rgba(212,168,83,0.45)]"
                >
                  Book a Free Discovery Call
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.3} y={10}>
                <p className="mb-10 font-body text-[14px] tracking-wide text-[#f5e6c8]/50">
                  30 minutes. No pitch. No pressure.
                </p>
              </Reveal>
              <Reveal delay={0.36} y={8}>
                <div className="h-px w-full max-w-[420px] bg-[#d4a853]/35" />
              </Reveal>
              {/* Trust strip */}
              <Reveal delay={0.44} y={8}>
                <p className="mt-7 max-w-[540px] font-body text-[13.5px] leading-[1.75] text-[#f5e6c8]/55 md:text-[14px]">
                  A decade holding the mirror
                  <span className="mx-3 text-[#d4a853]/45">·</span>
                  Author,{" "}
                  <em className="not-italic font-medium text-[#f5e6c8]/75">
                    Grinnin' Like a Jackass Eatin' Briars
                  </em>
                  <span className="mx-3 text-[#d4a853]/45">·</span>
                  Still learning every day
                </p>
              </Reveal>
            </div>
          </div>

          {/* Image column */}
          <div className="relative w-full md:w-[40%]">
            <div className="relative h-[60vw] max-h-[500px] w-full md:h-full md:max-h-none">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hidden h-full w-full object-cover object-[center_top] md:block"
                poster="/images/jeffrey-batton-hero.jpeg"
              >
                <source src="/images/jeffrey-chair.mp4" type="video/mp4" />
              </video>
              <img
                src="/images/jeffrey-batton-hero.jpeg"
                alt="Jeffrey Batton — life coach"
                className="h-full w-full object-cover object-[center_top] md:hidden"
                width={720}
                height={960}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-[180px] bg-gradient-to-r from-[#1a1a1a] to-transparent md:block"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1a1a1a] to-transparent md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          LIGHTHOUSE PULL QUOTE — trust bridge between hero and patterns
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#1a1a1a] px-6 py-14">
        <Reveal>
          <figure className="mx-auto max-w-[820px] text-center">
            <blockquote className="font-display text-[20px] italic leading-[1.55] text-[#f5e6c8]/85 md:text-[24px]">
              "Jeff is like a lighthouse. When I find myself in the middle of the ocean
              alone and afraid, his light helps me find my way."
            </blockquote>
            <figcaption className="mt-4 font-body text-[13px] tracking-[0.12em] uppercase text-[#d4a853]">
              Veronica · Coaching client
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THIS IS FOR YOU IF...
      ═══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#b87333]/15 bg-[#1a1a1a] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <span className="mb-12 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
              This Is For You If...
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mb-10 font-display text-[22px] italic leading-[1.7] text-[#f5e6c8] md:text-[26px]">
              You keep choosing the same person
              <br />
              with a different face.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-10 font-display text-[22px] italic leading-[1.7] text-[#f5e6c8] md:text-[26px]">
              You understand your pattern
              <br />
              but still can't stop repeating it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-14 font-display text-[22px] italic leading-[1.7] text-[#f5e6c8] md:text-[26px]">
              You've done the therapy.
              <br />
              Read the books. And something
              <br />
              is still running the show.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-9 font-display text-[20px] text-[#d4a853] md:text-[22px]">
              That something has a name.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href={CALENDLY_URL}
              onClick={(e) => openCalendly(e)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[3px] border border-[#d4a853] bg-transparent px-9 py-[15px] font-body text-[15px] font-medium tracking-[0.03em] text-[#d4a853] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#d4a853]/10"
            >
              Find Out What It Is →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE LOVE WOUND — narrative + tree moment + definition
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:var(--noise)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 55%, rgba(212,168,83,0.06) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[780px] text-center">
          <Reveal>
            <p className="mb-10 font-display text-[26px] italic leading-[1.5] text-[#f5e6c8] md:text-[36px]">
              You've done the work.
              <br />
              You've read the books.
              <br />
              You've forgiven them.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-12 font-display text-[26px] italic leading-[1.5] text-[#f5e6c8] md:text-[36px]">
              And you still end up
              <br />
              in the same place.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mx-auto mb-16 h-px w-16 bg-[#d4a853]" />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mx-auto mb-4 max-w-[620px] font-body text-[17px] leading-[1.9] text-[#f5e6c8]/80 md:text-[19px]">
              <p className="mb-6">Every pattern you keep repeating.</p>
              <p className="mb-6">Every relationship that ends the same way.</p>
              <p className="mb-8">Every version of yourself you've tried to outrun.</p>
              <p className="mb-6">It all grows from the same root.</p>
              <p className="text-[#f5e6c8]">That root has a name.</p>
            </div>
          </Reveal>
        </div>

        {/* THE TREE MOMENT — full-width, large, animated */}
        <Tree />

        <div className="relative mx-auto max-w-[780px] text-center">
          <Reveal delay={0.1}>
            <h2 className="mb-14 font-display text-[clamp(52px,9vw,90px)] font-normal leading-[1] tracking-[-0.02em] text-[#d4a853]">
              The Love Wound.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mx-auto max-w-[640px] font-body text-[17px] leading-[1.9] text-[#f5e6c8]/80 md:text-[18px]">
              <p className="mb-6">
                You were born as pure love. In your first seven years, you watched mom and dad —
                and you downloaded their behavior as love's definition. That became your
                subconscious program.
              </p>
              <p className="mb-6">
                You've been running it ever since. In every relationship. In every pattern. In the
                choices that don't make sense even to you.
              </p>
              <p className="mb-8 font-display text-[20px] italic text-[#f5e6c8] md:text-[22px]">
                You can't kill a tree by pulling the fruit off of it.
              </p>
              <p>
                The wound is the root.{" "}
                <span className="text-[#d4a853]">Awareness is the axe.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT JEFFREY — portrait + story + a wink
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-[1100px] items-center gap-14 md:grid-cols-[2fr_3fr] md:gap-16">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-3 -top-3 h-full w-full rounded-[3px] border border-[#b87333]/40"
              />
              <div className="relative overflow-hidden rounded-[3px]">
                <img
                  src="/images/jeff-batton-headshot-enhanced.png"
                  alt="Jeffrey Batton, Detroit-based life coach, warm portrait"
                  loading="lazy"
                  width={720}
                  height={960}
                  className="block w-full"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    boxShadow: "inset 0 -140px 100px -40px rgba(13,13,13,0.7)",
                  }}
                />
              </div>
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <span className="mb-2 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
                The Coach
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] leading-[1.1] tracking-[-0.02em] text-white">
                I'm Jeffrey Batton.
              </h2>
            </Reveal>
            {[
              "I'm not going to tell you I have all the answers. I don't believe in gurus — and I'd be the last one to call myself one.",
              "What I am is a Southern storyteller who has sat in his own pig pen, woke up to what got me there, and got up and went home.… to myself.",
              "I've made just about every mistake you can make in a relationship — which is convenient, because it means I tend to recognize yours about three sentences in.",
              "I've spent over a decade holding a mirror for people — not to fix them, but to help them finally see what's actually running the show.",
              "You already know something needs to change. You just haven't seen the root yet.",
              "That's what we do here.",
            ].map((t, i) => (
              <Reveal key={i} delay={0.1 + i * 0.04}>
                <p className="font-body text-[17px] leading-[1.9] text-[#f5e6c8]/85 md:text-[18px]">
                  {t}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE WORK — 3 steps
      ═══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#b87333]/20 bg-[#1a1a1a] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 text-center">
            <Reveal>
              <span className="mb-5 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
                The Work
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mb-3 font-display text-[clamp(32px,4.5vw,52px)] leading-[1.1] tracking-[-0.02em] text-white">
                What actually happens here.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-[16px] text-[#f5e6c8]/55 md:text-[17px]">
                This is not therapy. This is not motivation. This is something different.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-14 md:grid-cols-3 md:gap-12">
            {[
              {
                n: "01",
                h: "You name the pattern.",
                p: "Most people know something is wrong. They just can't see the shape of it. In the first session we name it clearly — no jargon, no diagnosis. Just the truth of what keeps happening and why.",
              },
              {
                n: "02",
                h: "We find the root.",
                p: "The pattern isn't the problem. It's the fruit. Under every repeated behavior, every broken relationship, every version of yourself you've tried to leave behind — there is a root. We go there.",
              },
              {
                n: "03",
                h: "Awareness does the work.",
                p: "You don't have to fix yourself. You have to see yourself clearly. Awareness is the axe at the root. The rest follows naturally — and permanently.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div>
                  <span className="mb-4 block font-display text-[64px] leading-none text-[#d4a853]/60">
                    {s.n}
                  </span>
                  <h3 className="mb-4 font-display text-[24px] text-white">{s.h}</h3>
                  <p className="font-body text-[16px] leading-[1.85] text-[#f5e6c8]/65">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOOK THE CALL — dark CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 text-center md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.09) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[680px]">
          <Reveal>
            <span className="mb-6 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
              Begin
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-5 font-display text-[clamp(32px,4.5vw,52px)] leading-[1.1] text-white">
              Book Your Free Discovery Call
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-12 font-body text-[18px] leading-[1.7] text-[#f5e6c8]/65 md:text-[19px]">
              30 minutes. No pitch. No pressure.
              <br />
              Just an honest conversation about where you are.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={CALENDLY_URL}
              onClick={(e) => openCalendly(e)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[3px] bg-[#d4a853] px-12 py-[20px] font-body text-[17px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_18px_50px_-10px_rgba(212,168,83,0.5)]"
            >
              Book Your Discovery Call →
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mx-auto mt-14 h-px w-16 bg-[#d4a853]/40" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRICING — 3 tiers with visual hierarchy
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#1a1a1a] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="mb-5 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
                Where To Start
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mb-4 font-display text-[clamp(30px,4vw,48px)] leading-[1.1] text-white">
                Three doors. One of them is free.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-body text-[17px] text-[#f5e6c8]/55">
                Every journey begins with one honest conversation.
              </p>
            </Reveal>
          </div>

          {/* TIER 1 — START HERE (flagship free offer) */}
          <Reveal>
            <div className="mx-auto mb-12 max-w-[760px]">
              <div className="relative overflow-hidden rounded-[4px] border border-[#d4a853] bg-gradient-to-br from-[#221912] to-[#1a1a1a] p-8 md:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 0% 0%, rgba(212,168,83,0.14) 0%, transparent 55%)",
                  }}
                />
                <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
                  <div className="flex-1">
                    <span className="mb-3 inline-block rounded-[2px] bg-[#d4a853]/15 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#d4a853]">
                      Start Here
                    </span>
                    <h3 className="mb-2 font-display text-[clamp(28px,3.5vw,38px)] leading-[1.1] text-white">
                      Free Discovery Call
                    </h3>
                    <p className="mb-2 font-display text-[22px] italic text-[#d4a853]">
                      The door is open. Come sit down.
                    </p>
                    <p className="font-body text-[15px] text-[#f5e6c8]/60">
                      30 minutes · No pitch · No pressure
                    </p>
                  </div>
                  <a
                    href={CALENDLY_URL}
                    onClick={(e) => openCalendly(e)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-[#d4a853] px-10 py-[18px] font-body text-[16px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_14px_40px_-8px_rgba(212,168,83,0.45)] md:w-auto"
                  >
                    Book Free Call
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* TIER 2 — GO DEEPER (two session products) */}
          <Reveal>
            <div className="mb-4 text-center">
              <span className="font-body text-[12px] font-medium uppercase tracking-[0.22em] text-[#f5e6c8]/45">
                Or, if you're ready
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mb-3 text-center">
              <h3 className="font-display text-[clamp(24px,3vw,32px)] text-white">Go Deeper</h3>
            </div>
          </Reveal>
          <div className="mb-14 grid gap-6 md:grid-cols-2">
            <OfferCard
              label="Single Session"
              title="Mirror Session"
              price="$250"
              duration="60 minutes"
              body="One wound. One mirror. One session. We go straight to the root. You leave with clarity you didn't walk in with."
              cta="Book Mirror Session"
              href={MIRROR_URL}
              variant="gold"
              popular
              mini={{
                quote: "I could never imagine my life and headspace where they are today.",
                name: "Tyler, Mirror Session client",
              }}
              delay={0}
            />
            <OfferCard
              label="Four Sessions"
              title="4-Session Package"
              price="$850"
              duration="4 × 60 minutes"
              body="For the person who knows one session won't be enough. Four sessions. One root. Complete excavation. This is where real change lives."
              cta="Begin 4-Session Work"
              href={MIRROR_URL}
              variant="outline"
              delay={0.08}
            />
          </div>

          {/* TIER 3 — ROOT WORK flagship */}
          <Reveal>
            <div className="mx-auto max-w-[760px]">
              <div className="relative overflow-hidden rounded-[4px] border-[1.5px] border-[#d4a853] bg-[#221912] p-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] md:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4a853] to-transparent"
                />
                <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-[2px] bg-[#d4a853] px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0d0d0d]">
                        Full Engagement
                      </span>
                      <span className="rounded-[2px] border border-[#d4a853]/50 px-3 py-1 font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#d4a853]">
                        Application Only
                      </span>
                    </div>
                    <h3 className="mb-3 font-display text-[clamp(30px,4vw,44px)] leading-[1.05] text-white">
                      Root Work
                    </h3>
                    <p className="mb-2 font-body text-[22px] font-medium text-[#d4a853]">
                      $12,000{" "}
                      <span className="font-body text-[14px] font-normal text-[#f5e6c8]/50">
                        or $14,000 payment plan
                      </span>
                    </p>
                    <p className="mb-6 font-body text-[13px] text-[#f5e6c8]/45">
                      Full year engagement
                    </p>
                    <p className="font-body text-[16px] leading-[1.85] text-[#f5e6c8]/75">
                      For the person who has tried everything — the therapy, the self-help, the
                      conversations — and the pattern is still there. One coach. One framework.
                      The kind of depth that changes the program, not the behavior on top of it.
                    </p>
                    <p className="mt-4 font-display text-[17px] italic text-[#f5e6c8]/70">
                      Not everyone is accepted. Because not everyone is ready.
                    </p>
                    <div className="mt-6 border-t border-[#d4a853]/20 pt-5 font-display text-[15px] italic leading-[1.7] text-[#f5e6c8]/60">
                      "It was not a fantasy. I'm living proof of what he told me was possible."
                      <div className="mt-2 font-body not-italic text-[12px] text-[#f5e6c8]/40">
                        — <span className="text-[#d4a853]">Mike B., Root Work client</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:jcbatton@gmail.com?subject=Root%20Work%20Application&body=I%20am%20ready%20to%20apply%20for%20Root%20Work."
                      className="block rounded-[3px] bg-[#d4a853] px-6 py-[18px] text-center font-body text-[16px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_14px_40px_-8px_rgba(212,168,83,0.5)]"
                    >
                      Apply for Root Work
                    </a>
                    <p className="text-center font-body text-[12px] text-[#f5e6c8]/40">
                      Every application read personally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COUPLES RETREAT — separate, different buying decision
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-[#b87333]/20 bg-[#0d0d0d] px-6 py-24 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(184,115,51,0.12) 0%, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[900px] text-center">
          <Reveal>
            <span className="mb-5 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
              For Couples
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mb-6 font-display text-[clamp(30px,4.5vw,48px)] leading-[1.1] text-white">
              Couples Intensive Retreat
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 font-body text-[22px] font-medium text-[#d4a853]">
              $4,500 per couple
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mb-8 font-body text-[14px] tracking-wide text-[#f5e6c8]/50">
              Three days · All-inclusive · In-person
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mb-10 max-w-[620px] font-body text-[17px] leading-[1.9] text-[#f5e6c8]/75 md:text-[18px]">
              Two people. Two wounds. One relationship caught in the middle. For couples who are
              done repeating the same fight and ready to find the root — together.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href="mailto:jcbatton@gmail.com?subject=Couples%20Retreat%20Application&body=I%20am%20interested%20in%20the%20Couples%20Intensive%20Retreat."
              className="inline-flex items-center gap-3 rounded-[3px] border-[1.5px] border-[#d4a853] bg-transparent px-10 py-[16px] font-body text-[15px] font-medium tracking-[0.03em] text-[#d4a853] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#d4a853]/10"
            >
              Apply for Retreat →
            </a>
          </Reveal>
          <Reveal delay={0.25}>
            <figure className="mx-auto mt-12 max-w-[580px] border-t border-[#d4a853]/15 pt-8">
              <blockquote className="font-display text-[18px] italic leading-[1.75] text-[#f5e6c8]/70">
                "Two sessions changed the dynamic of our marriage in ways we never imagined."
              </blockquote>
              <figcaption className="mt-3 font-body text-[12px] tracking-[0.12em] uppercase text-[#d4a853]/80">
                Dallas · Couples client
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — no stars, oversized quote marks, monograms
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1a1a1a] px-6 py-28 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:var(--noise)]"
        />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-16 text-center">
            <Reveal>
              <span className="mb-5 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
                What People Say
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(30px,4vw,48px)] text-white">
                Words from the mirror.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name + i} delay={(i % 2) * 0.08}>
                <figure className="relative">
                  <span
                    aria-hidden
                    className="absolute -left-1 -top-5 font-display text-[88px] leading-none text-[#d4a853] md:text-[104px]"
                    style={{ fontStyle: "italic" }}
                  >
                    &ldquo;
                  </span>
                  <blockquote className="pl-8 font-display text-[20px] italic leading-[1.65] text-[#f5e6c8]/95 md:pl-10 md:text-[22px]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 pl-8 md:pl-10">
                    <span
                      aria-hidden
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#d4a853]/40 bg-[#d4a853]/10 font-display text-[16px] text-[#d4a853]"
                    >
                      {t.initials}
                    </span>
                    <span className="font-body text-[14px] leading-[1.4]">
                      <span className="block font-medium text-[#d4a853]">{t.name}</span>
                      <span className="block text-[13px] text-[#f5e6c8]/45">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          THE WORD — prodigal son close
      ═══════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#b87333]/25 bg-[#221912] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <span className="mb-8 inline-block font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#d4a853]">
              A Word
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mb-12 font-display text-[22px] italic leading-[1.7] text-[#f5e6c8] md:text-[28px]">
              <p className="mb-6">
                "There's a story about a son who left home, spent everything he had, and ended up
                in a field — eating the same pea pods he was feeding to the pigs."
              </p>
              <p className="mb-6">
                And it was there — not at the top, not when something good happened — that the
                text says he came to himself.
              </p>
              <p className="mb-6">
                <span className="font-normal not-italic text-[#d4a853]">
                  "Maybe I don't have to live this way."
                </span>
              </p>
              <p className="mb-6">
                That's the moment.
                <br />
                Not rescue. Not money. Not someone saving him.
              </p>
              <p className="mb-6 text-[#d4a853]">Awareness.</p>
              <p className="mb-6">That's the work.</p>
              <p>
                Not becoming someone new.
                <br />
                Coming home to who you already are."
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-auto h-px w-16 bg-[#d4a853]" />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ — with one wink
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h2 className="mb-16 text-center font-display text-[clamp(28px,4vw,44px)] text-white">
              Questions people ask before they call.
            </h2>
          </Reveal>
          <div className="border-t border-[#d4a853]/15">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.03}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — one last door
      ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] px-6 py-24 text-center">
        <Reveal>
          <p className="mx-auto mb-8 max-w-[600px] font-display text-[24px] italic leading-[1.55] text-[#f5e6c8] md:text-[28px]">
            You already know something needs to change.
            <br />
            You just haven't seen the root yet.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <a
            href={CALENDLY_URL}
            onClick={(e) => openCalendly(e)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-[3px] bg-[#d4a853] px-12 py-[20px] font-body text-[17px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_18px_50px_-10px_rgba(212,168,83,0.5)]"
          >
            Book Your Free Discovery Call →
          </a>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-[#d4a853]/25 bg-[#0d0d0d] px-6 pb-14 pt-16">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-3 md:items-center">
          <div className="text-center md:text-left">
            <div className="font-body text-[13px] font-medium uppercase tracking-[0.22em] text-[#f5e6c8]">
              Jeff Batton Life Coaching
            </div>
            <a
              href="mailto:jcbatton@gmail.com"
              className="mt-3 inline-block font-body text-[14px] text-[#d4a853] transition-colors hover:text-[#e8c56a]"
            >
              jcbatton@gmail.com
            </a>
          </div>
          <div className="text-center font-display text-[15px] italic leading-[1.6] text-[#f5e6c8]/45">
            "You don't need a guru.
            <br />
            You need a mirror."
          </div>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="flex gap-6">
              {[
                { href: "https://www.instagram.com/jeffbattoncoaching/", label: "Instagram" },
                { href: "https://www.linkedin.com/in/jeffreybatton/", label: "LinkedIn" },
                { href: "https://www.facebook.com/jeffrey.batton", label: "Facebook" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] font-medium text-[#d4a853] transition-colors hover:text-[#e8c56a]"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <div className="font-body text-[13px] text-[#f5e6c8]/30">
              Existing clients:{" "}
              <a href="/client-portal.html" className="text-[#d4a853] hover:text-[#e8c56a]">
                Access your profile →
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1180px] border-t border-[#d4a853]/10 pt-6 text-center font-body text-[12px] leading-[1.7] text-[#f5e6c8]/30">
          © {new Date().getFullYear()} Jeff Batton Life Coaching LLC. All rights reserved. Works
          virtually, globally. No gurus were harmed in the making of this website.
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════
          STICKY MOBILE CTA
      ═══════════════════════════════════════════════════════════════ */}
      <StickyMobileCTA onOpen={openCalendly} />
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   TREE — animated visual moment. Roots draw from center outward, trunk
   rises, branches extend, fruit appears. Full-width container, large scale.
════════════════════════════════════════════════════════════════════════ */
function Tree() {
  const reduced = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const draw = (delay: number, duration = 1.4) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 },
          transition: { duration, delay, ease: EASE },
        };

  const pop = (delay: number) =>
    reduced
      ? { initial: false as const }
      : {
          initial: { scale: 0, opacity: 0 },
          animate: inView ? { scale: 1, opacity: 0.55 } : { scale: 0, opacity: 0 },
          transition: { duration: 0.5, delay, ease: EASE },
        };

  return (
    <div className="relative my-20 md:my-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="h-[420px] w-[720px] max-w-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,168,83,0.11) 0%, transparent 60%)",
          }}
        />
      </div>
      <figure
        className="relative mx-auto w-full max-w-[560px] px-4"
        aria-label="A tree illustrating the Love Wound framework: roots as the wound, trunk as awareness, fruit as the repeating pattern."
      >
        <svg
          ref={ref}
          viewBox="0 0 400 560"
          className="block h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          {/* soil line */}
          <motion.line
            x1="30"
            y1="280"
            x2="370"
            y2="280"
            stroke="#d4a853"
            strokeWidth="1"
            strokeDasharray="3 5"
            initial={reduced ? false : { opacity: 0 }}
            animate={inView ? { opacity: 0.4 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          />
          {/* ROOTS — draw first (from center outward, downward) */}
          <g
            fill="none"
            stroke="#d4a853"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.72}
          >
            <motion.path d="M200,280 L 200,490" {...draw(0.1, 1.5)} />
            <motion.path d="M200,300 Q 170,340 130,400" {...draw(0.25, 1.3)} />
            <motion.path d="M200,300 Q 230,340 270,400" {...draw(0.25, 1.3)} />
            <motion.path d="M200,360 Q 180,410 155,470" {...draw(0.45, 1.2)} />
            <motion.path d="M200,360 Q 220,410 245,470" {...draw(0.45, 1.2)} />
            <motion.path d="M200,420 Q 190,470 180,520" {...draw(0.65, 1)} />
            <motion.path d="M200,420 Q 210,470 220,520" {...draw(0.65, 1)} />
          </g>
          {/* TRUNK — rises after roots established */}
          <motion.path
            d="M200,280 L 200,100"
            fill="none"
            stroke="#d4a853"
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.9}
            {...draw(1.4, 1.2)}
          />
          {/* BRANCHES — extend outward */}
          <g
            fill="none"
            stroke="#d4a853"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.85}
          >
            <motion.path d="M200,200 Q 170,180 130,140" {...draw(2.0, 0.9)} />
            <motion.path d="M200,200 Q 230,180 270,140" {...draw(2.0, 0.9)} />
            <motion.path d="M200,150 Q 180,135 155,115" {...draw(2.4, 0.7)} />
            <motion.path d="M200,150 Q 220,135 245,115" {...draw(2.4, 0.7)} />
            <motion.path d="M200,110 Q 195,98 185,88" {...draw(2.75, 0.6)} />
            <motion.path d="M200,110 Q 205,98 215,88" {...draw(2.75, 0.6)} />
          </g>
          {/* FRUIT — pop in last */}
          <g fill="#d4a853">
            <motion.circle cx="130" cy="140" r="5" {...pop(3.1)} />
            <motion.circle cx="270" cy="140" r="5" {...pop(3.15)} />
            <motion.circle cx="155" cy="115" r="4" {...pop(3.25)} />
            <motion.circle cx="245" cy="115" r="4" {...pop(3.3)} />
            <motion.circle cx="185" cy="88" r="4" {...pop(3.4)} />
            <motion.circle cx="215" cy="88" r="4" {...pop(3.45)} />
          </g>
          {/* Labels */}
          <motion.text
            x="200"
            y="60"
            textAnchor="middle"
            fill="#f5e6c8"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontSize="13"
            opacity={0.7}
            initial={reduced ? false : { opacity: 0, y: -6 }}
            animate={inView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.7, delay: 3.6, ease: EASE }}
          >
            The pattern
          </motion.text>
          <motion.text
            x="225"
            y="205"
            fill="#f5e6c8"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontSize="13"
            opacity={0.7}
            initial={reduced ? false : { opacity: 0, x: -6 }}
            animate={inView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: -6 }}
            transition={{ duration: 0.7, delay: 1.8, ease: EASE }}
          >
            Awareness
          </motion.text>
          <motion.text
            x="200"
            y="548"
            textAnchor="middle"
            fill="#f5e6c8"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontSize="13"
            opacity={0.7}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={inView ? { opacity: 0.7, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
          >
            The wound
          </motion.text>
        </svg>
      </figure>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   OfferCard — secondary tier cards
════════════════════════════════════════════════════════════════════════ */
function OfferCard({
  label,
  title,
  price,
  duration,
  body,
  cta,
  href,
  variant,
  popular,
  mini,
  delay = 0,
}: {
  label: string;
  title: string;
  price: string;
  duration: string;
  body: React.ReactNode;
  cta: string;
  href: string;
  variant: "gold" | "outline";
  popular?: boolean;
  mini?: { quote: string; name: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="group relative flex h-full flex-col rounded-[4px] border border-[#d4a853]/25 bg-[#221912] p-8 transition-colors duration-300 hover:border-[#d4a853]/60 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] md:p-10"
      >
        {popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#d4a853] px-4 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0d0d0d] shadow-[0_6px_20px_-6px_rgba(212,168,83,0.6)]">
            Most Popular
          </span>
        )}
        <span className="mb-3 inline-block font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d4a853]">
          {label}
        </span>
        <h4 className="mb-3 font-display text-[26px] leading-[1.1] text-white md:text-[28px]">
          {title}
        </h4>
        <div className="mb-1 font-body text-[26px] font-medium text-[#d4a853]">{price}</div>
        <div className="mb-6 font-body text-[13px] text-[#f5e6c8]/45">{duration}</div>
        <div className="mb-8 flex-1 font-body text-[15.5px] leading-[1.8] text-[#f5e6c8]/75">
          {body}
        </div>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={
            variant === "gold"
              ? "block rounded-[3px] bg-[#d4a853] px-6 py-[16px] text-center font-body text-[15px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:bg-[#e8c56a] hover:shadow-[0_10px_30px_-10px_rgba(212,168,83,0.6)]"
              : "block rounded-[3px] border border-[#d4a853] bg-transparent px-6 py-[15px] text-center font-body text-[15px] font-medium tracking-[0.03em] text-[#d4a853] transition-all duration-300 hover:bg-[#d4a853]/10"
          }
        >
          {cta}
        </a>
        {mini && (
          <div className="mt-5 border-t border-[#d4a853]/10 pt-5 font-display text-[14.5px] italic leading-[1.7] text-[#f5e6c8]/60">
            "{mini.quote}"
            <div className="mt-2 font-body not-italic text-[12px] text-[#f5e6c8]/40">
              — <span className="text-[#d4a853]">{mini.name}</span>
            </div>
          </div>
        )}
      </motion.article>
    </Reveal>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   FAQItem — accessible accordion
════════════════════════════════════════════════════════════════════════ */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#d4a853]/15">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-7 text-left font-display text-[19px] text-[#f5e6c8] transition-colors hover:text-white md:text-[21px]"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className={`flex-shrink-0 font-body text-[24px] font-light text-[#d4a853] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="overflow-hidden"
      >
        <p className="pb-7 font-body text-[16px] leading-[1.9] text-[#f5e6c8]/70 md:text-[17px]">
          {a}
        </p>
      </motion.div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   StickyMobileCTA — fixed-bottom bar, appears after hero scroll,
   dismissible, mobile-only (hidden >= md)
════════════════════════════════════════════════════════════════════════ */
function StickyMobileCTA({
  onOpen,
}: {
  onOpen: (e: React.MouseEvent, url?: string) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      // Show after user scrolls ~90% of one viewport height
      const trigger = window.innerHeight * 0.9;
      setVisible(window.scrollY > trigger);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Render nothing until mounted AND until user has scrolled past the hero —
  // keeps prerendered HTML clean (sticky bar doesn't flash on load).
  if (!mounted || dismissed || !visible) return null;

  return (
    <motion.div
      initial={reduced ? false : { y: 100, opacity: 0 }}
      animate={reduced ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
    >
      <div className="border-t border-[#d4a853]/30 bg-[#1a1a1a]/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-[#1a1a1a]/85">
        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            onClick={(e) => onOpen(e)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-[3px] bg-[#d4a853] px-4 py-[14px] text-center font-body text-[15px] font-medium tracking-[0.02em] text-[#0d0d0d] transition-colors duration-300 hover:bg-[#e8c56a]"
          >
            Book a Free Call →
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss booking bar"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[3px] border border-[#d4a853]/30 text-[#d4a853] transition-colors hover:bg-[#d4a853]/10"
          >
            <span aria-hidden className="text-[18px]">
              ×
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    quote:
      "Jeff's guidance has saved my life. I was in therapy for 17 years. I struggled with anxiety, depression and addiction. I could never imagine my life and headspace where they are today. Everybody needs a Jeff in their life.",
    name: "Tyler",
    role: "Mirror Session client",
    initials: "T",
  },
  {
    quote:
      "Jeff is about freedom from our pasts that don't serve us. When I think back to what he told me would be possible — a large part of me felt it might be a fantasy. It was not a fantasy. I'm living proof of what he told me was possible.",
    name: "Mike B.",
    role: "Root Work client",
    initials: "MB",
  },
  {
    quote:
      "Life coaching has been far more transformative for me than counseling. I feel like I'm out here spreading the gospel, telling all my friends to call him. If you're wondering if it's worth it — I promise you, it's worth every penny.",
    name: "Emily",
    role: "Coaching client",
    initials: "E",
  },
  {
    quote:
      "Two sessions changed the dynamic of our marriage in so many positive ways. Before we started talking with Jeffrey, our marriage was in shambles and on the way to divorce court.",
    name: "Dallas",
    role: "Couples client",
    initials: "D",
  },
  {
    quote:
      "Jeff has a way about him to cut to the heart of the matter. It's not always easy but definitely worth it. Having awareness is the first step to transformation — with Jeff this becomes the roadmap of your life.",
    name: "Barbara B.",
    role: "Coaching client",
    initials: "BB",
  },
  {
    quote:
      "Jeff is like a lighthouse. He has helped me navigate through life's challenges and difficult times. His light, his smile, his compassion become the light that helps me find my way.",
    name: "Veronica",
    role: "Coaching client",
    initials: "V",
  },
];

const FAQ = [
  {
    q: "How is this different from therapy?",
    a: "Therapy often focuses on processing what happened. This focuses on the program that's still running because of what happened. We're not looking backward to heal — we're looking at what's operating right now and why. Most people find they move faster here than they ever did in traditional therapy.",
  },
  {
    q: "What actually happens in a session?",
    a: "We talk. But not the way you expect. Jeffrey isn't here to give you advice or tell you what to do. He's here to show you what you can't see yet — the pattern, the root, the moment it all started making sense. Most people leave a session saying they've never thought about themselves that way before.",
  },
  {
    q: "Do I have to cry?",
    a: "Nobody's making you. But I'm not making any promises either.",
  },
  {
    q: "Is this for singles, couples, or both?",
    a: "Both. The Love Wound shows up differently in each — but it shows up everywhere. Singles often come to understand why they keep choosing the same relationship. Couples come to understand why they keep having the same fight.",
  },
  {
    q: "Do I need to be in crisis to come?",
    a: "No. Some people come in crisis. Others come because something quiet is off and they can't name it. The only requirement is that you're ready to look honestly.",
  },
  {
    q: "What kind of results do people get?",
    a: "Read the testimonials on this page. Those are real people, real words. The common thread: they stopped repeating the pattern. Not because they tried harder — because they finally saw the root.",
  },
];
