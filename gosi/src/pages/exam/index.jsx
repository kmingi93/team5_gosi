import ExamTimer from "components/exam/ExamTimer";
import ExamBanner from "components/exam/ExamBanner";
import ExamTable from "components/exam/ExamTable";
import ExamSlider from "components/exam/ExamSlider";
import TabContent from "components/exam/TabContent";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Index() {
  let [clickedTab, setClickedTab] = useState(0);
  return (
    <div className="examWrap">
      <ExamTimer />
      <ExamBanner />

      <div className="examMain">
        <div className="inner">
          <img
            src="https://cdn.hackers.com/gosi/images/exam9/319/img_main.png"
            alt="9급 공무원 합격예측 모의고사"
            width="1300"
            height="1241"
          />
          <button type="button" className="clickBtn">
            23년 9월 모의고사 신청하러 가기123
          </button>
          <p>
            온라인 모의고사 시행일정 : <span>2023.09.17(일)</span>
          </p>
        </div>
      </div>

      <ExamTable />

      <div style={{ background: "#dbf8ff" }}>
        <div className="inner">
          <img
            src="https://cdn.hackers.com/gosi/images/exam9/319/img02.jpg"
            alt="해커스공무원 합격생 평균 5회 이상 모의고사 응시"
            width="1000"
            height="882"
          />
        </div>
      </div>

      <ExamSlider />

      <div className="examTab">
        <Nav className="examNav" variant="tabs" defaultActiveKey="0">
          <Nav.Item>
            <Nav.Link
              eventKey="0"
              onClick={() => {
                setClickedTab(0);
              }}
            >
              합격예측
              <br />
              모의고사 안내
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="1"
              onClick={() => {
                setClickedTab(1);
              }}
            >
              정답확인
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="2"
              onClick={() => {
                setClickedTab(2);
              }}
            >
              성적확인
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="3"
              onClick={() => {
                setClickedTab(3);
              }}
            >
              해설강의
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="somun" spy={true} smooth={true}>
                <button variant="btntoggle">특별 이벤트</button>
              </Link>
            </Nav.Link>
          </Nav.Item>
          <img
            src="https://cdn.hackers.com/gosi/images/exam9/319/mark.png"
            alt="기간한정"
            className="tab_bnr"
          />
        </Nav>
        <TabContent clickedTab={clickedTab} />
      </div>
    </div>
  );
}
