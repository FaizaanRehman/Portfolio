import Link from "next/link";

export default function StudentHousingProjectt() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Student Housing Website
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          A full-stack web platform for university students to browse off-campus
          housing, view property media and documents, and chat with property
          owners in real time.
        </p>
        {/* Optional Hero Screenshot */}
        <img
          src="/screenshots/student-housing-hero.png"
          alt="Student Housing Website Screenshot"
          className="mt-6 mx-auto rrounded-xl shadow-lg"
        />
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-neutral-400 leading-relaxed">
          The website allows students to explore off-campus listings with images
          and documents attached to each property. Users can communicate with
          owners via a real-time chat system built with Firebase. Google Drive
          is used for file storage to handle images and documents externally,
          reducing database load and simplifying file management.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>
            Implemented cloud file storage using
            <strong>Google Drive API</strong>, storing file URLs in the database
            to reduce bloat.
          </li>
          <li>
            Designed and built a real-time chat system with
            <strong>Firebase Cloud Firestore</strong> for live messaging.
          </li>
          <li>
            Created a flexible data model supporting multiple images and
            documents per property listing.
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Python</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Django</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">React</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            PostgreSQL
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Firebase</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            Google Drive API
          </span>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/screenshots/student-housing-listing.png"
            alt="Property Listing Page"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/student-housing-chat.png"
            alt="Chat Interface"
            className="rounded-xl shadow-lg"
          />
          {/* Optional Architecture Diagram */}
          <img
            src="/screenshots/student-housing-architecture.png"
            alt="Architecture Diagram"
            className="rounded-xl shadow-lg md:col-span-2"
          />
        </div>
      </section>

      {/* Back Link */}
      <section className="text-center">
        <Link
          href="/#OtherProjects"
          className="px-6 py-3 border border-neutral-700 rounded-xl hover:bg-neutral-900 transition"
        >
          Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
