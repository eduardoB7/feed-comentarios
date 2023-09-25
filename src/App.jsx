import NewForm from "./Components/NewForm";
import useComent from "./Hooks/useComent";

function App() {
  const { coments, addComent } = useComent();

  return (
    <>
      <NewForm addComent={addComent} coments={coments} />
    </>
  );
}

export default App;
