export default function ComentsView({ coments }) {
  return (
    <>
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
    </>
  );
}
