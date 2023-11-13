import TopBanner from "components/book/topBanner";
import { useState } from "react";
import "scss/Book.scss";
import bookData from "mocks/book.json";

export default function Index() {
  const [view, setView] = useState("simple");

  // 콤마
  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

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
              총{" "}
              <span>
                {
                  bookData.filter((book) => book.bookCategory === "basic")
                    .length
                }
              </span>
              권의 교재가 있습니다.
            </p>
            <div className="view_select_area">
              <button
                type="button"
                className={`${view === "simple" ? "active" : ""}`}
                onClick={() => setView("simple")}
              >
                <i className="book_icon book_icon04"></i>간략히보기
              </button>
              <button
                type="button"
                className={`${view === "expand" ? "active" : ""}`}
                onClick={() => setView("expand")}
              >
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

          <ul
            className={`${view === "simple" ? "simple_view" : "expand_view"}`}
          >
            {bookData
              .filter((book) => book.bookCategory === "basic")
              ?.map((book) => (
                <li key={book.index}>
                  {book.store ? (
                    <input type="checkbox" />
                  ) : (
                    <input type="checkbox" disabled />
                  )}

                  <button type="button" className="book_img_btn">
                    <img src={book.bookImage} alt={book.bookTitle} />
                  </button>

                  <div className="book_info_area">
                    <p className="tit_kind">{book.bookSubject}</p>
                    <button type="button">
                      <p className="title">{book.bookTitle}</p>
                    </button>
                    {/* 일부 펼쳐볼 경우만 노출 */}
                    <p className="info_name">
                      {book.bookInfo}{" "}
                      {view === "expand" && `| 출간일 ${book.bookInfoDate}`}
                    </p>

                    {view === "expand" && (
                      <>
                        <p
                          className="book_detail"
                          dangerouslySetInnerHTML={{ __html: book.bookDetail }}
                        ></p>

                        <p className="book_delivery">
                          <span>
                            [출고 예정일] {year}-{month}-{day + 1}
                          </span>{" "}
                          | 출고일로부터{" "}
                          {`${book.bookDelivery - 2}~${book.bookDelivery}`}일
                          이내 수령 가능
                        </p>
                      </>
                    )}
                  </div>

                  <div className="price_area">
                    {book.bookDiscount !== "" && (
                      <p className="before_price">
                        <span>{`${addComma(book.bookPrice)}`}</span>
                        <em>&#91;{book.bookDiscount}% &#8595;&#93;</em>
                      </p>
                    )}
                    <p className="after_price">
                      {addComma(
                        book.bookPrice * ((100 - book.bookDiscount) / 100)
                      )}
                      원{" "}
                      <span>
                        {Math.round(
                          (book.bookPrice * ((100 - book.bookDiscount) / 100)) /
                            100
                        )}
                        P 적립
                      </span>
                    </p>

                    {view === "simple" ? (
                      // 간단히 보기
                      <>
                        {book.store ? (
                          <button type="button" className="bookstore buy_now">
                            <i></i>
                            <span>바로구매</span>
                          </button>
                        ) : (
                          <button type="button" className="bookstore">
                            서점별도구매
                          </button>
                        )}
                      </>
                    ) : (
                      // 펼쳐보기
                      <>
                        {book.store ? (
                          <>
                            <span className="book_mark reserve_icon">
                              예약판매중
                            </span>
                            <button type="button" className="bookstore">
                              바로구매
                            </button>
                            <button className="bookstore cart_btn">
                              장바구니
                            </button>
                          </>
                        ) : (
                          <>
                            <span className="book_mark sold_icon">
                              서점별도구매
                            </span>
                            <button type="button" className="bookstore">
                              바로구매
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
