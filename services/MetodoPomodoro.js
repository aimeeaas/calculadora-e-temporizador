// Hook para criar estados (variáveis reativas)
import { useState } from "react";
// Hook para armazenar valores que não causam re-render (não atualizam a tela)
import { useRef } from "react";

// Função que encapsula toda a lógica do Pomodoro
export default function MetodoPomodoro() {
  // Tempo inicial em segundos. 1200 segundos = 20 minutos
  const [time, setTime] = useState(1200);
  // Controla se o timer está rodando
  const [running, setRunning] = useState(false);
  // Guarda o ID do setInterval
  // Não perde valor entre renders e não re-renderiza tela
  const intervalRef = useRef(null);

  // Start Timer Regressivo
  const startTimer = () => {
    if (!running) {
      // Ativa o estado
      setRunning(true);
      // Inicia contagem a cada 1 segundo
      intervalRef.current = setInterval(() => {
        // Usa valor anterior (boa prática)
        setTime((prev) => {
          // Verifica se chegou no final
          if (prev <= 1) {
            // PARA automaticamente
            clearInterval(intervalRef.current);
            // Marca como parado
            setRunning(false);
            // Garante que não fique negativo
            return 0;
          }
          // Decrementa 1 segundo
          return prev - 1;
        });
        // Executa a cada 1 segundo
      }, 1000);
    }
  };

  // Função de parar manualmente
  const stopTimer = () => {
    // Verifica se existe timer ativo
    if (intervalRef.current) {
      // Para o intervalo
      clearInterval(intervalRef.current);
      // Limpa a ref
      intervalRef.current = null;
    }
    // Atualiza o estado
    setRunning(false);
  };

  // Resetar o timer
  const resetTimer = () => {
    // Para tudo
    stopTimer();
    // Volta para 20 minutos
    setTime(1200);
  };

  // Formatação
  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return {
    time,
    setTime,
    running,
    startTimer,
    stopTimer,
    resetTimer,
    formatTimer,
  };
}

/*
| Temporizador     | Pomodoro             |
| ---------------- | -------------------- |
| `prev + 1`       | `prev - 1`           |
| não para sozinho | para automaticamente |
| sem limite       | limite = 0           |


Qual a diferença entre setInterval e setTimeout?
setInterval → executa várias vezes
setTimeout → executa uma vez
*/
