import "./App.css";
import Form from "./components/Form";
import Days from "./components/Days";
import Footer from "./components/Footer";
import { LoadingProvider } from "./context/LoadingContext";
import { WeatherProvider } from "./context/WeatherContext";
import { ApiProvider } from "./context/ApiContext";
import { ThemeProvider } from "./context/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="main">
      <div className="container">
        <LoadingProvider>
          <ApiProvider>
            <WeatherProvider>
              <ThemeProvider>
                <div className="row">
                  <div className="col-lg-12 rounded-circle">
                    <Form />
                  </div>
                </div>
                <div className="row  d-flex justify-content-center round-cont-bot">
                  <div className="col-lg-12 m-3">
                    <Days />
                  </div>
                </div>
                <div className="row text-center">
                  <Footer />
                </div>
              </ThemeProvider>
            </WeatherProvider>
          </ApiProvider>
        </LoadingProvider>
      </div>
    </div>
  );
}

export default App;
