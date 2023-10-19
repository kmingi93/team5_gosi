import { useState } from "react";

export default function LectureTap() {
  const [isHovering, setIsHovering] = useState(0); //검색 툴팁
  const [tabTogle01, SetTabTogle01] = useState("on");
  const [tabTogle02, SetTabTogle02] = useState("on");
  const [tabTogle03, SetTabTogle03] = useState("on");
  function TabTogle01() {
    if (tabTogle01 === "on") {
      SetTabTogle01("off");
    } else {
      SetTabTogle01("on");
    }
  }
  function TabTogle02() {
    if (tabTogle02 === "on") {
      SetTabTogle02("off");
    } else {
      SetTabTogle02("on");
    }
  }
  function TabTogle03() {
    if (tabTogle03 === "on") {
      SetTabTogle03("off");
    } else {
      SetTabTogle03("on");
    }
  }
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
      {/* 강좌 찾아보기 */}
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
      {/* 강의 리스트 탭 */}
      <div className="lecture_section">
        <table>
          <colgroup>
            <col width="22%" />
            <col width="78%" />
          </colgroup>
          <tbody>
            <tr>
              <th>
                직렬선택
                <span className="tab_btn" onClick={TabTogle01}>
                  {tabTogle01 === "on" ? "접기▲" : "더보기▼"}
                </span>
              </th>
              <td>
                <ul
                  className={tabTogle01 === "on" ? "tab_list on" : "tab_list"}
                >
                  <li className="on">전체</li>
                  <li>일반행정직</li>
                  <li>선거행정직</li>
                  <li>교육행정직</li>
                  <li>고용노동직</li>
                  <li>회계&amp;재경직</li>
                  <li>세무직</li>
                  <li>관세직</li>
                  <li>감사직</li>
                  <li>교정직</li>
                  <li>보호직</li>
                  <li>검찰직</li>
                  <li>출입국관리직</li>
                  <li>전산직</li>
                  <li>외무영사직</li>
                  <li>전기직</li>
                  <li>군무원</li>
                  <li>건축직</li>
                  <li>기계직</li>
                  <li>국회직</li>
                  <li>통신직</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th>
                학습단계
                <span className="tab_btn" onClick={TabTogle02}>
                  {tabTogle02 === "on" ? "접기▲" : "더보기▼"}
                </span>
              </th>
              <td>
                <ul
                  className={tabTogle02 === "on" ? "tab_list on" : "tab_list"}
                >
                  <li className="on">전체</li>
                  <li>일반행정직</li>
                  <li>선거행정직</li>
                  <li>교육행정직</li>
                  <li>고용노동직</li>
                  <li>회계&amp;재경직</li>
                  <li>세무직</li>
                  <li>관세직</li>
                  <li>감사직</li>
                  <li>교정직</li>
                  <li>보호직</li>
                  <li>검찰직</li>
                  <li>출입국관리직</li>
                  <li>전산직</li>
                  <li>외무영사직</li>
                  <li>전기직</li>
                  <li>군무원</li>
                  <li>건축직</li>
                  <li>기계직</li>
                  <li>국회직</li>
                  <li>통신직</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th>
                과목선택
                <span className="tab_btn" onClick={TabTogle03}>
                  {tabTogle03 === "on" ? "접기▲" : "더보기▼"}
                </span>
              </th>
              <td>
                <ul
                  className={tabTogle03 === "on" ? "tab_list on" : "tab_list"}
                >
                  <li className="on">전체</li>
                  <li>일반행정직</li>
                  <li>선거행정직</li>
                  <li>교육행정직</li>
                  <li>고용노동직</li>
                  <li>회계&amp;재경직</li>
                  <li>세무직</li>
                  <li>관세직</li>
                  <li>감사직</li>
                  <li>교정직</li>
                  <li>보호직</li>
                  <li>검찰직</li>
                  <li>출입국관리직</li>
                  <li>전산직</li>
                  <li>외무영사직</li>
                  <li>전기직</li>
                  <li>군무원</li>
                  <li>건축직</li>
                  <li>기계직</li>
                  <li>국회직</li>
                  <li>통신직</li>
                </ul>
              </td>
            </tr>

            <tr>
              <th>선생님</th>
              <td>
                <ul className="tab_list on">
                  <li className="on">전체</li>
                  <li>일반행정직</li>
                  <li>선거행정직</li>
                  <li>교육행정직</li>
                  <li>고용노동직</li>
                  <li>회계&amp;재경직</li>
                  <li>세무직</li>
                  <li>관세직</li>
                  <li>감사직</li>
                  <li>교정직</li>
                  <li>보호직</li>
                  <li>검찰직</li>
                  <li>출입국관리직</li>
                  <li>전산직</li>
                  <li>외무영사직</li>
                  <li>전기직</li>
                  <li>군무원</li>
                  <li>건축직</li>
                  <li>기계직</li>
                  <li>국회직</li>
                  <li>통신직</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
