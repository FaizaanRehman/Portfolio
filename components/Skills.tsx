type SkillsProps = {
  skills: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-black/40">
      <h3 className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-4">
        Skills
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-neutral-800 text-neutral-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
