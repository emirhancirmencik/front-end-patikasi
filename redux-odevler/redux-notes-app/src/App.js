import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <div className="App  ">
      <div className="row container-filter">
        <div className="col-12 col-md-3 h-100 pe-0 position-fixed">
          <Form />
        </div>
        <div className="col-12 offset-3 col-md-9 h-100">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
