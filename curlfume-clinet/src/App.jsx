import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import Question from "./components/QuestionScreen/Question";
import Result from "./components/ResultScreen/ResultScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/perfume" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
