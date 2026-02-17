import Image from "next/image";

interface CaseStudyCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
}

export default function CaseStudyCard({
  image,
  alt,
  title,
  description,
  tags,
  liveUrl,
}: CaseStudyCardProps) {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-8 space-y-5">
        <h3
          className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-amber-500 transition-colors"
          style={{ fontFamily: "var(--font-unbounded)" }}
        >
          {title}
        </h3>

        <p className="text-zinc-400 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Live site link */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center text-amber-500 hover:text-amber-400 font-bold text-sm uppercase tracking-wider transition-colors pt-2"
          style={{ fontFamily: "var(--font-unbounded)" }}
        >
          Visit Live Site
          <svg
            className="w-5 h-5 ml-3 transform group-hover/link:translate-x-2 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
