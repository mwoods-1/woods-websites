import Image from "next/image";

interface CaseStudyCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  priority?: boolean;
  horizontal?: boolean;
  className?: string;
}

export default function CaseStudyCard({
  image,
  alt,
  title,
  description,
  tags,
  liveUrl,
  priority = false,
  horizontal = false,
  className = "",
}: CaseStudyCardProps) {
  return (
    <div
      className={`group relative bg-[var(--bg-alt)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:shadow-[0_0_30px_rgba(46,196,182,0.1)] transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Teal top-border accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10" />

      <div className={horizontal ? "md:grid md:grid-cols-2 md:items-stretch" : ""}>
        {/* Image */}
        <div
          className={`relative overflow-hidden bg-[var(--bg-elevated)] ${
            horizontal ? "aspect-[4/3] md:aspect-auto md:min-h-[420px]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-alt)] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 space-y-5">
          <h3
            className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight group-hover:text-accent transition-colors"
          >
            {title}
          </h3>

          <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[var(--bg)] border border-[var(--border)] text-[var(--text-muted)] text-xs uppercase tracking-wider group-hover:border-[var(--border-hover)] group-hover:text-accent/70 transition-colors duration-300"
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
            className="font-display group/link inline-flex items-center text-accent hover:text-accent-hover font-bold text-sm uppercase tracking-wider transition-colors pt-2"
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
    </div>
  );
}
