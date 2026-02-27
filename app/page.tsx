import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="projects" title="Featured Project">
        <p>Deal Scraper project content goes here</p>
      </Section>

      <Section title="Professional Experience">
        <p>Dead by Daylight experience goes here</p>
      </Section>

      <Section title="Other Projects">
        <p>Android app and capstone content here.</p>
      </Section>

      <Section title="Skills">
        <p>Skills list here.</p>
      </Section>

      <Section title="Contact">
        <p>Email and links here.</p>
      </Section>
    </main>
  );
}
