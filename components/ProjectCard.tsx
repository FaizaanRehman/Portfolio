type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  liveLink?: string;
  githubLink?: string;
};

export default function ProjectCard({
  title,
  description,
  techStack,
  highlights,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-black/40 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-100">
          {title}
        </h3>
        <p className="text-neutral-300 mb-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-neutral-800 text-neutral-200 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="list-disc list-outside pl-5 text-neutral-300 mb-4">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="flex gap-4 flex-wrap">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:opacity-90 transition"
            >
              Live App
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
