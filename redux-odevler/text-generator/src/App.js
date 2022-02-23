import "./App.css";
import Paragraphs from "./components/Paragraphs";
import Form from "./components/Form";
import Header from "./components/Header";
function App() {
  return (
    <div className="mt-0">
      <div className="header w-100 pt-3 pb-3">
        <Header />
      </div>
      <div className="form">
        <Form />
      </div>
      <div className="paragraphs">
        <Paragraphs />
      </div>
    </div>
  );
}

export default App;
