import Link from "next/link";

export default function StudentHousingProject() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Student Housing Website
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          A full-stack web platform that allows university students to browse
          off-campus housing listings, view property media and documents, and
          chat with property owners in real-time.
        </p>
        {/* Optional Hero Screenshot */}
        <a
          href="/screenshots/student-housing/hero.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/screenshots/student-housing/hero.png"
            alt="Student Housing Website Screenshot"
            className="mt-6 mx-auto rounded-md shadow-lg hover:scale-[1.02] transition"
          />
        </a>
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-neutral-400 leading-relaxed">
          The website allows students to explore off-campus listings with images
          and documents attached to each property. Users can communicate with
          owners via a real-time chat system built with Firebase. Files are
          stored via Google Drive to handle images and documents externally,
          reducing database load and simplifying file management.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="list-disc list-outside pl-5 text-neutral-400 space-y-3">
          <li>
            Built a cloud-based file storage pipeline using the
            <strong> Google Drive API</strong>, storing media externally and
            persisting file URLs in the database to prevent database bloat.
          </li>
          <li>
            Designed a real-time chat system using
            <strong> Firebase Cloud Firestore</strong>, enabling live messaging
            between students and property owners without a custom WebSocket
            backend.
          </li>
          <li>
            Implemented a flexible listing data model allowing each property to
            attach multiple images and supporting documents such as lease
            agreements and floor plans.
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

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <div className="max-w-4xl mx-auto bg-neutral-900 p-6 rounded-2xl">
          <a
            href="/screenshots/student-housing/chatroomModel.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/screenshots/student-housing/chatroomModel.png"
              alt="Student Housing Chat System Model"
              className="rounded-xl shadow-lg w-full hover:scale-[1.02] transition"
            />
          </a>

          <p className="text-sm text-neutral-500 text-center mt-3">
            Firestore NoSQL data model used to represent chat rooms and
            messages.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <a
              href="/screenshots/student-housing/listingView.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/screenshots/student-housing/listingView.png"
                alt="Property Listing Page"
                className="rounded-xl shadow-lg hover:scale-[1.02] transition"
              />
            </a>
            <p className="text-sm text-neutral-500 mt-2 text-center">
              Property listing page displaying images and property details
            </p>
          </div>

          <div className="space-y-2">
            <a
              href="/screenshots/student-housing/chatroomView.png"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/screenshots/student-housing/chatroomView.png"
                alt="Chat Interface"
                className="rounded-xl shadow-lg hover:scale-[1.02] transition"
              />
            </a>
            <p className="text-sm text-neutral-500 mt-2 text-center">
              Real-time messaging interface between students and/or landlords
            </p>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="text-center">
        <Link
          href="/#otherProjects"
          className="px-6 py-3 border border-neutral-700 rounded-xl hover:bg-neutral-900 transition"
        >
          Back to Portfolio
        </Link>
      </section>
    </main>
  );
}
