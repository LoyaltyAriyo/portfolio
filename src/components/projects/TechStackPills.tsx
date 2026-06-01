type TechStackPillsProps = {
  items: string[]
  limit?: number
}

export function TechStackPills({ items, limit }: TechStackPillsProps) {
  const visibleItems = limit ? items.slice(0, limit) : items
  const remainingCount = limit ? Math.max(items.length - limit, 0) : 0

  return (
    <div className="flex flex-wrap gap-2">
      {visibleItems.map((item) => (
        <span
          key={item}
          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300"
        >
          {item}
        </span>
      ))}
      {remainingCount > 0 ? (
        <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-medium text-slate-500">
          +{remainingCount}
        </span>
      ) : null}
    </div>
  )
}
