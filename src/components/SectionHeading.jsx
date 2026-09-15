function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`${
        align === "center" ? "mx-auto text-center" : ""
      } max-w-3xl`}
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;