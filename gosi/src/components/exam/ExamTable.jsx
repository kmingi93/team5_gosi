import React from "react";
import "scss/Exam.scss";

export default function ExamTable() {
  return (
    <>
      <div className="examTable">
        <div className="inner">
          <img
            src="https://cdn.hackers.com/gosi/images/exam9/319/img01.jpg"
            alt="온라인 모의고사"
            className="ml50"
          />
          <div className="tableArea">
            <table>
              <colgroup>
                <col width="25%" />
                <col width="75%" />
              </colgroup>
              <tbody>
                <tr>
                  <th>접수기간</th>
                  <td>2023.10.22(일) 09:50까지</td>
                </tr>
                <tr>
                  <th>응시직렬</th>
                  <td>
                    최대 17개 직렬{" "}
                    <button type="button">자세히 보기 &gt;</button>
                  </td>
                </tr>
                <tr>
                  <th>응시료</th>
                  <td>
                    7,000원{" "}
                    <button type="button">소문내기 참여 시 무료 &gt;</button>
                  </td>
                </tr>
                <tr>
                  <th>응시 장소</th>
                  <td>온라인 모의고사는 PC를 통해 응시 가능합니다.</td>
                </tr>
                <tr>
                  <th>응시 일시</th>
                  <td>2023.10.22(일) 10:00~2023.10.26(목) 23:59</td>
                </tr>
                <tr>
                  <th>응시 방법</th>
                  <td>
                    ID당 1회 신청 가능합니다.
                    <br />
                    나의 강의실 &gt; 모의고사/성적확인 &gt; 응시하기
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              *개인 인터넷 환경에 따른 오류 발생 시, 다른 브라우저 및 다른
              기기를 통해 재응시 부탁드립니다.
              <br />
              *9월 9급 모의고사는 온라인으로만 진행됩니다.
            </p>
          </div>
          <button type="button" className="clickBtn">
            온라인 모의고사 신청
          </button>
        </div>
      </div>
    </>
  );
}
