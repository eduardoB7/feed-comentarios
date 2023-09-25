import { useState } from "react";

export default function useComent() {
  const [coments, setComents] = useState(() => {
    const comentsHistory = localStorage.getItem("coments-bar");
    if (!comentsHistory) return [];
    return JSON.parse(comentsHistory);
  });

  function addComent({ email, textarea }) {
    const id = Math.floor(Math.random() * 10000);

    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, "0");
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0"); // Os meses são indexados a partir de 0.
    const ano = dataAtual.getFullYear();
    const hora = dataAtual.getHours().toString().padStart(2, "0");
    const minutos = dataAtual.getMinutes().toString().padStart(2, "0");
    const segundos = dataAtual.getSeconds().toString().padStart(2, "0");

    const dataFormatada = `${dia}/${mes}/${ano}`;
    const horaFormatada = `${hora}:${minutos}:${segundos}`;

    try {
      if (!email || !textarea) {
        throw new Error("Você precisa digitar o email e o comentário!");
      }
      const coment = { id, email, textarea, dataFormatada, horaFormatada };
      setComents((state) => {
        const newComent = [...state, coment];
        localStorage.setItem("coments-bar", JSON.stringify(newComent));
        return newComent;
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return { coments, addComent };
}
