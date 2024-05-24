import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import StartScreen from "./components/StartScreen/StartScreen";
import Question from "./components/QuestionScreen/Question";
import MiddleQuestion from "./components/QuestionScreen/MiddleQuestion";
import LastQuestion from "./components/QuestionScreen/LastQuestion";
import Result from "./components/ResultScreen/ResultScreen";
import NotFoundPage from "./components/NotFoundPage";

Modal.setAppElement("#root");

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/perfume" element={<Question />} />
        <Route path="/perfume/:baseResult" element={<MiddleQuestion />} />
        <Route path="/perfume/:baseResult/:type" element={<LastQuestion />} />
        <Route path="/result/:result" element={<Result />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
