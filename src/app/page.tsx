const ageGroups = [
  {
    title: "Explorers",
    range: "Ages 6–9",
    description:
      "Story-driven, sensory-rich lessons with full audio narration and illustrated activities.",
    highlights: [
      "Animated trail map",
      "Short 5–7 minute segments",
      "Audio-first Scripture reading",
    ],
  },
  {
    title: "Disciples",
    range: "Ages 10–12",
    description:
      "Narrative + inquiry with guided journaling, timelines, and family discussion prompts.",
    highlights: [
      "Three Vows challenge",
      "Quadrilateral practice",
      "Deeper heritage stories",
    ],
  },
  {
    title: "Seekers",
    range: "Ages 13–15",
    description:
      "Critical thinking and identity-forming conversations rooted in Scripture and conscience.",
    highlights: [
      "Discussion-based lessons",
      "Real-world dilemmas",
      "Reflection journals",
    ],
  },
  {
    title: "Ambassadors",
    range: "Ages 16–18",
    description:
      "Seminar-style discipleship that prepares students to lead and mentor younger groups.",
    highlights: [
      "Capstone leadership projects",
      "Primary-source study",
      "Faith Buddy mentorship",
    ],
  },
];

const phases = [
  {
    name: "The Porch",
    detail: "Welcome & prayer",
  },
  {
    name: "The Word",
    detail: "Scripture reading",
  },
  {
    name: "The Room",
    detail: "Interactive activity",
  },
  {
    name: "The Mirror",
    detail: "Reflection & journal",
  },
  {
    name: "The Road",
    detail: "Living It Out",
  },
];

