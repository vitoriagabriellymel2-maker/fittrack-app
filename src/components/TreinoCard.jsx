function TreinoCard({ nome, grupo, series, reps, concluido, onToggle, onRemover }) {
  return (
    <article
      className={`rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow border ${
        concluido ? "bg-slate-50 border-slate-200" : "bg-white border-slate-100"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
          {grupo}
        </span>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
          {series}x{reps}
        </span>
      </div>

      <h2
        className={`text-lg font-semibold mb-4 ${
          concluido ? "text-slate-500 line-through" : "text-slate-800"
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
            className="w-4 h-4 accent-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-1"
          />
          Feito
        </label>

        <button
          onClick={onRemover}
          aria-label={`Remover treino: ${nome}`}
          className="text-xs text-red-600 hover:text-red-800 font-semibold focus:outline-none focus:ring-2 focus:ring-red-600 rounded px-1"
        >
          Remover
        </button>
      </div>
    </article>
  );
}

export default TreinoCard;