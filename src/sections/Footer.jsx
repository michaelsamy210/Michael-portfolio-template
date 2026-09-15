import site from "../data/site";

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-bold">
            {site.fullName}
            <span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-xs text-white/25">
            Front-End Developer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-white/35 transition hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href="#top"
            className="text-xs text-white/35 transition hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/[0.05] pt-5">
        <p className="text-[11px] text-white/20">
          © {new Date().getFullYear()} {site.fullName}. Built with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;