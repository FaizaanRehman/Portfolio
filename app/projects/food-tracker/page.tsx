import Link from "next/link";

export default function FoodTrackerProject() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Food Tracker Android App
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          An Android application designed to reduce food waste by helping users
          track inventory, receive expiration alerts, discover recipes from
          available ingredients, and locate nearby food donation centres.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <img
            src="/screenshots/food-tracker/HomeView.png"
            alt="Home View"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/food-tracker/ItemDetailView.png"
            alt="Detail View"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/food-tracker/ItemEditView.png"
            alt="Edit View"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/food-tracker/MapsView.png"
            alt="Maps View"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-neutral-400 leading-relaxed">
          Food Tracker is an Android application designed to help users reduce
          household food waste by tracking their inventory and sending
          expiration alerts. The app also allows users to discover recipes based
          on available ingredients through the Spoonacular API and locate nearby
          food banks using Google Maps integration for convenient food
          donations.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-outside pl-5 text-neutral-400 space-y-3">
          <li>
            Built an inventory tracking system allowing users to store
            ingredient details including quantity, expiration date, and images
            using a local <strong>SQLite database</strong>.
          </li>

          <li>
            Implemented a background expiration notification pipeline using{" "}
            <strong>Android WorkManager</strong> to periodically query stored
            ingredient data and dispatch alerts through the{" "}
            <strong>NotificationManager</strong>.
          </li>
          <li>
            Implemented location-based food bank discovery by launching
            <strong>Google Maps via Android Intents</strong> to help users
            quickly find nearby donation centers.
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 text-sm text-neutral-400">
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">Kotlin</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            Android Studio
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">SQLite</span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            WorkManager
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            NotificationManager
          </span>
          <span className="px-2 py-1 bg-neutral-800 rounded-lg">
            Google Maps API
          </span>
        </div>
      </section>

      {/* Architecture */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
        <div className="max-w-4xl mx-auto bg-neutral-900 p-6 rounded-2xl">
          <img
            src="/screenshots/food-tracker/architecture.png"
            alt="Food Tracker Android App Architecture Diagram"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-neutral-500 text-center mt-3">
            High-level architecture showing the interaction between the Android
            UI layer, SQLite data storage, background WorkManager jobs, and
            external APIs.
          </p>
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
