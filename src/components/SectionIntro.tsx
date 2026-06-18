type SectionIntroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "dark",
}: SectionIntroProps) {
  const introClassName = align === "center" ? "section-intro section-intro--center" : "section-intro";
  const eyebrowClassName = tone === "light" ? "section-eyebrow section-eyebrow--light" : "section-eyebrow section-eyebrow--brass";
  const titleClassName = tone === "light" ? "section-intro__title section-intro__title--light" : "section-intro__title";
  const bodyClassName = tone === "light" ? "section-intro__text section-intro__text--light" : "section-intro__text";

  return (
    <div className={introClassName}>
      <p className={eyebrowClassName}>
        <span />
        {eyebrow}
      </p>
      <h2 className={titleClassName}>{title}</h2>
      {body ? <p className={bodyClassName}>{body}</p> : null}
    </div>
  );
}
