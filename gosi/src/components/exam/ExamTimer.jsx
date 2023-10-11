import React from "react";
import "scss/Exam.scss";

export default function ExamTimer() {
  return (
    <>
      <div className="examTimer">
        <div className="inner">
          <img
            src="https://cdn.hackers.com/gosi/images/exam9/319/timer.jpg"
            alt="타이머"
          />
          <div className="timerTxt">
            <span className="day">00</span>
            <span className="hour">00</span>
            <span className="minute">00</span>
            <span className="sec">00</span>
          </div>
          <a className="timerBtn" href="">
            신청하러 가기
          </a>
        </div>
      </div>
    </>
  );
}
