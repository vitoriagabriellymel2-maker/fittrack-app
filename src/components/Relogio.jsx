import { useState, useEffect } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("⏰ Relogio MONTADO — intervalo ligado");

    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    // Função de LIMPEZA: roda quando o componente sai da tela
    return () => {
      console.log("💀 Relogio DESMONTADO — intervalo desligado");
      clearInterval(intervalo);
    };
  }, []); // [] = roda só na montagem

  return (
    <span
      className={`font-mono text-emerald-400 text-sm bg-slate-800
        px-3 py-1 rounded-lg`}
    >
      {hora}
    </span>
  );
}

export default Relogio;