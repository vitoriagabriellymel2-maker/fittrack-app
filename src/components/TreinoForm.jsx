import { useState } from "react";

function TreinoForm({ onAdicionar }) {
  const [nome, setNome] = useState("");
  const [grupo, setGrupo] = useState("Peito");
  const [series, setSeries] = useState(3);
  const [reps, setReps] = useState(12);

  function aoEnviar(evento) {
    evento.preventDefault();
    if (nome.trim() === "") return;
    onAdicionar({ nome, grupo, series: Number(series), reps: Number(reps) });
    setNome("");
  }

  const campo = "border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600";
  const rotulo = "block text-sm font-semibold text-slate-600 mb-1";

  return (
    <form onSubmit={aoEnviar} className="bg-white rounded-xl shadow-md p-5 mb-8 flex flex-wrap gap-3 items-end">
      <div className="flex-1 min-w-[200px]">
        <label className={rotulo}>Exercício</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
          placeholder="Ex.: Supino reto" className={`w-full ${campo}`} />
      </div>
      <div>
        <label className={rotulo}>Grupo</label>
        <select value={grupo} onChange={(e) => setGrupo(e.target.value)} className={campo}>
          <option>Peito</option><option>Costas</option><option>Pernas</option>
          <option>Ombros</option><option>Braços</option><option>Cardio</option>
        </select>
      </div>
      <div>
        <label className={rotulo}>Séries</label>
        <input type="number" min="1" value={series} onChange={(e) => setSeries(e.target.value)} className={`w-20 ${campo}`} />
      </div>
      <div>
        <label className={rotulo}>Reps</label>
        <input type="number" min="1" value={reps} onChange={(e) => setReps(e.target.value)} className={`w-20 ${campo}`} />
      </div>
      <button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-2 rounded-lg transition-colors">
        + Adicionar
      </button>
    </form>
  );
}
export default TreinoForm;