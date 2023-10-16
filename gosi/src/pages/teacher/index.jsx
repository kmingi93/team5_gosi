import TeacherLnb from "components/teacher/lnb";

import Notice from "components/teacher/notice";

import TabContent from "components/teacher/tabContent";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import "scss/Teacher.scss";

export default function Index() {
  let [clickedTab, setClickedTab] = useState(0);
  return (
    <>
      <div className="teacher_top">
        <div className="teacher_inner">
          <p className="teacher_top_txt">
            합격생 96.6% 적극 추천!
            <br />
            70개 직렬 합격자 배출, 최정상급 전문 강사진
            <span className="teacher_top_sub_txt">
              * [96.6% 추천] 2021년 공무원 시험 최종합격 후 환급받은 자 대상
              설문조사 결과
              <br />* [70개 직렬] 해커스공무원 수강생 중 2019-2022년도 9·7급
              공무원 합격자 직렬 조사 결과
            </span>
          </p>
          {/* 상단 공지사항 */}
          <Notice />
        </div>
      </div>
      <div className="teacher_gate teacher_inner">
        <TeacherLnb />
        <div className="teacher_contents">
          <div className="title_section ov">
            <span className="path fr">
              Home &gt;<em>공무원 선생님</em>
            </span>
          </div>

          <div className="teacherTab">
            <Nav className="teacherNav" variant="tabs" defaultActiveKey="0">
              <Nav.Item>
                <Nav.Link
                  eventKey="0"
                  onClick={() => {
                    setClickedTab(0);
                  }}
                >
                  국어
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="1"
                  onClick={() => {
                    setClickedTab(1);
                  }}
                >
                  영어
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="2"
                  onClick={() => {
                    setClickedTab(2);
                  }}
                >
                  한국사
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="3"
                  onClick={() => {
                    setClickedTab(3);
                  }}
                >
                  7급 공통과목
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="4"
                  onClick={() => {
                    setClickedTab(4);
                  }}
                >
                  7/9급 전공
                  <br />
                  행정/일반
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="5"
                  onClick={() => {
                    setClickedTab(5);
                  }}
                >
                  7/9급 전공
                  <br />
                  기술
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="6"
                  onClick={() => {
                    setClickedTab(6);
                  }}
                >
                  면접
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="7"
                  onClick={() => {
                    setClickedTab(7);
                  }}
                >
                  검정시험
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="8"
                  onClick={() => {
                    setClickedTab(8);
                  }}
                >
                  제2외국어
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent clickedTab={clickedTab} />
          </div>
        </div>
      </div>
    </>
  );
}
