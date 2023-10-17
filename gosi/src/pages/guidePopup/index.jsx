import { useState } from "react";
import Slider from "react-slick";
import "scss/guidePopup.scss";
export default function Index() {
  const [tabActive, SetTabActive] = useState(0);
  const settings = {
    arrows: true,
    infinite: true,
    lazyLoad: "ondemand",
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    fade: true,
  };
  return (
    <>
      <div className="pop_apply_guide">
        <h2 className="pop_tit">
          <img
            src="https://egosi.hackers.com/images/lecture/guide_tit.jpg"
            alt=""
          />
        </h2>
        <div className="tab_area">
          <ul className="pop_tab">
            <li
              className={tabActive === 0 ? "active" : null}
              onClick={() => {
                SetTabActive(0);
              }}
            >
              <button type="button">단과 수강신청</button>
            </li>
            <li
              className={tabActive === 1 ? "active" : null}
              onClick={() => {
                SetTabActive(1);
              }}
            >
              <button type="button">패스 수강신청</button>
            </li>
          </ul>
          <div className={tabActive === 0 ? "tabcon active" : "tabcon"}>
            <Slider {...settings}>
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider01_1.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider01_2.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider01_3.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider01_4.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider01_5.jpg"
                alt=""
              />
            </Slider>
          </div>
          <div className={tabActive === 1 ? "tabcon active" : "tabcon"}>
            <Slider {...settings}>
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider02_1.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider02_2.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider02_3.jpg"
                alt=""
              />
              <img
                src="https://egosi.hackers.com/images/lecture/guide_slider02_4.jpg"
                alt=""
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
