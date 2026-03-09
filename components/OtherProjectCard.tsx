import Link from "next/link";

type OtherProjectCardProps = {
  title: string;
  description: string;
  techStack?: string[];
  highlights?: string[];
  demoLink?: string;
  githubLink?: string;
  detailsLink?: string;
};

export default function OtherProjectCard({
  title,
  description,
  techStack,
  highlights,
  demoLink,
  githubLink,
  detailsLink,
}: OtherProjectCardProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg shadow-black/40 flex flex-col gap-4">
      <h3 className="text-xl md:text-2xl font-semibold text-neutral-100">
        {title}
      </h3>
      <p className="text-neutral-300 leading-relaxed">{description}</p>

      {techStack && (
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-neutral-800 text-neutral-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <ul className="list-disc list-outside px-5 text-neutral-300 mb-4">
        {highlights?.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="flex gap-4 flex-wrap mt-2">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-black rounded-lg hover:opacity-90 transition"
          >
            Demo
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

        {/* Internal App Router Link*/}
        {detailsLink && (
          <Link
            href={detailsLink}
            className="px-4 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition"
          >
            View Details
          </Link>
        )}
      </div>
    </div>
  );
}
