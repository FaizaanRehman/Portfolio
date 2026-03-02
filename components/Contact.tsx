type ContactProps = {
  email: string;
  github: string;
  linkedin: string;
  resume?: string;
};

export default function Contact({
  email,
  github,
  linkedin,
  resume,
}: ContactProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-8 shadow-lg shadow-black/40 flex flex-col gap-6">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-neutral-100 mb-3">
          Get In Touch
        </h3>
        <p className="text-neutral-400 leading-relaxed max-w-xl">
          I'm currently open to software development roles. Feel free to reach
          out - I'd love to connect.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${email}`}
          className="px-5 py-2 bg-white text-black rounded-lg font-medium hover:opacity-90 transition"
        >
          Email
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition"
        >
          LinkedIn
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition"
        >
          GitHub
        </a>

        {resume && (
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition"
          >
            Resume
          </a>
        )}
      </div>
    </div>
  );
}
