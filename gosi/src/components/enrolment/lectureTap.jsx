import { useState } from "react";
import { Tooltip } from "react-bootstrap";

export default function LectureTap() {
  const [isHovering, setIsHovering] = useState(0);
  function WindowOpen() {
    window.open(
      "./guidePopup",
      "_blank",
      "width=750,height=860,scrollbars=yes,resizable=yes"
    );
  }
  return (
    <div className="lecture_cont">
      <div className="title_section">
        <p className="title">9급인강</p>
        <p className="lecture_nav">
          Home&nbsp; &gt; &nbsp;수강신청&nbsp; &gt; &nbsp;<em>9급인강</em>
        </p>
      </div>
      <form id="search_form" method="get">
        <div className="search_section">
          <p className="title">강좌 찾아보기</p>
          <div className="search_box">
            <button type="button" className="guide_btn" onClick={WindowOpen}>
              수강신청가이드
            </button>
            <input
              className="lecture_search"
              type="text"
              placeholder="강좌명을 입력하세요."
            ></input>
            <button className="search_btn" type="submit">
              검색
              <img
                className="icon_q_mark"
                src="https://egosi.hackers.com/images/lecture/icon_q_mark.png"
                alt="?마크"
                onMouseOver={() => setIsHovering(1)}
                onMouseOut={() => setIsHovering(0)}
              />
            </button>
            <button className="reset_btn" type="button">
              초기화
            </button>
            <div className={isHovering === 1 ? "tooltip on" : "tooltip"}>
              <p>
                <strong>과목 검색이 가능</strong>합니다.
                <br />
                [과목선택] 영역에서
                <br />
                원하는 과목을 선택 후,
                <br />
                검색어를 입력해주세요.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
