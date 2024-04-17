import "./App.css";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";



function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Nuevo Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the three first words for ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
