import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer greeting={'Bienvenido'} />
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)} />

      </header>
    </div>
  );
}

export default App;
