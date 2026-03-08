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
        <img
          src="/screenshots/food-tracker-hero.png"
          alt="Food Tracker App Screenshot"
          className="mt-6 mx-auto rounded-xl shadow-lg"
        />
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-neutral-400 leading-relaxed">
          Food Tracker allows users to track food items by adding details like
          quantity, expiry dates, and images. The app sends notifications for
          expiring items and lets users discover recipes using their available
          ingredients via the Spoonacular API. Users can also locate nearby food
          banks for donations through Google Maps integration.
        </p>
      </section>

      {/* Technical Highlights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-neutral-400 space-y-2">
          <li>
            Implemented expiration notifications using
            <strong>WorkManager</strong> to periodically query
            <strong>SQLite</strong> inventory data.
          </li>
          <li>
            Integrated location-based food bank discovery via
            <strong>Google Maps Intents</strong> for seamless navigation.
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
            Google Maps API
          </span>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/screenshots/food-tracker-pantry.png"
            alt="Pantry Inventory Screen"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/food-tracker-recipes.png"
            alt="Recipe Discovery Screen"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/screenshots/food-tracker-notification.png"
            alt="Notification Alert"
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
