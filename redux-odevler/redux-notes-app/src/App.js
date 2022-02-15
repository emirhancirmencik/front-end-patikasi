import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="row me-0 ms-0">
        <div className="col-12 form ">
          <Form />
        </div>
        <div className="col-12 filter h-100 ps-0 pe-0">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
