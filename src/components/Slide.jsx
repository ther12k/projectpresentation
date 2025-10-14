const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function Slide({ data, isActive }) {
  return (
    <div
      className={cn(
        "w-full max-w-[1600px] h-[90vh] bg-gradient-to-br from-slate-900 to-slate-950",
        "rounded-3xl shadow-2xl border border-blue-500/20 p-12",
        "transition-all duration-500",
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Logo */}
      {data.showLogo && (
        <div className="absolute top-8 right-12 text-blue-500 font-bold text-lg tracking-wider">
          HALOTEC
        </div>
      )}

      {/* Slide Content */}
      <div className="h-full flex flex-col">
        {/* Header */}
        {data.header && (
          <div className="border-b-4 border-gradient-to-r from-blue-500 to-purple-600 pb-5 mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              {data.header.title}
            </h1>
            {data.header.subtitle && (
              <p className="text-slate-400 text-xl mt-2">{data.header.subtitle}</p>
            )}
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
          {data.render ? data.render() : <div dangerouslySetInnerHTML={{ __html: data.content }} />}
        </div>
      </div>
    </div>
  )
}
