import TabRollingLec from "components/teacher/tabRollingLec";
import TabRollingBnr from "components/teacher/tabRollingBnr";
import TabNotice from "components/teacher/tabNotice";
import TeacherFace from "components/teacher/teacherFace";
import React from "react";
import "scss/Teacher.scss";

export default function TabContent(props) {
  if (props.clickedTab === 0) {
    return (
      <div className="examTabcon">
        <div className="subject_tab_area cf">
          <div className="cf subject_1">
            {/* 과목별 배너 영역 */}
            <TabRollingLec />
            {/* 대표강의 영역 */}
            <TabRollingBnr />
          </div>
          {/* 선생님 탭 내 공지사항 */}
          <TabNotice />
          {/* 선생님 얼굴 */}
          <TeacherFace />
        </div>
      </div>
    );
  } else if (props.clickedTab === 1) {
    return (
      <div className="examTabcon tab01">
        <div className="subject_tab_area cf">
          <div className="cf subject_1">
            {/* 과목별 배너 영역 */}
            <TabRollingLec />
            {/* 대표강의 영역 */}
            <TabRollingBnr />
          </div>
          {/* 선생님 탭 내 공지사항 */}
          <TabNotice />
          {/* 선생님 얼굴 */}
          <TeacherFace />
        </div>
      </div>
    );
  } else if (props.clickedTab === 2) {
    return (
      <div className="examTabcon tab02">
        <div className="subject_tab_area cf">
          <div className="cf subject_1">
            {/* 과목별 배너 영역 */}
            <TabRollingLec />
            {/* 대표강의 영역 */}
            <TabRollingBnr />
          </div>
          {/* 선생님 탭 내 공지사항 */}
          <TabNotice />
          {/* 선생님 얼굴 */}
          <TeacherFace />
        </div>
      </div>
    );
  } else if (props.clickedTab === 3) {
    return <div className="examTabcon tab03">7급 공통과목</div>;
  } else if (props.clickedTab === 4) {
    return (
      <div className="examTabcon tab04">
        7/9급 전공
        <br />
        행정/일반
      </div>
    );
  } else if (props.clickedTab === 5) {
    return (
      <div className="examTabcon tab05">
        7/9급 전공
        <br />
        기술
      </div>
    );
  } else if (props.clickedTab === 6) {
    return <div className="examTabcon tab06">면접</div>;
  } else if (props.clickedTab === 7) {
    return <div className="examTabcon tab07">검정시험</div>;
  } else if (props.clickedTab === 8) {
    return <div className="examTabcon tab08">제2외국어</div>;
  }
}
