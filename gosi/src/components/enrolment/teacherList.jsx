import { Link } from "react-router-dom";
export default function TeacherList() {
  return (
    <>
      <div className="new_lec_chK">
        <input type="checkbox" id="new_lec_chK" />
        <label htmlFor="new_lec_chK">신규 개강 강좌</label>
        <select className="lec_year">
          <option value="">대비연도</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
      </div>
      <div className="t_bnr">
        <img
          className="t_img"
          src="https://cdn.hackers.com/egosi/zfiles/teacher_img/11126x114.png"
          alt=""
        />
        <div className="t_title">
          <p className="t_info">누구나 듣기 쉬운영어 영어 디딤돌, 비비안</p>
          <p className="t_name">비비안 선생님</p>
          <button type="button" className="t_home_btn">
            HOME &gt;
          </button>
        </div>
      </div>
      <div className="t_lecture_wrap">
        <p className="t_subject">입문과정</p>
        {/* 강의박스 */}
        <div className="lecture_box">
          <div className="l_section">
            <span className="mark new">NEW</span>
            <span className="mark doing">진행중</span>
            <span className="mark clear">완강</span>
            <span className="mark common">공통</span>
            <span className="mark free">무료제공</span>
            <Link
              className="t_detail_link"
              to={"//egosi.hackers.com/site/event/2020/0622_electropass/"}
              target="_blank"
            >
              [입문] 2024 비비안 영어 공무원 기출보카 4800
            </Link>
            <ul className="commentary_area">
              <li className="commentary_icon period">
                <span></span>
                <p>29강 (수강기간 60일)</p>
              </li>
              <li className="commentary_icon mobile">
                <span></span>
                <p>Mobile</p>
              </li>
              <li className="commentary_icon pc">
                <span></span>
                <p>PC</p>
              </li>
              <li className="commentary_icon interest">
                <span></span>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/0622_electropass/"}
                  target="_blank"
                >
                  관심강좌
                </Link>
              </li>
            </ul>
          </div>
          <div className="m_section">
            <div className="t_video_btn">
              <button type="button">OT</button>
              <button type="button">맛보기</button>
            </div>
          </div>
          <div className="r_section">
            <ul className="payment_area">
              <li>
                <div className="input_area">
                  <input type="checkbox" id="payment_chk01" />
                  <label htmlFor="payment_chk01">동영상(pc/모바일)</label>
                </div>
                <p className="price">94,000원</p>
              </li>
              <li>
                <div className="input_area">
                  <input type="checkbox" id="payment_chk02" />
                  <label htmlFor="payment_chk02">다운로드+모바일</label>
                </div>
                <p className="price">94,000원</p>
              </li>
              <li>
                <div className="input_area">
                  <input type="checkbox" id="payment_chk03" />
                  <label htmlFor="payment_chk03">
                    동영상(PC/모바일)+다운로드
                  </label>
                </div>
                <p className="price">129,600원</p>
              </li>
            </ul>
          </div>
        </div>
        {/* 교재박스 */}
        <div className="book_info_box">
          <p className="book_title">
            <strong>교재</strong> 2022 해커스공무원 실전동형모의고사 영어2
          </p>
          <p className="book_detail">
            [서점별도구매]
            <Link
              className="book_detail_btn"
              to={"//egosi.hackers.com/site/event/2020/0622_electropass/"}
              target="_blank"
            >
              [자세히보기 ▶]
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