const trailRewards = [
  {
    title: "Grace Points",
    description:
      "Earn GP for showing up and engaging. Grace, not grind — progress without pressure.",
  },
  {
    title: "Badges & Treasure",
    description:
      "Trail, Service, and Heritage badges collected in the Treasure Chest.",
  },
  {
    title: "Story Unlocks",
    description:
      "Every 3 lessons unlock a diary page and a new chapter of RHB’s journey.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--parchment)] text-[var(--driftwood)]">
      <header className="relative overflow-hidden bg-[var(--cypress)]">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_20%,#fff_1px,transparent_1px),radial-gradient(circle_at_80%_30%,#fff_1px,transparent_1px),radial-gradient(circle_at_40%_80%,#fff_1px,transparent_1px)] [background-size:60px_60px,80px_80px,50px_50px]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:flex-row lg:items-center">
          <div className="flex-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--sand)]">
              ✠ Old Florida Faith Learning
            </div>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">
              Roots & Branches
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--sand)]">
              A faith adventure for families, inspired by the 245-mile circuit of
              Rev. Robert Howren Barnett. Grow deep roots in Scripture and stretch
              bold branches into the world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-lg bg-[var(--sunset)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(196,121,58,0.35)] transition hover:translate-y-[-1px]">
                Start the Journey
              </button>
              <button className="rounded-lg border-2 border-[var(--sand)] px-6 py-3 text-sm font-semibold text-[var(--sand)] transition hover:bg-white/10">
                View Curriculum
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[var(--sand)]">
              <div>
                <div className="text-lg font-semibold text-white">17</div>
                Preaching places
              </div>
              <div>
                <div className="text-lg font-semibold text-white">4</div>
                Age tracks
              </div>
              <div>
                <div className="text-lg font-semibold text-white">245</div>
                Miles of trail
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--shell)] via-[var(--sand)] to-[var(--linen)] p-8 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.3em] text-[var(--spanish-moss)]">
                The Way of Grace
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--cypress)]">
                A lesson path built on Wesley’s house of grace.
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--cypress-bark)]">
                Prevenient grace welcomes us at the porch, justifying grace opens
                the door, and sanctifying grace shapes every room within. Each
                week follows this journey from Scripture to living it out.
              </p>
              <div className="mt-6 grid gap-3">
                {phases.map((phase) => (
                  <div
                    key={phase.name}
                    className="flex items-center justify-between rounded-xl border border-[var(--linen)] bg-white/70 px-4 py-3 text-sm"
                  >
                    <span className="font-semibold text-[var(--cypress)]">
                      {phase.name}
                    </span>
                    <span className="text-[var(--spanish-moss)]">
                      {phase.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--sunset)]">
              Mission
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Rooted in Wesleyan grace. Built for families.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--cypress-bark)]">
              Roots & Branches invites children ages 6–18 into Scripture through
              beauty, story, and heritage. Inspired by 150 years of Methodist
              ministry in Florida, the curriculum blends Bible study, real-world
              service, and the Barnett family’s legacy of faith.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--linen)] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--cypress)]">
                  Faith Before Performance
                </h3>
                <p className="mt-2 text-sm text-[var(--cypress-bark)]">
                  Grace Points celebrate participation, not perfection. Every
                  child can thrive at their pace.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--linen)] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-[var(--cypress)]">
                  Heritage as Living Story
                </h3>
                <p className="mt-2 text-sm text-[var(--cypress-bark)]">
                  Students unlock diary pages, Barnett history, and Florida trail
                  stories as they progress.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--linen)] bg-[var(--shell)] p-8 shadow-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--sunset)]">
              Superintendent’s Desk
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--cypress)]">
              Weekly guidance for parents and teachers.
            </h3>
            <p className="mt-4 text-sm leading-6 text-[var(--cypress-bark)]">
              Each week includes a memory verse, living-it-out challenge, and
              dinner table card — designed to spark conversation and family
              discipleship beyond the screen.
            </p>
            <div className="mt-6 rounded-2xl border border-[var(--sand)] bg-[var(--parchment)] p-5 text-sm text-[var(--cypress-bark)]">
              “Ask me about the river Robert Barnett had to swim to get to
              church.”
              <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--spanish-moss)]">
                Dinner Table Card
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--shell)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--sunset)]">
                Curriculum Overview
              </p>
              <h2 className="mt-3 text-3xl font-semibold">
                A year-long journey through the Way of Grace.
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--cypress-bark)]">
                Four quarters map to God’s grace: God Seeks Us, God Saves Us, God
                Grows Us, and God Sends Us. Each unit includes Scripture,
                activities, and a Living It Out challenge.
              </p>
            </div>
            <div className="flex-1 rounded-3xl border border-[var(--linen)] bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                {[
                  "Q1 · God Seeks Us — Prevenient Grace",
                  "Q2 · God Saves Us — Justifying Grace",
                  "Q3 · God Grows Us — Sanctifying Grace",
                  "Q4 · God Sends Us — Social Holiness",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[var(--linen)] bg-[var(--parchment)] px-4 py-3 text-sm text-[var(--cypress)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {ageGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-[var(--linen)] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--cypress)]">
                      {group.title}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--sunset)]">
                      {group.range}
                    </p>
                  </div>
                  <div className="rounded-full border border-[var(--sand)] bg-[var(--parchment)] px-3 py-1 text-xs text-[var(--cypress-bark)]">
                    Age Track
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--cypress-bark)]">
                  {group.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--cypress-bark)]">
                  {group.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[var(--gold)]">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[var(--linen)] bg-white p-8 shadow-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--sunset)]">
              The Circuit Rider Trail
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Gamification that mirrors sanctification.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--cypress-bark)]">
              The trail is an illustrated map of Florida in the 1870s. Students
              ride with RHB, unlock preaching places every three lessons, and
              collect diary pages from his actual journal.
            </p>
            <div className="mt-6 space-y-4">
              {trailRewards.map((reward) => (
                <div
                  key={reward.title}
                  className="rounded-2xl border border-[var(--linen)] bg-[var(--parchment)] px-5 py-4"
                >
                  <h3 className="text-lg font-semibold text-[var(--cypress)]">
                    {reward.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--cypress-bark)]">
                    {reward.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--linen)] bg-gradient-to-br from-[var(--cypress)] via-[var(--hammock)] to-[var(--palmetto)] p-8 text-white shadow-lg">
            <h3 className="text-2xl font-semibold text-white">
              “The trail continues.”
            </h3>
            <p className="mt-4 text-sm leading-6 text-[var(--sand)]">
              RHB’s circuit covered 245 miles, 17 preaching places, and countless
              prayer meetings. Our Trail rewards faithfulness with stories,
              badges, and a shared church journey.
            </p>
            <div className="mt-6 grid gap-4 text-sm">
              {[
                "17 preaching places · 3-week units",
                "Diary pages collected like treasure",
                "Church-wide trail for shared milestones",
                "Family view to keep everyone together",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-[var(--gold)]">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-white/10 p-5 text-xs uppercase tracking-[0.3em] text-[var(--sand)]">
              Grace Points · Badges · Story Unlocks
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--cypress)]">
        <div className="mx-auto max-w-6xl px-6 py-16 text-[var(--sand)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Call to Action
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Bring Roots & Branches to your family or church.
              </h2>
              <p className="mt-4 text-base leading-7">
                We’re building the first public release for First UMC Lakeland.
                Join the early access list to launch with us and help shape the
                journey.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-[var(--sand)]">
                Early Access
              </div>
              <p className="mt-3 text-sm text-[var(--sand)]">
                Request a pilot for your family or education ministry.
              </p>
              <button className="mt-6 w-full rounded-lg bg-[var(--gold)] px-6 py-3 text-sm font-semibold text-[var(--cypress)] shadow-lg shadow-[rgba(212,168,71,0.35)] transition hover:translate-y-[-1px]">
                Request a Pilot
              </button>
              <p className="mt-4 text-xs text-[var(--sand)]/80">
                rootsandbranches@firstumc.org
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--linen)] bg-[var(--shell)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[var(--spanish-moss)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg text-[var(--gold)]">✠</div>
            <div className="text-[var(--cypress)]">
              Roots & Branches · Old Florida · Circa 1870
            </div>
          </div>
          <div className="max-w-md text-xs">
            “I love the Lord with all my heart, and I love God’s church better
            than my own life.” — Rev. Robert Howren Barnett
          </div>
        </div>
      </footer>
    </div>
  );
}
