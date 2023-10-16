import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function TabNotice() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    initialSlide: 0,
    vertical: true,
  };

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
        <Slider {...settings}>
          <div className="tc_notice_list">
            <Link
              to={
                "https://gosi.hackers.com/html/professor/?user_num=540#/notice_view/1205"
              }
            >
              <strong>&#91;고혜원&#93;</strong> 2024 대비 혜원국어 강의 커리큘럼
              안내
              <img
                src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/new_icon.png"
                class="new_icon"
                alt="new 아이콘"
              />
            </Link>
          </div>
          <div className="tc_notice_list">
            <Link
              to={
                "https://gosi.hackers.com/html/professor/?user_num=73#/notice_view/1260"
              }
            >
              <strong>&#91;신민숙&#93;</strong> 2024 군무원 국어 신민숙 선생님
              커리큘럼 안내 영상
              <img
                src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/new_icon.png"
                class="new_icon"
                alt="new 아이콘"
              />
            </Link>
          </div>
          <div className="tc_notice_list">
            <Link
              to={
                "https://gosi.hackers.com/html/professor/?user_num=112#/notice_view/1232"
              }
            >
              <strong>&#91;양효주&#93;</strong> &#91;공지&#93; 일부 인강 서비스
              종료 안내
              <img
                src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/new_icon.png"
                class="new_icon"
                alt="new 아이콘"
              />
            </Link>
          </div>
        </Slider>
      </div>
    </>
  );
}
