import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "scss/Exam.scss";

export default function ExamSlider() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    initialSlide: 0,
  };

  return (
    <>
      <div className="examSlider">
        <div className="inner">
          <img
            src="https://cdn.hackers.com/gosi/images/exam9/319/img03.jpg"
            alt="합격생이 말하는 합격을 위한 필수코스"
            className="ml50"
          />
          <button type="button" className="clickBtn">
            합격예측 모의고사 신청하러 가기
          </button>
        </div>
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/slide01.png"
              alt="수강후기"
            />
          </div>
          <div>
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/slide02.png"
              alt="수강후기"
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
