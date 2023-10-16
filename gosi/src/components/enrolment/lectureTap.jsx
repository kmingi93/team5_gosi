export default function LectureTap() {
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
      <form id="search_form" method="get" onsubmit="return false;">
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
              />
            </button>
            <button className="reset_btn" type="button">
              초기화
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
