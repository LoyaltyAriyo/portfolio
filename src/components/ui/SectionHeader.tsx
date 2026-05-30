type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
    </div>
  )
}
