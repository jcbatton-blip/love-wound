import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/*
  Jeff Batton Life Coaching — Home
  Aesthetic: warm, dimly lit room with a fireplace and a mirror.
  Palette (sacred, directive-locked):
    --bg-deep   #0d0d0d  midnight
    --bg-warm   #1a1a1a  charcoal
    --bg-rise   #221912  warm copper-black
    --amber     #d4a853  candlelight
    --amber-hi  #e8c56a  candlelight, lifted
    --cream     #f5e6c8  text on dark
    --copper    #b87333  dividers, subtle borders
  Type: Playfair Display (display), Lora (body).
  Motion: ease [0.25, 0.4, 0.25, 1], duration 0.7s. Respect prefers-reduced-motion.
*/

const EASE = [0.25, 0.4, 0.25, 1] as const;
const DUR = 0.7;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: DUR, ease: EASE } },
};

const stagger = (delay = 0) => ({
  visible: { transition: { staggerChildren: 0.12, delayChildren: delay } },
});

const CALENDLY_URL = "https://calendly.com/jcbatton/letstalk";
const MIRROR_URL = "https://calendly.com/d/cxkw-gzv-8kv";

function Reveal({
  children,
  delay = 0,
  y = 40,
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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: DUR, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const reduced = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "22%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  // Calendly popup script — keeps the site aesthetic clean (no inline white iframe)
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
    const w = (window as unknown as { Calendly?: { initPopupWidget: (o: { url: string }) => void } }).Calendly;
    if (w?.initPopupWidget) {
      e.preventDefault();
      w.initPopupWidget({ url });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f5e6c8] font-body overflow-x-hidden antialiased">
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-stretch overflow-hidden bg-[#1a1a1a]"
      >
        {/* Atmospheric warm glow — top-left firelight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 20%, rgba(212,168,83,0.14) 0%, rgba(212,168,83,0.05) 30%, transparent 60%), radial-gradient(ellipse at 85% 90%, rgba(184,115,51,0.10) 0%, transparent 50%)",
          }}
        />
        {/* Subtle noise */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "256px",
          }}
        />

        <div className="relative z-10 flex w-full flex-col md:flex-row">
          {/* Text column */}
          <div className="flex w-full flex-col justify-center px-6 py-24 md:w-[60%] md:py-0 md:pl-[6vw] md:pr-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger()}
              className="max-w-[640px]"
            >
              <motion.span
                variants={fadeUp}
                className="mb-8 block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]"
              >
                Jeff Batton Life Coaching
              </motion.span>
              <motion.h1
                variants={fadeUp}
                className="mb-7 font-display text-[clamp(38px,5vw,66px)] font-normal leading-[1.08] tracking-[-0.02em] text-white"
              >
                You don't need a guru.
                <br />
                You need a mirror.
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mb-10 max-w-[520px] font-body text-[18px] italic leading-[1.6] text-[#f5e6c8]/75 md:text-[20px]"
              >
                The relationship that's been breaking your heart is the one you have with yourself.
              </motion.p>
              <motion.div variants={fadeUp} className="mb-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-[3px] bg-[#d4a853] px-10 py-[18px] font-body text-[16px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_14px_40px_-8px_rgba(212,168,83,0.45)]"
                >
                  Book a Free Discovery Call
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="mb-12 font-body text-[14px] tracking-wide text-[#f5e6c8]/50"
              >
                30 minutes. No pitch. No pressure.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="h-px w-full max-w-[420px] bg-[#d4a853]/40"
              />
            </motion.div>
          </div>

          {/* Image column with parallax */}
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative w-full md:w-[40%]"
          >
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
                alt="Jeffrey Batton — Life Coach"
                className="h-full w-full object-cover object-[center_top] md:hidden"
                width={720}
                height={960}
              />
              {/* Left fade into charcoal */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-[160px] bg-gradient-to-r from-[#1a1a1a] to-transparent md:block"
              />
              {/* Bottom fade for mobile */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1a1a] to-transparent md:hidden"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ANCHOR COPY
      ══════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] px-6 py-10">
        <Reveal>
          <p className="mx-auto max-w-[720px] text-center font-body text-[17px] leading-[1.75] text-[#f5e6c8] md:text-[18px]">
            If you've done the therapy, read the books, and still keep repeating the same patterns
            with different people — you're in the right place. This is one-on-one coaching that
            goes to the root.
          </p>
        </Reveal>
      </section>

      {/* ══════════════════════════════════════
          THIS IS FOR YOU IF...
      ══════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <span className="mb-12 inline-block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]">
              This Is For You If...
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mb-10 font-display text-[22px] italic leading-[1.8] text-[#f5e6c8] md:text-[26px]">
              You keep choosing the same person
              <br />
              with a different face.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-10 font-display text-[22px] italic leading-[1.8] text-[#f5e6c8] md:text-[26px]">
              You understand your pattern
              <br />
              but still can't stop repeating it.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mb-14 font-display text-[22px] italic leading-[1.8] text-[#f5e6c8] md:text-[26px]">
              You've done the therapy.
              <br />
              Read the books. And something
              <br />
              is still running the show.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mb-10 font-display text-[20px] text-[#d4a853] md:text-[22px]">
              That something has a name.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[3px] bg-[#d4a853] px-9 py-[17px] font-body text-[15px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_14px_40px_-8px_rgba(212,168,83,0.45)]"
            >
              Find Out What It Is →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          THE LOVE WOUND
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "256px",
          }}
        />
        <div className="relative mx-auto max-w-[780px] text-center">
          <Reveal>
            <p className="mb-10 font-display text-[26px] italic leading-[1.55] text-[#f5e6c8] md:text-[36px]">
              You've done the work.
              <br />
              You've read the books.
              <br />
              You've forgiven them.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-12 font-display text-[26px] italic leading-[1.55] text-[#f5e6c8] md:text-[36px]">
              And you still end up
              <br />
              in the same place.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mx-auto mb-16 h-px w-16 bg-[#d4a853]" />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mx-auto mb-16 max-w-[620px] font-body text-[17px] leading-[1.95] text-[#f5e6c8]/80 md:text-[19px]">
              <p className="mb-6">Every pattern you keep repeating.</p>
              <p className="mb-6">Every relationship that ends the same way.</p>
              <p className="mb-8">Every version of yourself you've tried to outrun.</p>
              <p className="mb-6">It all grows from the same root.</p>
              <p className="text-[#f5e6c8]">That root has a name.</p>
            </div>
          </Reveal>

          <Tree />

          <Reveal delay={0.1}>
            <h2 className="mb-14 font-display text-[clamp(48px,8vw,80px)] font-normal leading-[1] tracking-[-0.02em] text-[#d4a853]">
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

      {/* ══════════════════════════════════════
          ABOUT JEFFREY
      ══════════════════════════════════════ */}
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
                  alt="Jeffrey Batton"
                  loading="lazy"
                  width={720}
                  height={960}
                  className="block w-full"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    boxShadow: "inset 0 -120px 80px -40px rgba(13,13,13,0.6)",
                  }}
                />
              </div>
            </div>
          </Reveal>
          <div className="space-y-6">
            <Reveal>
              <span className="mb-2 inline-block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]">
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

      {/* ══════════════════════════════════════
          THE WORK — three steps
      ══════════════════════════════════════ */}
      <section className="border-t border-[#b87333]/20 bg-[#1a1a1a] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-16 text-center">
            <Reveal>
              <span className="mb-5 inline-block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]">
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

      {/* ══════════════════════════════════════
          BOOK THE CALL — CTA block (Calendly popup)
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 text-center md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.08) 0%, transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[680px]">
          <Reveal>
            <span className="mb-6 inline-block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]">
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

      {/* ══════════════════════════════════════
          OFFERS / PRICING
      ══════════════════════════════════════ */}
      <section className="relative bg-[#1a1a1a] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-14 text-center">
            <Reveal>
              <h2 className="mb-4 font-display text-[clamp(30px,4vw,48px)] leading-[1.1] text-white">
                Where would you like to start?
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-body text-[17px] text-[#f5e6c8]/55">
                Every journey begins with one honest conversation.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <OfferCard
              label="Discovery Call"
              title="Let's Talk"
              price="Free"
              duration="30 minutes"
              body="You feel it. You just can't name it yet. 30 minutes. No pitch. No pressure. Just a real conversation to find out if this mirror is the right one for you."
              cta="Let's Talk"
              href={CALENDLY_URL}
              variant="outline"
              delay={0}
            />
            <OfferCard
              label="Single Session"
              title="Mirror Session"
              price="$250"
              duration="60 minutes"
              body="One wound. One mirror. One session. We go straight to the root. You leave with clarity you didn't walk in with."
              cta="Book Now"
              href={MIRROR_URL}
              variant="gold"
              mini={{
                quote:
                  "I could never imagine my life and headspace where they are today.",
                name: "Tyler, Mirror Session client",
              }}
              delay={0.08}
            />
            <OfferCard
              label="Deep Work"
              title="4-Session Package"
              price="$850"
              duration="4 × 60 minutes"
              body="For the person who knows one session won't be enough. Four sessions. One root. Complete excavation. This is where real change lives."
              cta="Go Deeper"
              href={MIRROR_URL}
              variant="gold"
              delay={0.16}
            />
          </div>
          <div className="mx-auto mt-6 grid max-w-[780px] gap-6 md:grid-cols-2">
            <OfferCard
              label="Immersive Experience"
              title="Couples Intensive Retreat"
              price="$4,500"
              priceNote="per couple"
              duration="3 days, all-inclusive"
              body={
                <>
                  Two people. Two wounds. One relationship caught in the middle.
                  <br />
                  <br />
                  This three-day immersive experience is designed for couples who are done
                  repeating the same fight and ready to find the root — together.
                  <br />
                  <br />
                  All-inclusive. In-person. Transformative.
                </>
              }
              cta="Apply for the Retreat"
              href="mailto:jcbatton@gmail.com?subject=Couples%20Retreat%20Application&body=I%20am%20interested%20in%20the%20Couples%20Intensive%20Retreat."
              variant="outline"
              mini={{
                quote:
                  "Two sessions changed the dynamic of our marriage in ways we never imagined.",
                name: "Dallas, Couples client",
              }}
              delay={0}
            />
            <OfferCard
              label="Full Engagement"
              badge="By Application Only"
              title="Root Work"
              price="$12,000"
              priceNote="or $14,000 payment plan"
              duration="Full year engagement"
              body={
                <>
                  Some wounds don't respond to a session. They've been running too long. They're
                  too woven into the fabric of who you think you are.
                  <br />
                  <br />
                  Root Work is for the person who has tried everything. The therapy. The
                  self-help. The conversations. And the pattern is still there — older, quieter,
                  but still there.
                  <br />
                  <br />
                  This is a full year. One coach. One framework. The kind of depth that actually
                  changes the program — not just the behavior on top of it.
                  <br />
                  <br />
                  Not everyone is accepted. Because not everyone is ready.
                  <br />
                  <br />
                  If you are — you already know it.
                </>
              }
              cta="Apply Now"
              href="mailto:jcbatton@gmail.com?subject=Root%20Work%20Application&body=I%20am%20ready%20to%20apply%20for%20Root%20Work."
              variant="gold"
              mini={{
                quote: "It was not a fantasy. I'm living proof of what he told me was possible.",
                name: "Mike B., Root Work client",
              }}
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="relative bg-[#0d0d0d] px-6 py-28 md:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "256px",
          }}
        />
        <div className="relative mx-auto max-w-[1180px]">
          <div className="mb-16 text-center">
            <Reveal>
              <span className="mb-5 inline-block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]">
                What People Say
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[clamp(30px,4vw,48px)] text-white">
                Words from the mirror.
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name + i} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-[3px] border border-[#d4a853]/15 border-l-[3px] border-l-[#d4a853] bg-[#1a1a1a] p-10">
                  <div className="mb-4 font-body text-[14px] tracking-[2px] text-[#d4a853]">
                    ★★★★★
                  </div>
                  <p className="flex-1 font-display text-[18px] italic leading-[1.85] text-[#f5e6c8]">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 border-t border-[#d4a853]/10 pt-5">
                    <div className="font-body text-[15px] font-medium text-[#d4a853]">
                      {t.name}
                    </div>
                    <div className="mt-1 font-body text-[13px] text-[#f5e6c8]/50">{t.role}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          A WORD
      ══════════════════════════════════════ */}
      <section className="border-t border-[#b87333]/25 bg-[#221912] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[720px] text-center">
          <Reveal>
            <span className="mb-8 inline-block font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#d4a853]">
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

      {/* ══════════════════════════════════════
          EMAIL CAPTURE — Netlify Forms
      ══════════════════════════════════════ */}
      <EmailCapture />

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] px-6 py-28 md:py-32">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <h2 className="mb-16 text-center font-display text-[clamp(28px,4vw,44px)] text-white">
              Questions people ask before they call.
            </h2>
          </Reveal>
          <div className="border-t border-[#d4a853]/15">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <FAQItem q={f.q} a={f.a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="border-t border-[#d4a853]/25 bg-[#0d0d0d] px-6 py-16">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-3 md:items-center">
          <div className="text-center md:text-left">
            <div className="font-body text-[13px] font-medium uppercase tracking-[0.18em] text-[#f5e6c8]">
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
        <div className="mx-auto mt-12 max-w-[1180px] border-t border-[#d4a853]/10 pt-6 text-center font-body text-[12px] leading-[1.7] text-[#f5e6c8]/25">
          © {new Date().getFullYear()} Jeff Batton Life Coaching LLC. All rights reserved. Works
          virtually, globally.
        </div>
      </footer>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ══════════════════════════════════════════════════════════════════════════ */

function Tree() {
  const reduced = useReducedMotion();
  return (
    <motion.figure
      className="mx-auto mb-16 w-full max-w-[320px]"
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, visible: {} }}
    >
      <svg
        viewBox="0 0 400 520"
        className="block h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="A tree with fruit above ground and deep roots below. The wound is the root; awareness is the axe."
      >
        {/* ground */}
        <line
          x1="40"
          y1="270"
          x2="360"
          y2="270"
          stroke="#d4a853"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.35"
        />
        {/* branches above ground */}
        <motion.g
          fill="none"
          stroke="#d4a853"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.82}
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1 },
          }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <motion.path
            d="M200,270 L 200,90"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: EASE }}
          />
          <motion.path
            d="M200,190 Q 170,170 130,130"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: EASE }}
          />
          <motion.path
            d="M200,190 Q 230,170 270,130"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: EASE }}
          />
          <motion.path
            d="M200,140 Q 180,125 155,105"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          />
          <motion.path
            d="M200,140 Q 220,125 245,105"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: EASE }}
          />
          <motion.path
            d="M200,100 Q 195,88 185,78"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          />
          <motion.path
            d="M200,100 Q 205,88 215,78"
            initial={reduced ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          />
        </motion.g>
        {/* fruit */}
        <g fill="#d4a853" opacity="0.5">
          {[
            { cx: 130, cy: 130, r: 4 },
            { cx: 270, cy: 130, r: 4 },
            { cx: 155, cy: 105, r: 3 },
            { cx: 245, cy: 105, r: 3 },
            { cx: 185, cy: 78, r: 3 },
            { cx: 215, cy: 78, r: 3 },
          ].map((c, i) => (
            <motion.circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              initial={reduced ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 + i * 0.08, ease: EASE }}
            />
          ))}
        </g>
        {/* roots below ground */}
        <g
          fill="none"
          stroke="#d4a853"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.6}
        >
          {[
            "M200,270 L 200,470",
            "M200,290 Q 175,330 140,380",
            "M200,290 Q 225,330 260,380",
            "M200,340 Q 185,390 165,450",
            "M200,340 Q 215,390 235,450",
            "M200,390 Q 195,440 195,490",
            "M200,390 Q 205,440 205,490",
          ].map((d, i) => (
            <motion.path
              key={i}
              d={d}
              initial={reduced ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.2 + i * 0.12, ease: EASE }}
            />
          ))}
        </g>
      </svg>
    </motion.figure>
  );
}

