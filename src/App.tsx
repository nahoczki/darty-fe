import "./App.css";
import Home from "./views/home";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*" // 404 page
            element={
              <>
                <span>404</span>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
