import "./App.css";
import Form from "./components/Form";
import Days from "./components/Days";
import { LoadingProvider } from "./context/LoadingContext";
import { WeatherProvider } from "./context/WeatherContext";
import { ApiProvider } from "./context/ApiContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="">
      <div className="container">
        <LoadingProvider>
          <ApiProvider>
            <WeatherProvider>
              <div className="row  round round-cont-top">
                <div className="col-lg-12">
                  <Form />
                </div>
              </div>
              <div className="row  d-flex justify-content-center round-cont-bot">
                <div className="col-lg-12 m-3">
                  <Days />
                </div>
              </div>
              <div className="row text-center">
                <div className="col-12 align-self-center">
                  <p>
                    developed by{" "}
                    <a
                      style={{ color: "black", textDecoration: "none" }}
                      href="https://github.com/emirhancirmencik"
                    >
                      emirhan çirmencik
                    </a>
                  </p>
                </div>
              </div>
            </WeatherProvider>
          </ApiProvider>
        </LoadingProvider>
      </div>
    </div>
  );
}

export default App;
