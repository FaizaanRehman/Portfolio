type SkillsProps = {
  skills: SkillsCategory[];
};

type SkillsCategory = {
  category: string;
  items: string[];
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-black/40 space-y-6">
      {skills.map((group) => (
        <div key={group.category}>
          {/* Category Title */}
          <h3 className="text-neutral-200 font-semibold mb-3">
            {group.category}
          </h3>

          {/* Skill Pills */}
          <div className="flex flex-wrap gap-3">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="bg-neutral-800 text-neutral-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
