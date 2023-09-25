export default function InputsForm({ email, textarea, setEmail, setTextarea }) {
  return (
    <>
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
    </>
  );
}
