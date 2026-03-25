export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="font-mono text-sm tracking-widest text-primary/60 uppercase">
        Web Design & Development
      </p>
      <h1 className="mt-4 max-w-3xl text-center font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        We build websites that{" "}
        <span className="text-primary">make businesses grow</span>
      </h1>
      <p className="mt-6 max-w-xl text-center text-muted-foreground">
        Custom-built, high-performance websites crafted with care. No templates.
        No shortcuts.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="/contact"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start a Project
        </a>
        <a
          href="/portfolio"
          className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          View Our Work
        </a>
      </div>
    </main>
  );
}
