import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkoutCard from "./components/WorkoutCard";

const treinos = [
  {
    id: 1,
    titulo: "Treino de Pernas",
    descricao: "Agachamento, leg press e afundo.",
    categoria: "Força",
    duracao: "50 min",
  },
  {
    id: 2,
    titulo: "Corrida Intervalada",
    descricao: "Tiros de 400m com descanso ativo.",
    categoria: "Cardio",
    duracao: "30 min",
  },
  {
    id: 3,
    titulo: "Yoga Flow",
    descricao: "Sequência de alongamento e respiração.",
    categoria: "Mobilidade",
    duracao: "25 min",
  },
  {
    id: 4,
    titulo: "Treino de Costas",
    descricao: "Puxada, remada baixa e barra fixa.",
    categoria: "Força",
    duracao: "45 min",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {treinos.map((treino) => (
            <WorkoutCard
              key={treino.id}
              titulo={treino.titulo}
              descricao={treino.descricao}
              categoria={treino.categoria}
              duracao={treino.duracao}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;