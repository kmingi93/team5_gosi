import React from "react";
import "scss/Exam.scss";

export default function ExamBanner() {
  return (
    <>
      <div className="examBanner">
        <ul>
          <li>
            <a href="">
              <img
                src="https://cdn.hackers.com/gosi/images/exam9/319/quick01.png"
                alt="모의고사 응시하기"
              />
              <p>
                <span>23년 10월</span>
                <br />
                모의고사 응시하기 &#62;
              </p>
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn.hackers.com/gosi/images/exam9/319/quick02.png"
                alt="모의고사 소문내고 응시권 무료받기"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn.hackers.com/gosi/images/exam9/319/quick03.png"
                alt="응시 후기 작성하고 상품권 받기"
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                src="https://cdn.hackers.com/gosi/images/exam9/319/quick04.png"
                alt="구매자 대상 이벤트"
              />
              <p>
                9월 모의고사
                <br />
                <strong>무료 응시권 받기 &#62;</strong>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
