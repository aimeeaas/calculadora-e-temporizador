// Hook para criar estados (variáveis reativas)
import { useState } from "react";
// Hook para armazenar valores que não causam re-render (não atualizam a tela)
import { useRef } from 'react';

// Função que funciona como serviço (lógica separada da UI)
export default function Temporizador() {
    // Armazena o tempo em segundos
    const [time, setTime] = useState(0);
    // Controla se o timer está rodando
    const [running, setRunning] = useState(false);
    // Guarda o ID do setInterval
    // Não perde valor entre renders e não re-renderiza tela
    const intervalRef = useRef(null);

    // Função para iniciar o timer
    const startTimer = () => {
        // Evita múltiplos timers rodando ao mesmo tempo
        if (!running) {
            // Marca o timer como ativo
            setRunning(true);
            // Inicia repetição a cada 1 segundo
            // setInterval: executa função repetidamente
            intervalRef.current = setInterval(() => {
                // Incrementa o tempo
                setTime(prev => prev + 1);
                // 1000 ms = 1 segundo
            }, 1000);
        }
    };

    // Função para parar o timer
    const stopTimer = () => {
        // Verifica se existe intervalo ativo
        if (intervalRef.current) {
            // Para o timer
            clearInterval(intervalRef.current);
            // Limpa a ref
            intervalRef.current = null;
        }
        // Marca o timer como parado
        setRunning(false);
    };

    // Função para resetar
    const resetTimer = () => {
        // 1° para o timer
        stopTimer();
        // Depois zera o tempo
        setTime(0);
    };

    // Formatar tempo
    // Recebe em segundos
    const formatTimer = (seconds) => {
        // Calcula minutos
        // Math.floor: arredonda para baixo
        const mins = Math.floor(seconds / 60);
        // Pega o resto (segundos)
        const secs = seconds % 60;
        // Formata no padrão MM:SS
        // padStart(2, '0') adiciona zero à esquerda
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    };
    // Retorna tudo para ser usado na tela
    // Padrão de custom hook/service
    return { time,running, startTimer, stopTimer, resetTimer, formatTimer};
}
/*
| Erro                     | Problema                |
| ------------------------ | ----------------------- |
| não usar useRef          | perde controle do timer |
| não usar clearInterval   | timer infinito          |
| não usar prev => prev+1  | bug de atualização      |
| não verificar running    | cria vários timers      |
| não parar antes de reset | bug visual              |
*/