import React from "react";
import Slider from "react-slick";
import "scss/Book.scss";
import bookData from "mocks/book.json";

export default function Index() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    initialSlide: 0,
  };
  console.log(bookData);

  return (
    <>
      <div className="book_top">
        <div className="book_inner book_top_area">
          <div className="left_area">
            <p className="book_title">
              <i className="book_icon book_icon01"></i>
              1위 해커스공무원 추천교재
            </p>
            <Slider {...settings}>
              {bookData
                .filter((book) => book.bookCategory === "recomend")
                ?.map((book) => (
                  <div key={book.bookId}>
                    <div className="slide_box">
                      <img
                        src={book.bookImage}
                        alt={book.bookTitle}
                        width="auto"
                        height="250"
                      />
                      <div className="slide_txt_area">
                        <a href="/#" className="txt_title">
                          {book.bookTitle}
                        </a>
                        <p className="txt_info">{book.bookInfo}</p>
                        <div className="txt_intro">{book.bookDetail}</div>
                        <div className="price_info">
                          <span className="p_txt01">
                            {`${book.bookPrice
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                            원
                          </span>
                          <span className="p_txt02">
                            [{book.bookDiscount}% ↓]
                          </span>
                          <span className="p_txt03">
                            {`${(
                              book.bookPrice *
                              ((100 - book.bookDiscount) / 100)
                            )
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                            원
                          </span>
                          <span className="p_txt04">
                            <i className="book_icon book_icon02"></i>
                            {`${Math.round(
                              (book.bookPrice *
                                ((100 - book.bookDiscount) / 100)) /
                                100
                            )}`}
                            P 적립
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
          <div className="right_area">
            <p className="book_title">
              <i className="book_icon book_icon01"></i>
              베스트교재 TOP 10
            </p>
            <Slider {...settings}>
              <div className="best_book_slide">
                {bookData
                  .filter(
                    (book) => book.bookCategory === "best" && book.lank === 1
                  )
                  ?.map((book) => (
                    <div className="best_book_area">
                      <i className="book_icon book_icon03">{book.lank}위</i>
                      <img
                        src={book.bookImage}
                        alt="교재"
                        className="best_book"
                      />
                      <div className="txt_box">
                        <p>
                          판매랭킹 <span>{book.lank}위</span>
                        </p>
                        <a href="/site/?c=online_book_view&book_id=3935">
                          <em>{book.bookTitle}</em>
                        </a>
                      </div>
                    </div>
                  ))}
                {bookData
                  .filter(
                    (book) =>
                      book.bookCategory === "best" &&
                      book.lank >= 2 &&
                      book.lank <= 5
                  )
                  ?.map((book) => (
                    <div className="best_book_area">
                      <span className="lank_num">{book.lank}위</span>
                      <a
                        href="/#"
                        className="best_landing"
                        title={book.bookTitle}
                      >
                        {book.bookTitle}
                      </a>
                    </div>
                  ))}
              </div>
              <div className="best_book_slide">
                {bookData
                  .filter(
                    (book) => book.bookCategory === "best" && book.lank === 6
                  )
                  ?.map((book) => (
                    <div className="best_book_area">
                      <i className="book_icon book_icon03">{book.lank}위</i>
                      <img
                        src={book.bookImage}
                        alt="교재"
                        className="best_book"
                      />
                      <div className="txt_box">
                        <p>
                          판매랭킹 <span>{book.lank}위</span>
                        </p>
                        <a href="/site/?c=online_book_view&book_id=3935">
                          <em>{book.bookTitle}</em>
                        </a>
                      </div>
                    </div>
                  ))}
                {bookData
                  .filter(
                    (book) =>
                      book.bookCategory === "best" &&
                      book.lank >= 7 &&
                      book.lank <= 10
                  )
                  ?.map((book) => (
                    <div className="best_book_area">
                      <span className="lank_num">{book.lank}위</span>
                      <a
                        href="/#"
                        className="best_landing"
                        title={book.bookTitle}
                      >
                        {book.bookTitle}
                      </a>
                    </div>
                  ))}
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
