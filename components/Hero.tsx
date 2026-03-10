export default function Hero() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Faizaan Rehman
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          Software Developer specializing in UI systems and full-stack
          applications. B.A.Sc. in Computer Engineering from{" "}
          <strong>University of Waterloo</strong>. Currently working as a
          programmer on a live-service multiplayer title.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-6 py-3 border border-neutral-700 rounded-xl hover:bg-neutral-900 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
