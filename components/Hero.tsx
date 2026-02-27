export default function Hero() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Faizaan Rehman
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed">
          Software Engineer specializing in UI and full-stack development.
          Currently a UI programmer in the game industry, seeking opportunities
          to build scalable, user-focused applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/faizaanrehman"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-neutral-700 rounded-xl hover:bg-neutral-900 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
