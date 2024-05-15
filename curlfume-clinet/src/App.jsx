import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen/StartScreen";
import Question1 from "./components/QuestionScreen/Question";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/perfume1" element={<Question1 />} />
        </Routes>
      </Router> */}
      <Question1 />
    </>
  );
}

export default App;
