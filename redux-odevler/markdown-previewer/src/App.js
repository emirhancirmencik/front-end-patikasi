import "./App.css";
import UserInput from "./components/UserInput";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  return (
    <div className="container mx-auto">
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
