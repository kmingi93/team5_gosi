import React from "react";
import { Link } from "react-router-dom";

export default function TabNotice() {
  return (
    <>
      <div className="teacher_tab_notice">
        <p className="tit fl">
          <img
            src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/notice_icon2.png"
            alt="공지사항 아이콘"
          />
          선생님 공지
        </p>
        <div className="tc_notice_slider p_tc_notice_slider">
          <ul className="bxslider">
            <li>
              <Link
                to={
                  "https://gosi.hackers.com/html/professor/?user_num=540#/notice_view/1205"
                }
              >
                <strong>&#91;고혜원&#93;</strong> 2024 대비 혜원국어 강의
                커리큘럼 안내
                <img
                  src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/new_icon.png"
                  class="new_icon"
                  alt="new 아이콘"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
