type Pillar = {
  title: string;
  description: string;
};

type Swatch = {
  name: string;
  hex: string;
  role?: string;
};

type Flavor = {
  name: string;
  description: string;
  primary: string;
  secondary: string;
};

const pillars: Pillar[] = [
  {
    title: "Purity First",
    description:
      "Crystal-clear hydration layered with natural extracts. Every detail is filtered, balanced, and purposeful to keep the experience breathable and pure.",
  },
  {
    title: "Innovative Ease",
    description:
      "The twist-cap ritual is the signature moment—engineered for the satisfying click of freshness, re-sealability, and mindful portability without waste.",
  },
  {
    title: "Quiet Energy",
    description:
      "A measured lift expressed through airy space, confident typography, and subtle gradients that feel refreshing rather than loud.",
  },
];

const neutrals: Swatch[] = [
  { name: "Off-White Mist", hex: "#F6F7F5", role: "Canvas / Packaging" },
  { name: "Misted Gray", hex: "#DCE1E4", role: "Structure" },
  { name: "Charcoal Core", hex: "#1F2327", role: "Typography" },
];

const accents: Swatch[] = [
  { name: "Mint Aqua", hex: "#8FE1D1", role: "Primary Accent" },
  { name: "Tangerine Drift", hex: "#F9B276", role: "Warm Accent" },
];

const flavors: Flavor[] = [
  {
    name: "Lemon-Lime",
    description: "Spritzed citrus zest with chilled sparkle.",
    primary: "#CFF27B",
    secondary: "#8FE1D1",
  },
  {
    name: "Berry Current",
    description: "Vibrant berries with a cooling finish.",
    primary: "#B4B0FF",
    secondary: "#E099CB",
  },
  {
    name: "Mango Rise",
    description: "Sunny mango meets gentle tangerine warmth.",
    primary: "#FFC67A",
    secondary: "#F9B276",
  },
  {
    name: "Cola Quartz",
    description: "Caramel depth balanced with minty clarity.",
    primary: "#3D2C2A",
    secondary: "#8FE1D1",
  },
  {
    name: "Watermelon Mist",
    description: "Juicy melon lifted with misted freshness.",
    primary: "#FF9FA3",
    secondary: "#8FE1D1",
  },
];

const toneGuidelines = [
  {
    title: "Confidently Clear",
    detail:
      "Direct, uncluttered messaging. Lead with benefits, trim the noise, always close with a crisp call to refresh.",
  },
  {
    title: "Lightly Playful",
    detail:
      "A spark of joy—never shouting. Use micro-interactions, short copy rhythms, and agile iconography to suggest motion.",
  },
  {
    title: "Science-Meets-Flavor",
    detail:
      "Balance emotive taste cues with proof points about filtration, ingredients, and functional hydration.",
  },
];

const touchpoints = [
  {
    title: "Packaging",
    body: "Matte off-white bottles with translucent flavor bands. Twist-cap is semi-translucent mint aqua with micro-etched texture for grip.",
  },
  {
    title: "Digital",
    body: "Use generous whitespace, modular cards, and flowing gradients to echo the twist motion in UI states and micro-animations.",
  },
  {
    title: "Retail & OOH",
    body: "Floating product renders on misted neutral backgrounds. Use vertical motion lines pulled from the logo counters to imply upward twist.",
  },
];

