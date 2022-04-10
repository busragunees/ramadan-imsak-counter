import Imsakiye from "./components/Imsakiye";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
            <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Routes>
            <Route path="/" element={<Imsakiye/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
