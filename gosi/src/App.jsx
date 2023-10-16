import "assets/styles/reset.css";
import "assets/styles/common.css";
import "App.css";
import { Routes, Route } from "react-router-dom";
import Teacher from "./pages/teacher";
import Book from "./pages/book";
import Exam from "./pages/exam";
import Enrolment from "./pages/enrolment";
import Home from "./pages/home";
import GuidePopup from "pages/guidePopup";
import "../node_modules/slick-carousel/slick/slick.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/enrolment" element={<Enrolment />}></Route>
        <Route path="/teacher" element={<Teacher />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
      </Route>
      <Route path="/guidePopup" element={<GuidePopup />}></Route>
    </Routes>
  );
}

export default App;
