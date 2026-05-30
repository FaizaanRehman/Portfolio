import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import OtherProjectCard from "@/components/OtherProjectCard";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="featuredProject" title="Featured Project">
        <ProjectCard
          title="Deal Scraper App"
          description="A full-stack web application that aggregates time-sensitive restaurant promotions from social media and presents them in a centralized dashboard for easy discovery."
          techStack={[
            "Node.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "APIFY",
            "Hugging Face LLM",
            "Cloudinary",
            "GitHub Actions",
            "Netlify",
          ]}
          highlights={[
            "Automated Instagram scraping pipeline to detect limited-time restaurant deals",
            "Improved deal detection precision from 52% to 76% through error analysis and rule refinement",
            "Scheduled scraping with GitHub Actions to ensure reliable daily updates",
            "Hosted images on Cloudinary to prevent broken links and ensure dashboard reliability",
            "Generated concise deal titles with HuggingFace LLM for digestible, easy-to-scan summaries",
            "Mobile-first, responsive dashboard with dark/light mode and intuitive deal cards",
          ]}
          liveLink="https://dealscraperwebpage.netlify.app/?demo=1"
          githubLink="https://github.com/FaizaanRehman/deal-scraper-webpage"
          detailsLink="/projects/deal-scraper"
        />
      </Section>

      <Section title="Professional Experience">
        <Experience
          title="UI Programmer"
          company="Behaviour Interactive"
          project="Dead by Daylight"
          timeframe="2022 - Present"
          description="Contributed to a live-service multiplayer game with 40k+ concurrent players, implementing production UI systems in Unreal Engine within a large-scale, collaborative codebase."
          techStack={[
            "C++",
            "Unreal Engine",
            "UMG",
            "ActionScript",
            "Jenkins",
            "DataDog",
          ]}
          highlights={[
            "Optimized rendering of a friends list supporting 2,000 entries by batching updates, reducing worst-case frame stalls from 13.5s to 266ms and single-entry updates from 10s to 4.7ms during profiling.",
            "Converted legacy UI widgets from Scaleform to Unreal Motion Graphics (UMG) as part of a UI modernization effort, contributing to ~100MB memory reduction in the main menu and ~150MB in the HUD",
            "Designed a templated badge rendering framework supporting 90+ characters, reducing required UI widgets from ~360 character-specific instances to 4 reusable templates",
            "Optimized runtime HUD performance by recycling card widgets instead of reconstructing them, reducing allocations from 5 widgets per match to 3 reusable instances",
            "Implemented scalable HUD updates for a new 2v8 multiplayer mode, supporting variable player counts (4–8 players) and expanded match metrics",
            "Improved progression system responsiveness by eliminating interaction delays and automating chained node collection, reducing user idle times by up to 860ms per interaction",
            "Implemented reusable UI interaction systems such as configurable press-and-hold button behavior to support consistent input handling across multiple menu interfaces",
            "Diagnosed system issues by tracing client–backend API requests using Datadog, identifying misconfigured environment settings causing feature failures",
            "Resolved crashes and soft locks caused by lifecycle errors, delegate binding issues, and asynchronous race conditions, improving runtime stability across platforms",
          ]}
          screenshots={[]}
        />
      </Section>

      <Section title="Other Projects" id="otherProjects">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <OtherProjectCard
            title="Food Tracker App"
            description="An Android application designed to reduce food waste by helping users track inventory, receive expiration alerts, discover recipes from available ingredients, and locate nearby food donation centres."
            highlights={[
              "Built a background expiration notification system using Android WorkManager, NotificationManager, and SQLite",
              "Integrated location-based food bank discovery through Google Maps Intents",
            ]}
            techStack={[
              "Kotlin",
              "Android Studio",
              "SQLite",
              "WorkManager",
              "Google Maps Intents",
            ]}
            demoLink="https://youtu.be/Kc4xkIg4D3w?si=6GV5rKVGGI_7xc0A&t=301"
            githubLink="https://github.com/Ckalia11/Food-Expiry-Tracker"
            detailsLink="/projects/food-tracker"
          />

          <OtherProjectCard
            title="Student Housing Rental Website"
            description="A full-stack web platform that allows university students to browse off-campus housing listings, view property media and documents, and communicate with property owners through a real-time messaging system."
            highlights={[
              "Built a cloud file storage system using Django and Google Drive to handle listing media efficiently",
              "Implemented real-time messaging with Firebase Cloud Firestore for live student-owner communication",
            ]}
            techStack={[
              "Python",
              "Django",
              "React",
              "PostgreSQL",
              "Firebase Firstore",
              "Google Drive API",
              "REST APIs",
            ]}
            githubLink="https://github.com/YoungKeyKai/Vesta"
            detailsLink="/projects/student-housing"
          />
        </div>
      </Section>

      <Section title="Skills">
        <Skills
          skills={[
            {
              category: "Languages",
              items: [
                "TypeScript",
                "JavaScript",
                "Java",
                "Python",
                "C/C++",
                "SQL",
                "Kotlin",
                "Groovy",
              ],
            },
            {
              category: "Frameworks",
              items: [
                "React",
                "Next.js",
                "Node.js",
                "Django",
                "Angular",
                "Tailwind CSS",
                "Unreal Engine (UMG)",
              ],
            },
            {
              category: "Tools/Platforms",
              items: [
                "Git",
                "GitHub Actions",
                "Docker",
                "Android Studio",
                "Linux",
                "Netlify",
                "Cloudinary",
              ],
            },
            { category: "AI/ML", items: ["Hugging Face", "Meta Llama 3.1 8B"] },
          ]}
        />
      </Section>

      <Section title="Contact" id="contact">
        <Contact
          email="fhrehman@uwaterloo.ca"
          github="https://github.com/faizaanrehman"
          linkedin="https://www.linkedin.com/in/faizaan-rehman/"
          resume="/FaizaanRehman.pdf"
        />
      </Section>
    </main>
  );
}
