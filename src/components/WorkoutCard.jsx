export default function WorkoutCard({ titulo, descricao, categoria, duracao }) {
  const cores = {
    Força: "bg-red-100 border-red-400 text-red-800",
    Cardio: "bg-blue-100 border-blue-400 text-blue-800",
    Mobilidade: "bg-green-100 border-green-400 text-green-800",
  };

  const corCard = cores[categoria] || "bg-gray-100 border-gray-400 text-gray-800";

  return (
    <div className={`border-l-4 rounded-lg shadow p-4 ${corCard}`}>
      <span className="text-xs font-semibold uppercase tracking-wide">
        {categoria}
      </span>
      <h2 className="text-lg font-bold mt-1">{titulo}</h2>
      <p className="text-sm mt-1">{descricao}</p>
      <p className="text-xs mt-2 opacity-70">⏱ {duracao}</p>
    </div>
  );
}