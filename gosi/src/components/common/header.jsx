import { Routes, Route, Link } from "react-router-dom";
import Teacher from "pages/teacher";
import Book from "pages/book";
import Exam from "pages/exam";
import Enrolment from "pages/enrolment";
import "scss/Header.scss";
import { useState } from "react";
import headerData from "mocks/headerData.json";

function Header() {
  const [gnbCount, SetGnbCount] = useState("on");
  function gnb_togle(params) {
    if (gnbCount === "on") {
      SetGnbCount("off");
    } else {
      SetGnbCount("on");
    }
  }
  return (
    <>
      <div className="headerWrap">
        <div className="gnb_box">
          <ul className="gnb">
            <li>
              <Link to="enrolment">수강신청</Link>
            </li>
            <li>
              <Link to="teacher">선생님</Link>
            </li>
            <li>
              <Link to="book">교재&#183;서점</Link>
            </li>
            <li>
              <Link to="/">합격수기</Link>
            </li>
            <li>
              <Link to="/">무료강좌</Link>
            </li>
            <li>
              <Link to="/">수험정보</Link>
            </li>
            <li>
              <Link to="exam">모의고사</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li>
              <button
                type="button"
                className={`gnb_btn ${gnbCount}`}
                onClick={gnb_togle}
              >
                {gnbCount === "on" ? "직렬닫기 ▲" : "직렬보기 ▼"}
              </button>
            </li>
            <li>
              <button type="나의 강의실" className="my_class">
                나의 강의실
              </button>
            </li>
          </ul>
        </div>
        <div className={`sub_box ${gnbCount}`}>
          <ul className="sub_gnb">
            {headerData.map((gnbData, index) => (
              <li key={gnbData.id}>
                <Link to={gnbData.link}>{gnbData.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/enrolment" element={<Enrolment />}></Route>
        <Route path="/teacher" element={<Teacher />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
      </Routes>
    </>
  );
}

export default Header;
