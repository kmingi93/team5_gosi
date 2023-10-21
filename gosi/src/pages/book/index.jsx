import TopBanner from "components/book/topBanner";
import React from "react";
import "scss/Book.scss";

export default function Index() {
  return (
    <>
      <TopBanner />
      <div className="book_inner">
        <form className="book_fliter_area">
          <div className="select_area">
            <select name="subjects" id="subjectSelect">
              <option value="">과목선택</option>
            </select>

            <select name="levels" id="levelSelect">
              <option value="">단계선택</option>
            </select>

            <select name="authors" id="authorSelect">
              <option value="">저자별</option>
            </select>
          </div>

          <div className="search_area">
            <input type="text" placeholder="저자명 or 교재명" />
            <button type="submit">검색</button>
          </div>
        </form>

        <div className="book_list">
          <div className="list_top">
            <p>
              총 <span>0000</span>권의 교재가 있습니다.
            </p>
            <div className="view_select_area">
              <button type="button" className="briefly_view active">
                <i className="book_icon book_icon04"></i>간략히보기
              </button>
              <button type="button" className="expand_view">
                <i className="book_icon book_icon05"></i>펼쳐보기
              </button>
              <select name="viewNum" id="viewSelect">
                <option value="20">20개씩</option>
                <option value="30">30개씩</option>
                <option value="40">40개씩</option>
                <option value="50">50개씩</option>
              </select>
            </div>
          </div>

          <ul className="briefly_view">
            <li>
              <input type="checkbox" disabled />
              <button type="button">
                <img
                  src="https://cdn.hackers.com/egosi/zfiles/book_img/_img_20231013145422.jpg"
                  alt="행정법총론"
                />
              </button>
              <p className="tit_kind">행정법</p>
              <button type="button" className="title">
                2024 해커스공무원 神행정법총론 핵심 기출 OX
              </button>
              <p className="info_name">
                해커스 공무원연구소<span>&#124;</span>해커스공무원
              </p>
              <p className="before_price">
                <span>36000</span>
                <em>&#91;10% &#8595;&#93;</em>
              </p>
              <p className="after_price">
                32,400원 <span>324P 적립</span>
              </p>
              <button type="button" className="bookstore">
                서점별도구매
              </button>
            </li>

            <li>
              <input type="checkbox" />
              <button type="button">
                <img
                  src="https://cdn.hackers.com/egosi/zfiles/book_img/3958_img_20231005142708.png"
                  alt="행정법총론"
                />
              </button>
              <p className="tit_kind">영어</p>
              <button type="button" className="title">
                해커스공무원 영어 하프모의고사 10월
              </button>
              <p className="info_name">
                해커스 공무원연구소<span>&#124;</span>해커스공무원
              </p>
              <p className="before_price"></p>
              <p className="after_price">
                6,000원 <span>60P 적립</span>
              </p>
              <button type="button" className="bookstore buy_now">
                <i className="book_icon book_icon06"></i>
                <span>바로구매</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
