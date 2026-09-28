import { useState, useEffect } from "react";
import Header from "./components/Header";
import TreinoCard from "./components/TreinoCard";
import TreinoForm from "./components/TreinoForm";

const TREINOS_INICIAIS = [
  { id: 1, nome: "Supino reto", grupo: "Peito", series: 4, reps: 10, concluido: false },
  { id: 2, nome: "Agachamento", grupo: "Pernas", series: 4, reps: 12, concluido: true },
  { id: 3, nome: "Corrida leve", grupo: "Cardio", series: 1, reps: 1, concluido: false },
];

const FILTROS = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "pendentes", rotulo: "Pendentes" },
  { valor: "feitos", rotulo: "Feitos" },
];

const CLASSE_SKIP_LINK =
  "sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg";

function App() {
  const [treinos, setTreinos] = useState(() => {
    const salvos = localStorage.getItem("fittrack-treinos");
    return salvos ? JSON.parse(salvos) : TREINOS_INICIAIS;
  });
  const [filtro, setFiltro] = useState("todos");
  const [anuncio, setAnuncio] = useState("");

  useEffect(() => {
    localStorage.setItem("fittrack-treinos", JSON.stringify(treinos));
  }, [treinos]);

  function adicionarTreino(novo) {
    setTreinos((atual) => [
      ...atual,
      { ...novo, id: Date.now(), concluido: false },
    ]);
    setAnuncio(`Treino "${novo.nome}" adicionado.`);
  }

  function alternarConcluido(id) {
    const treino = treinos.find((t) => t.id === id);
    const status = !treino.concluido ? "feito" : "pendente";
    setTreinos((atual) =>
      atual.map((t) => (t.id === id ? { ...t, concluido: !t.concluido } : t))
    );
    setAnuncio(`Treino "${treino.nome}" marcado como ${status}.`);
  }

  function removerTreino(id) {
    const treino = treinos.find((t) => t.id === id);
    setTreinos((atual) => atual.filter((t) => t.id !== id));
    setAnuncio(`Treino "${treino.nome}" removido.`);
  }

  const treinosFiltrados = treinos.filter((t) => {
    if (filtro === "pendentes") return !t.concluido;
    if (filtro === "feitos") return t.concluido;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-100">
      <a href="#conteudo" className={CLASSE_SKIP_LINK}>
        Pular para o conteúdo
      </a>

      <Header />

      <div aria-live="polite" role="status" className="sr-only">
        {anuncio}
      </div>

      <main id="conteudo" className="max-w-4xl mx-auto px-6 py-10">
        <TreinoForm onAdicionar={adicionarTreino} />

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-700">
            Meus treinos ({treinosFiltrados.length})
          </h2>

          <div role="group" aria-label="Filtrar treinos" className="flex gap-2">
            {FILTROS.map((op) => (
              <button
                key={op.valor}
                onClick={() => setFiltro(op.valor)}
                aria-pressed={filtro === op.valor}
                className={
                  filtro === op.valor
                    ? "text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-emerald-700 text-white"
                    : "text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 bg-white text-slate-600 hover:bg-slate-200"
                }
              >
                {op.rotulo}
              </button>
            ))}
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2">
          {treinosFiltrados.map((t) => (
            <TreinoCard
              key={t.id}
              nome={t.nome}
              grupo={t.grupo}
              series={t.series}
              reps={t.reps}
              concluido={t.concluido}
              onToggle={() => alternarConcluido(t.id)}
              onRemover={() => removerTreino(t.id)}
            />
          ))}
        </section>
      </main>

      <footer className="text-center text-xs text-slate-600 py-6">
        FitTrack — projeto da SA03
      </footer>
    </div>
  );
}

export default App;