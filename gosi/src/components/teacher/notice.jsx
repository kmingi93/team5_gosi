import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";

export default function Notice() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    initialSlide: 0,
    vertical: true,
  };

  return (
    <>
      <div className="teacher_notice">
        <div className="notice_slider">
          <p className="notice_tit">
            <img
              src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/notice_icon1.png"
              alt="공지사항 아이콘"
            />
            공지사항
          </p>
          <Slider {...settings}>
            <div className="notice_list">
              ⋅ 환승&재도전 시 해커스패스 최대 30만원 할인!
            </div>
            <div className="notice_list">
              ⋅ 공무원 쌩기초 교재+강의 10종 무료받기!
            </div>
            <div className="notice_list">
              ⋅ 공무원 면접1위! 피티윤 면접반 오픈
            </div>
            <div className="notice_list">
              ⋅ 공무원 합격수기만 남겨도 백화점 상품권 무료!
            </div>
            <div className="notice_list">
              ⋅ 환승&재도전 시 해커스패스 최대 30만원 할인!
            </div>
            <div className="notice_list">
              ⋅ 환승&재도전 시 해커스패스 최대 30만원 할인!
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
