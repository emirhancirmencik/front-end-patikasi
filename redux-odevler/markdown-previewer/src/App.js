import "./App.css";
import UserInput from "./components/UserInput";
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import Helper from "./components/Helper";

function App() {
  return (
    <div className="container mx-auto">
      <div className="w-100 d-flex">
        <Helper />
      </div>
      <div className="row text-center">
        <div className="col-12 text">
          <div className="header">Markdown Previewer</div>
          <hr />
        </div>
      </div>
      <div className="row ">
        <div className="col-6">
          <UserInput />
        </div>
        <div className="col-6">
          <MarkdownPreviewer />
        </div>
      </div>
    </div>
  );
}

export default App;
