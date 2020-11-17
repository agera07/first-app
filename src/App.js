import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    name: "Millan Garcia",
    age: 25,
    hobby: "cooking",
  };

  const saludarFn = () => {
    console.log("hola");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userinfo={user} saludarFn={saludarFn} />
      </header>
    </div>
  );
}

export default App;
