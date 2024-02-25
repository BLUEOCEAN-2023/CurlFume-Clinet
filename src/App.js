import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import Question1 from "./components/AskScreen/Question1";
import Question2 from "./components/AskScreen/Question2";
import Question3 from "./components/AskScreen/Question3";
import Question4 from "./components/AskScreen/Question4";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/perfume1" element={<Question1 />} />
        <Route path="/perfume2" element={<Question2 />} />
        <Route path="/perfume3" element={<Question3 />} />
        <Route path="/perfume4" element={<Question4 />} />
      </Routes>
    </Router>
  );
}

export default App;
