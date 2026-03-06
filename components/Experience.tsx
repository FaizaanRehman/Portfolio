type ExperienceProps = {
  title: string;
  company: string;
  timeframe?: string;
  description: string;
  highlights: string[];
  screenshots?: string[]; // URLs of images
};

export default function Experience({
  title,
  company,
  timeframe,
  description,
  highlights,
  screenshots,
}: ExperienceProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-black/40 flex flex-col gap-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-1 text-neutral-100">
          {title}
        </h3>
        <p className="text-neutral-400 mb-2">
          {company} {timeframe && `• ${timeframe}`}
        </p>
        <p className="text-neutral-300 mb-4 leading-relaxed">{description}</p>
      </div>

      <ul className="list-disc list-outside px-5 text-neutral-300 mb-4">
        {highlights.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

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
