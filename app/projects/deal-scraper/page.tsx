import Link from "next/link";

export default function DealScraperProject() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Deal Scraper</h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          A full-stack web application that aggregates limited-time restaurant
          deals into a clear, concise dashboard.
        </p>
        <a
          href="/screenshots/deal-scraper/main-view.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/screenshots/deal-scraper/main-view.png"
            alt="Main View"
            className="rounded-xl shadow-lg hover:scale-[1.02] transition"
          />
        </a>
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-neutral-400 leading-relaxed">
          Deal Scraper automatically collects and organizes Instagram posts from
          restaurants and food influencers to highlight limited-time deals.
          Users can quickly browse active deals on a mobile-first dashboard with
          image previews, concise LLM-generated titles, and visual badges for
          special properties. The system is fully automated, cost-efficient, and
          optimized for reliability and accessibility.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="list-disc list-outside pl-5 text-neutral-400 space-y-3">
          <li>
            Architected a rate-limited scraping pipeline with rule-based parsing
            to extract time-sensitive deals and structured date ranges
          </li>
          <li>
            Improved deal detection precision from <strong>52% to 76%</strong>{" "}
            by labeling 200 samples and refining classification logic through
            error analysis
          </li>
          <li>
            Migrated scheduled scraping to <strong>GitHub Actions</strong> after
            diagnosing cold-start delays on Render that prevented reliable job
            execution
          </li>
          <li>
            Mitigated third-party CDN rotation and hotlink blocking by
            re-hosting media via <strong>Cloudinary</strong> to ensure asset
            reliability
          </li>
          <li>
            Integrated <strong>LLM inference</strong> via{" "}
            <strong>Hugging Face (Meta Llama 3.1 8B)</strong> with
            token-efficient prompt design to generate concise deal titles with
            minimal API costs
          </li>
          <li>
            Designed a database schema with <strong>Prisma/PostgreSQL</strong>{" "}
            to store deals persistently and support efficient querying and
            filtering
          </li>
          <li>
            Dynamic, mobile-first styling with dark/light mode to improve
            usability and user comprehension
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">React</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Next.js</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            Tailwind CSS
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Node.js</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            PostgreSQL (Prisma)
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            GitHub Actions
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Netlify</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            Cloudinary
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            HuggingFace
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            LLM Inference
          </span>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <div className="max-w-4xl mx-auto bg-neutral-900 p-6 rounded-2xl">
          <a
            href="/screenshots/food-tracker/architecture.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/screenshots/deal-scraper/architecture.png"
              alt="Deal Scraper Architecture Diagram"
              className="rounded-xl shadow-lg w-full hover:scale-[1.02] transition"
            />
          </a>
          <p className="text-sm text-neutral-500 text-center mt-3">
            High-level architecture of the Deal Scraper system, showing scraping
            pipeline, database storage, and frontend dashboard.
          </p>
        </div>
      </section>

      {/* Back Link */}
      <section className="text-center">
        <Link
          href="/#featuredProject"
          className="px-6 py-3 border border-neutral-700 rounded-xl hover:bg-neutral-900 transition"
        >
          Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
