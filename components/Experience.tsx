type ExperienceProps = {
  title: string;
  company: string;
  project?: string;
  timeframe?: string;
  description: string;
  highlights: string[];
  techStack?: string[];
  screenshots?: string[]; // URLs of images
  detailsLink?: string;
};

export default function Experience({
  title,
  company,
  project,
  timeframe,
  description,
  highlights,
  techStack,
  screenshots,
  detailsLink,
}: ExperienceProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-black/40 flex flex-col gap-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-1 text-neutral-100">
          {title}
        </h3>

        <div className="text-neutral-400 mb-1 text-sm md:text-base">
          <span className="font-medium text-neutral-100">{company}</span>
          {project && <span className="mx-2">• {project}</span>}
        </div>
        {timeframe && (
          <p className="text-neutral-500 text-sm mb-2">{timeframe}</p>
        )}

        <p className="text-neutral-300 leading-relaxed">{description}</p>
      </div>

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

      {highlights.length > 0 && (
        <ul className="list-disc list-outside pl-5 text-neutral-300 space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      <div className="flex gap-4 flex-wrap">
        {detailsLink && (
          <a
            href={detailsLink}
            className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:opacity-90 transition"
          >
            View UI Work
          </a>
        )}
      </div>

      {screenshots && screenshots.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {screenshots.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Screenshot ${idx + 1} of ${title}`}
              className="ronded-xl border border-neutral-800"
            />
          ))}
        </div>
      )}
    </div>
  );
}