const experienceMoments = [
  {
    caption: "Twist-on reveal",
    copy: "A three-step icon sequence demonstrates open, infuse, refresh. Each icon uses the mint linework with a single tangerine point of energy.",
  },
  {
    caption: "Flavor burst gradients",
    copy: "Soft conic gradients radiate from bottle caps to signal flavor intensity. Keep opacity low for breathable depth.",
  },
  {
    caption: "Hydration tracker",
    copy: "Digital experiences use a spiral progress indicator inspired by the twist-cap grooves to track daily hydration goals.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--off-white)] text-[color:var(--charcoal)]">
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-28 pt-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-12 rounded-[2.5rem] border border-[#e2e8ea] bg-white/70 p-10 shadow-[0_40px_80px_-60px_rgba(31,35,39,0.45)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e0e6e9] bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[color:var(--charcoal)]/70">
              TwistUp Identity System
            </span>
            <h1 className="text-4xl leading-tight text-[color:var(--charcoal)] sm:text-5xl">
              Flavor in motion.
              <br />
              Twist to awaken every sip.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-[color:var(--charcoal)]/70 sm:text-lg">
              TwistUp is the modern twist-cap beverage celebrating clarity,
              crafted flavor, and mindful energy. The system captures subtle
              motion and breathable balance—purity, innovation, and taste in one
              confident gesture.
            </p>
          </div>
          <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-[2rem] bg-[color:var(--cool-sky)] sm:h-48 sm:w-72">
            <div className="absolute inset-0 translate-y-8 rounded-[50%] bg-gradient-to-br from-white via-transparent to-[color:var(--mint-aqua)] opacity-70 blur-2xl" />
            <div className="relative px-6 py-4">
              <TwistLogo />
            </div>
          </div>
        </header>

        <section className="grid gap-6 rounded-[2rem] border border-[#e2e8ea] bg-white/80 p-8 backdrop-blur-lg sm:grid-cols-3 sm:gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col gap-4">
              <span className="text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--mint-aqua)]">
                {pillar.title}
              </span>
              <p className="text-sm leading-relaxed text-[color:var(--charcoal)]/75">
                {pillar.description}
              </p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 rounded-[2.5rem] border border-[#dde3e5] bg-white/85 p-10 backdrop-blur-xl lg:grid-cols-[1.2fr,1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-[color:var(--charcoal)]">
              Logotype & Mark System
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[color:var(--charcoal)]/75">
              The TwistUp wordmark uses sharp cuts within rounded forms to echo
              the twist-cap grooves. A centered ligature connects the “T” and
              “U” to suggest flow, while the uplifted “Up” leans forward by 5°
              to signal momentum. Supporting marks translate the twist into
              simple linework for flexible use across caps, seals, and UI icons.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-[#e7ecee] bg-gradient-to-br from-white to-[#f3f8f8] p-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--charcoal)]/50">
                    Primary Wordmark
                  </span>
                  <span className="text-xs text-[color:var(--mint-aqua-strong)]">
                    Neutral / Mint
                  </span>
                </div>
                <TwistLogo className="h-14 w-full text-[color:var(--charcoal)]" />
              </div>
              <div className="grid gap-4 rounded-[1.75rem] border border-[#e7ecee] bg-gradient-to-br from-[#e7f5f2] to-white p-6">
                <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--charcoal)]/50">
                  Icon Capsule
                </span>
                <div className="flex items-center gap-5">
                  <TwistGlyph />
                  <p className="text-xs leading-relaxed text-[color:var(--charcoal)]/70">
                    Use at 24px+ on digital surfaces. Rotate 25° for motion
                    states or apply a subtle mint-to-clear gradient for premium
                    packaging foils.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 rounded-[1.75rem] border border-[#e7ecee] bg-white/70 p-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--charcoal)]/50">
              Voice & Copy Rhythm
            </span>
            <div className="flex flex-col gap-5">
              {toneGuidelines.map((item) => (
                <div key={item.title} className="border-l-2 border-[color:var(--mint-aqua)] pl-4">
                  <h3 className="text-sm font-medium text-[color:var(--charcoal)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--charcoal)]/70">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-[2.5rem] border border-[#dde3e5] bg-white/80 p-10 backdrop-blur-xl lg:grid-cols-[1.05fr,1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-[color:var(--charcoal)]">Color System</h2>
            <p className="text-sm leading-relaxed text-[color:var(--charcoal)]/75">
              A limited palette keeps the brand breathable and premium. Neutrals
              provide the base canvas, while mint aqua carries the signature
              freshness. Tangerine is reserved for emphasis moments and flavor
              sparks. Each flavor adds its own secondary hue without disrupting
              the core balance.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {neutrals.map((swatch) => (
                <ColorCard key={swatch.name} swatch={swatch} />
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {accents.map((swatch) => (
                <ColorCard key={swatch.name} swatch={swatch} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-[#e6ecee] bg-white/70 p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--charcoal)]/45">
                Flavor Extensions
              </span>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {flavors.map((flavor) => (
                  <FlavorCard key={flavor.name} flavor={flavor} />
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#e6ecee] bg-gradient-to-r from-white via-[#f4faf8] to-white p-6">
              <p className="text-xs leading-relaxed text-[color:var(--charcoal)]/60">
                Maintain a minimum contrast ratio of 4.5:1 for body copy on
                neutral backgrounds. Mint gradients should never exceed 60%
                opacity to keep the glassy finish intact.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[2.5rem] border border-[#dfe4e6] bg-white/75 p-10 backdrop-blur-xl lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-[color:var(--charcoal)]">Typography</h2>
            <p className="text-sm leading-relaxed text-[color:var(--charcoal)]/75">
              Geist serves as the lead type family. Pair Regular and Medium for
              calm hierarchy; use Mono for technical notes. Set headings at
              tight letter-spacing with generous line-height to maintain
              clarity.
            </p>
            <div className="grid gap-4">
              <TypeBlock
                label="Display"
                sample="TwistUp"
                detail="Geist Medium — 64px, -1% tracking"
              />
              <TypeBlock
                label="Subhead"
                sample="Refresh with a single twist."
                detail="Geist Regular — 24px, +2% tracking"
              />
              <TypeBlock
                label="Body & Notes"
                sample="Purified water | Natural flavors | Lightweight electrolytes"
                detail="Geist Mono — 14px, uppercase"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-[color:var(--charcoal)]/50">
              Tonal Applications
            </h3>
            <div className="grid gap-4">
              {touchpoints.map((tp) => (
                <div
                  key={tp.title}
                  className="rounded-[1.75rem] border border-[#e7ecef] bg-white/90 p-5"
                >
                  <h4 className="text-sm font-medium text-[color:var(--charcoal)]">
                    {tp.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[color:var(--charcoal)]/70">
                    {tp.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-[2.5rem] border border-[#dbe2e4] bg-white/80 p-10 backdrop-blur-xl lg:grid-cols-3">
          {experienceMoments.map((moment) => (
            <div
              key={moment.caption}
              className="flex flex-col gap-4 rounded-[2rem] border border-[#e7ecef] bg-gradient-to-br from-white to-[#f0f6f5] p-6"
            >
              <span className="text-xs uppercase tracking-[0.35em] text-[color:var(--charcoal)]/50">
                {moment.caption}
              </span>
              <p className="text-sm leading-relaxed text-[color:var(--charcoal)]/70">
                {moment.copy}
              </p>
            </div>
          ))}
        </section>

        <footer className="rounded-[2.5rem] border border-[#dfe4e6] bg-white/80 p-10 text-sm text-[color:var(--charcoal)]/70 backdrop-blur-xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#e0e6e9] bg-white px-4 py-2 text-xs uppercase tracking-[0.24em] text-[color:var(--charcoal)]/60">
                Implementation Notes
              </span>
              <p className="mt-4 max-w-2xl leading-relaxed">
                Ensure the twist-cap experience anchors every brand moment:
                rotate icons, animate gradients, and let breathable spacing keep
                the brand confident yet approachable. Sustain a 60/30/10 ratio
                between neutrals, mint, and heat to preserve balance.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-[#dde3e6] bg-white px-4 py-3 text-xs uppercase tracking-[0.35em] text-[color:var(--charcoal)]/55">
              <TwistGlyph className="h-6 w-6 text-[color:var(--mint-aqua)]" />
              TwistUp — Bring Flavor to Life
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function TwistLogo({ className = "w-full" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="10"
        width="308"
        height="100"
        rx="50"
        fill="url(#twistup-glass)"
      />
      <path
        d="M60 74H51L42 44h12l5 19 7-19h11l7 19 5-19h12l-9 30h-9l-6-17-6 17z"
        fill="#1F2327"
      />
      <path
        d="M130 45c-12 0-19 7-19 17 0 10 7 17 18 17 6 0 11-2 14-5v-9h-16v-8h27v22c-6 6-14 11-25 11-18 0-30-12-30-28 0-16 12-28 31-28 9 0 17 3 23 8l-7 9c-4-3-9-6-16-6z"
        fill="#1F2327"
      />
      <path
        d="M175 44h12v16c5-10 14-17 27-16v13c-16-1-27 5-27 23v17h-12V44z"
        fill="#1F2327"
      />
      <path
        d="M226 77.5c0-13.2 10.6-23.5 24.6-23.5 14.9 0 24.5 10.1 24.5 24.2 0 1.5-.1 3-.3 4.4h-36.6c1.4 5.2 6.4 8.4 13.1 8.4 5.2 0 9.4-1.6 13.6-5.1l7 7.4c-5.7 5.5-12.9 8.3-21.4 8.3-15.1 0-24.5-9.5-24.5-23.1zm12.2-4.8h24.8c-1-5.6-5.6-9.3-12.3-9.3-6.6 0-11.4 3.7-12.5 9.3z"
        fill="#1F2327"
      />
      <path
        d="M90 88c0-7 6-12 16-12 5.9 0 11.4 1.8 15 5.2V61h11v49h-11v-4.6c-3.4 3.5-8.8 5.6-15 5.6-10 0-16-5-16-12zm31 .2c0-4.2-3.3-7.1-9.2-7.1-6 0-9.5 2.9-9.5 7.1 0 4 3.4 7 9.5 7 5.6 0 9.2-2.6 9.2-7z"
        fill="url(#twistup-mint)"
      />
      <defs>
        <linearGradient
          id="twistup-glass"
          x1="6"
          y1="10"
          x2="314"
          y2="110"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#E8F6F5" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient
          id="twistup-mint"
          x1="90"
          y1="76"
          x2="121"
          y2="104"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8FE1D1" />
          <stop offset="1" stopColor="#F9B276" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TwistGlyph({ className = "h-12 w-12 text-[color:var(--mint-aqua)]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M20 38c2.5 5.5 8 9 14 9 8 0 14.5-6.4 14.5-14.4 0-6.6-4.5-12.2-10.9-13.9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 12c-8 0-14.5 6.5-14.5 14.4 0 3.6 1.4 6.9 3.6 9.4"
        stroke="url(#twistup-glyph)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="twistup-glyph"
          x1="17.5"
          y1="12"
          x2="40"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8FE1D1" />
          <stop offset="1" stopColor="#F9B276" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ColorCard({ swatch }: { swatch: Swatch }) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.75rem] border border-[#e7ecef] bg-white/90 p-5">
      <div
        className="h-24 rounded-[1.25rem]"
        style={{ backgroundColor: swatch.hex }}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-[color:var(--charcoal)]">
          {swatch.name}
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--charcoal)]/45">
          {swatch.hex}
        </span>
        {swatch.role ? (
          <span className="text-xs text-[color:var(--charcoal)]/60">
            {swatch.role}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function FlavorCard({ flavor }: { flavor: Flavor }) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.5rem] border border-[#e7ecef] bg-white/95 p-4">
      <div className="flex items-center gap-3">
        <div
          className="h-12 w-12 rounded-full border border-white shadow-[0_12px_24px_-16px_rgba(0,0,0,0.3)]"
          style={{
            background: `linear-gradient(135deg, ${flavor.primary}, ${flavor.secondary})`,
          }}
        />
        <div>
          <h4 className="text-sm font-medium text-[color:var(--charcoal)]">
            {flavor.name}
          </h4>
          <p className="text-xs text-[color:var(--charcoal)]/60">
            {flavor.description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/45">
        <span className="rounded-full border border-[#e7ecef] bg-white px-3 py-2 text-center">
          {flavor.primary}
        </span>
        <span className="rounded-full border border-[#e7ecef] bg-white px-3 py-2 text-center">
          {flavor.secondary}
        </span>
      </div>
    </div>
  );
}

function TypeBlock({
  label,
  sample,
  detail,
}: {
  label: string;
  sample: string;
  detail: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.75rem] border border-[#e7ecef] bg-white/90 p-6">
      <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--charcoal)]/45">
        {label}
      </span>
      <span className="text-lg text-[color:var(--charcoal)]">{sample}</span>
      <span className="text-xs text-[color:var(--charcoal)]/60">{detail}</span>
    </div>
  );
}
