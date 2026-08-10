import Link from "next/link";

const workSamples = [
  {
    type: "video",
    title: "Lobby Player Tags",
    description:
      "Player tags that track each character's world position in real-time.",
    src: "/videos/dead-by-daylight/lobby-player-tags.mp4",
  },
  {
    type: "video",
    title: "Effect Cards",
    description:
      "Animated cards in HUD that surface gameplay effects and timers.",
    src: "/videos/dead-by-daylight/effect-cards.mp4",
  },
  {
    type: "video",
    title: "Tiered Character Badges",
    description:
      "Templated badge system supporting multiple variations for each character.",
    src: "/videos/dead-by-daylight/tiered-badges.mp4",
  },
  {
    type: "video",
    title: "Skill Unlock Notification",
    description: "Reusable HUD notification system for conveying match events.",
    src: "/videos/dead-by-daylight/skill-unlock-notification.mp4",
  },
  {
    type: "image",
    title: "Friends Menu",
    description:
      "List for managing friends, requests, and other social interactions.",
    src: "/screenshots/dead-by-daylight/friends-menu.png",
  },
];

export default function DeadByDaylightExperience() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Dead by Daylight
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Selected examples of my UI work.
        </p>
      </section>

      {/* UI Work */}
      <section className="space-y-8 mb-12">
        {workSamples.map((item) => (
          <article
            key={item.title}
            className="max-w-3xl mx-auto bg-neutral-900 p-6 rounded-2xl"
          >
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>

            <p className="text-neutral-400 leading-relaxed mb-6">
              {item.description}
            </p>

            <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
              {item.type === "video" ? (
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <a href={item.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* Back Link */}
      <section className="text-center">
        <Link
          href="/#experience"
          className="px-6 py-3 border border-neutral-700 rounded-xl hover:bg-neutral-900 transition"
        >
          Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