function OfferCard({
  label,
  badge,
  title,
  price,
  priceNote,
  duration,
  body,
  cta,
  href,
  variant,
  mini,
  delay = 0,
}: {
  label: string;
  badge?: string;
  title: string;
  price: string;
  priceNote?: string;
  duration: string;
  body: React.ReactNode;
  cta: string;
  href: string;
  variant: "gold" | "outline";
  mini?: { quote: string; name: string };
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="group flex h-full flex-col rounded-b-[3px] border border-[#d4a853]/20 border-t-[3px] border-t-[#d4a853] bg-[#221912] p-9 transition-colors duration-300 hover:border-[#d4a853]/60 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="mb-3 flex items-center gap-2 font-body text-[12px] font-medium uppercase tracking-[0.15em] text-[#d4a853]">
          <span>{label}</span>
          {badge && (
            <span className="rounded-[2px] bg-[#d4a853]/15 px-2 py-[3px] text-[10px]">
              {badge}
            </span>
          )}
        </div>
        <h3 className="mb-3 font-display text-[26px] leading-[1.1] text-white">{title}</h3>
        <div className="mb-1 font-body text-[22px] font-medium text-[#d4a853]">
          {price}
          {priceNote && (
            <span className="ml-2 font-body text-[13px] font-normal text-[#f5e6c8]/45">
              {priceNote}
            </span>
          )}
        </div>
        <div className="mb-6 font-body text-[13px] text-[#f5e6c8]/45">{duration}</div>
        <div className="mb-8 flex-1 font-body text-[15px] leading-[1.75] text-[#f5e6c8]/70">
          {body}
        </div>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={
            variant === "gold"
              ? "block rounded-[3px] bg-[#d4a853] px-6 py-[15px] text-center font-body text-[15px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:bg-[#e8c56a] hover:shadow-[0_10px_30px_-10px_rgba(212,168,83,0.6)]"
              : "block rounded-[3px] border border-[#d4a853] bg-transparent px-6 py-[14px] text-center font-body text-[15px] font-medium tracking-[0.03em] text-[#d4a853] transition-all duration-300 hover:bg-[#d4a853]/10"
          }
        >
          {cta}
        </a>
        {mini && (
          <div className="mt-5 border-t border-[#d4a853]/10 pt-5 font-display text-[15px] italic leading-[1.7] text-[#f5e6c8]/55">
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

function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // optimistic — Netlify handles it
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#0d0d0d] px-6 py-24 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px",
        }}
      />
      <div className="relative mx-auto max-w-[580px] text-center">
        <Reveal>
          <h2 className="mb-5 font-display text-[clamp(28px,4vw,44px)] leading-[1.1] text-white">
            Get Chapter 4 Free
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-10 font-body text-[17px] leading-[1.75] text-[#f5e6c8]/70 md:text-[18px]">
            The chapter that changes everything.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          {submitted ? (
            <div className="rounded-[3px] border border-[#d4a853]/40 bg-[#d4a853]/10 px-6 py-6 font-display text-[18px] italic text-[#f5e6c8]">
              Thank you. Chapter 4 is on its way.
            </div>
          ) : (
            <form
              name="chapter-4"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="form-name" value="chapter-4" />
              <input
                type="text"
                name="first_name"
                required
                placeholder="Your first name"
                aria-label="First name"
                className="rounded-[3px] border-[1.5px] border-[#d4a853] bg-white/[0.04] px-5 py-[17px] font-body text-[16px] text-[#f5e6c8] placeholder:text-[#f5e6c8]/35 outline-none transition-all focus:border-[#e8c56a] focus:bg-white/[0.07]"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                aria-label="Email address"
                className="rounded-[3px] border-[1.5px] border-[#d4a853] bg-white/[0.04] px-5 py-[17px] font-body text-[16px] text-[#f5e6c8] placeholder:text-[#f5e6c8]/35 outline-none transition-all focus:border-[#e8c56a] focus:bg-white/[0.07]"
              />
              <button
                type="submit"
                disabled={submitting}
                className="rounded-[3px] bg-[#d4a853] px-6 py-[17px] font-body text-[16px] font-medium tracking-[0.03em] text-[#0d0d0d] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#e8c56a] hover:shadow-[0_14px_40px_-8px_rgba(212,168,83,0.45)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send Me Chapter 4"}
              </button>
            </form>
          )}
          <p className="mt-5 font-body text-[13px] text-[#f5e6c8]/35">
            No spam. Ever. Just the chapter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

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
          className={`flex-shrink-0 font-body text-[24px] font-light text-[#d4a853] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
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

/* ══════════════════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════════════════ */

const TESTIMONIALS = [
  {
    quote:
      "Jeff's guidance has saved my life. I was in therapy for 17 years. I struggled with anxiety, depression and addiction. I could never imagine my life and headspace where they are today. Everybody needs a Jeff in their life.",
    name: "Tyler",
    role: "Mirror Session client",
  },
  {
    quote:
      "Jeff is like a lighthouse. He has helped me navigate through life's challenges and difficult times. When I find myself in the middle of the ocean alone and afraid, his light, his smile, his compassion become the light that helps me find my way.",
    name: "Veronica",
    role: "Coaching client",
  },
  {
    quote:
      "Jeff is about freedom from our pasts that don't serve us. When I think back to what he told me would be possible — a large part of me felt it might be a fantasy. It was not a fantasy. I'm living proof of what he told me was possible.",
    name: "Mike B.",
    role: "Root Work client",
  },
  {
    quote:
      "Life coaching has been far more transformative for me than counseling. I feel like I'm out here spreading the gospel, telling all my friends to call him. If you're wondering if it's worth it — I promise you, it's worth every penny.",
    name: "Emily",
    role: "Coaching client",
  },
  {
    quote:
      "Two sessions changed the dynamic of our marriage in so many positive ways. Before we started talking with Jeffrey, our marriage was in shambles and on the way to divorce court.",
    name: "Dallas",
    role: "Couples client",
  },
  {
    quote:
      "Jeff has a way about him to cut to the heart of the matter. It's not always easy but definitely worth it. Having awareness is the first step to transformation — with Jeff this becomes the roadmap of your life.",
    name: "Barbara B.",
    role: "Coaching client",
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
