function TreinoCard({ nome, grupo, series, reps, concluido, onToggle, onRemover }) {
  return (
    <article
      className={`rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow
        border border-slate-100 bg-white ${
          concluido ? "opacity-60" : ""
        }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
          {grupo}
        </span>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
          {series}x{reps}
        </span>
      </div>

      <h2
        className={`text-lg font-semibold text-slate-800 mb-4 ${
          concluido ? "line-through" : ""
        }`}
      >
        {nome}
      </h2>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
          <input
            type="checkbox"
            checked={concluido}
            onChange={onToggle}
            className="w-4 h-4 accent-emerald-700"
          />
          Feito
        </label>

        <button
          onClick={onRemover}
          className="text-xs text-red-500 hover:text-red-700 font-semibold"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default TreinoCard;