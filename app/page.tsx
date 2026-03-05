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

      <Section id="projects" title="Featured Project">
        <ProjectCard
          title="Deal Scraper App"
          description="A full-stack web application that aggregates time-sensitive restaurant promotions from social media into a centralized interface."
          techStack={[
            "Node.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "APIFY",
            "Hugging Face LLM (Meta Llama 3.1 8B)",
            "Cloudinary",
            "Netlify",
          ]}
          highlights={[
            "Architected a rate-limited scraping pipeline with rule-based parsing to extract time-sensitive deals and structured date ranges",
            "Improved deal detection precision from 52% to 76% by labeling 200 samples and refining classification logic through error analysis",
            "Migrated scheduled scraping to GitHub Actions after diagnosing cold-start delays on Render that prevented reliable job execution",
            "Mitigated third-party CDN rotation and hotlink blocking by re-hosting media via Cloudinary to ensure asset reliability",
            "Integrated LLM inference via Hugging Face with token-efficient prompt design to generate concise deal titles with minimal API costs",
          ]}
          liveLink="https://dealscraperwebpage.netlify.app/?demo=1"
          githubLink="https://github.com/FaizaanRehman/deal-scraper-webpage"
        />
      </Section>

      <Section title="Professional Experience">
        <Experience
          title="UI Programmer"
          company="Dead by Daylight • Behaviour Interactive"
          timeframe="2022 - Present"
          description="Contributed to a live-service multiplayer game with 40k+ concurrent players, implementing production UI systems in Unreal Engine within a large-scale, collaborative codebase."
          highlights={[
            "Optimized rendering of a friends list supporting 2,000 entries by batching updates, reducing worst-case frame stalls from 13.5s to 266ms and single-entry updates from 10s to 4.7ms during profiling.",
            "Converted legacy UI widgets from Scaleform to Unreal Motion Graphics (UMG) as part of a UI modernization effort, contributing to ~100MB memory reduction in the main menu and ~150MB in the HUD",
            "Designed a templated badge rendering framework supporting 90+ characters, reducing required UI widgets from ~360 character-specific instances to 4 reusable templates",
            "Optimized runtime HUD performance by recycling card widgets instead of reconstructing them, reducing allocations from 5 widgets per match to 3 reusable instances",
            "Implemented scalable HUD updates for a new 2v8 multiplayer mode, supporting variable player counts (4–8 players) and expanded match metrics",
            "Improved progression system responsiveness by eliminating interaction delays and automating chained node collection, reducing user idle times by 400–860ms per interaction",
            "Implemented reusable UI interaction systems such as configurable press-and-hold button behavior to support consistent input handling across multiple menu interfaces",
            "Diagnosed system issues by tracing client–backend API requests using Datadog, identifying misconfigured environment settings causing feature failures",
            "Resolved crashes and soft locks caused by lifecycle errors, delegate binding issues, and asynchronous race conditions, improving runtime stability across platforms",
          ]}
          screenshots={[]}
        />
      </Section>

      <Section title="Other Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OtherProjectCard
            title="Food Tracker Android Application"
            description="A mobile app built as part of a software engineering course demonstrating native Android development and lifecycle management."
            techStack={[
              "Kotlin",
              "Android Studio",
              "SQLite (TODO: double check this one)",
            ]}
            demoLink="https://www.youtube.com/watch?v=Kc4xkIg4D3w"
          />

          <OtherProjectCard
            title="Student Housing Rental Website"
            description="A project for student housing ..."
            posterLink="insert image poster here"
          />
        </div>
      </Section>

      <Section title="Skills">
        <Skills
          skills={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Node.js",
            "Unreal Engine",
            "Android Studio",
            "Git",
            "Netlify",
          ]}
        />
      </Section>

      <Section title="Contact">
        <Contact
          email="fhrehman@uwaterloo.ca"
          github="https://github.com/faizaanrehman"
          linkedin="https://www.linkedin.com/in/faizaan-rehman/"
          resume="/resume.pdf"
        />
      </Section>
    </main>
  );
}
