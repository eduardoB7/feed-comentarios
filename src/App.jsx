import { useState } from "react";

function App() {
  const [coments, setComents] = useState(() => {
    const comentsHistory = localStorage.getItem("coments-bar");
    if (!comentsHistory) return [];
    return JSON.parse(comentsHistory);
  });

  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

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
      setEmail("");
      setTextarea("");
    } catch (error) {
      alert(error.message);
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (email === "" || textarea === "") {
      return alert("Voce precisa digitar o email e o comentario!");
    }
    addComent({ email, textarea });
    setEmail("");
    setTextarea("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sessão de Comentários</h2>

        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="comentario">Comentário </label>
          <textarea
            name="comentario"
            id="comentario"
            cols="30"
            rows="10"
            value={textarea}
            onChange={(ev) => setTextarea(ev.target.value)}
          ></textarea>
        </div>

        <button>Enviar Comentário</button>
        <hr />

        <div className="comentsView">
          {coments.length > 0 ? (
            coments.map((coment) => (
              <div key={coment.id}>
                <h4>{coment.email}</h4>
                <p>
                  Em: {coment.dataFormatada}, {coment.horaFormatada}
                </p>
                <p>{coment.textarea}</p>
                <hr />
              </div>
            ))
          ) : (
            <h3>Seja o primeiro a comentar </h3>
          )}
        </div>
      </form>
    </>
  );
}

export default App;
