import { useState } from "react";
import InputsForm from "./InputsForm";
import ComentsView from "./ComentsView";

export default function NewForm({ addComent, coments }) {
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  function handleSubmit(ev) {
    ev.preventDefault();
    addComent({ email, textarea });
    setEmail("");
    setTextarea("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sessão de Comentários</h2>
        <InputsForm
          setEmail={setEmail}
          setTextarea={setTextarea}
          email={email}
          textarea={textarea}
        />
        <button>Enviar Comentário</button>
        <hr />
        <ComentsView coments={coments} />
      </form>
    </>
  );
}
