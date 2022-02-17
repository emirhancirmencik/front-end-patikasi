import Products from "./components/Products";
import Header from "./components/Header";
import "./App.css";
import Money from "./components/Money";
import BillGates from "./components/BillGates";

function App() {
  return (
    <div className="App">
      <Header />
      <BillGates />
      <Money />
      <Products />
    </div>
  );
}

export default App;
