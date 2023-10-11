import { useState } from "react";
import "scss/Teacher.scss";
import { Link } from "react-router-dom";

export default function TeacherLnb() {
  const [lnbCount, SetLnbCount] = useState("on");
  function lnb_togle(params) {
    if (lnbCount === "on") {
      SetLnbCount("off");
    } else {
      SetLnbCount("on");
    }
  }
  return (
    <>
      <div className="teacher_top">
        <div className="teacher_inner">
          <p className="teacher_top_txt">
            합격생 96.6% 적극 추천!
            <br />
            70개 직렬 합격자 배출, 최정상급 전문 강사진
            <span className="teacher_top_sub_txt">
              * [96.6% 추천] 2021년 공무원 시험 최종합격 후 환급받은 자 대상
              설문조사 결과
              <br />* [70개 직렬] 해커스공무원 수강생 중 2019-2022년도 9·7급
              공무원 합격자 직렬 조사 결과
            </span>
          </p>
          <div className="teacher_notice">
            <div className="notice_slider">
              <p className="notice_tit">
                <img
                  src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/notice_icon1.png"
                  alt="공지사항 아이콘"
                />
                공지사항
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="teacher_gate teacher_inner">
        {/* teacher_list */}
        <div className="left_wrap">
          <div className="left_title">공무원 선생님</div>
          <div className="subject_category">9급 공통과목</div>
          <ul className="teacher_list">
            <li className="sub_tit" onClick={lnb_togle}>
              <p id="subject_1" className="on">
                국어
              </p>
              <ul className="teacher_name">
                <li className="on">
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=73"}
                  >
                    신민숙
                  </Link>
                </li>
                <li className="on">
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=112"}
                  >
                    양효주
                  </Link>
                </li>
                <li className="on">
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=485"}
                  >
                    황진선
                  </Link>
                </li>
                <li className="on">
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=340"}
                  >
                    최정
                  </Link>
                </li>
                <li className="on">
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=65"}
                  >
                    유정민
                  </Link>
                </li>
                <li className="on">
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=540"}
                  >
                    고혜원
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* teacher_contents */}
        <div className="teacher_contents">
          <div className="title_section ov">
            <span className="path fr">
              Home &gt;<em>공무원 선생님</em>
            </span>
          </div>
          {/* tab_area */}
          <div className="teacher_tab_area">
            <ul className="tab p_tab">
              <li className="on">
                <button type="button" class="subject_1">
                  국어
                </button>
              </li>
              <li>
                <button type="button" class="subject_2">
                  영어
                </button>
              </li>
              <li>
                <button type="button" class="subject_3">
                  한국사
                </button>
              </li>
              <li>
                <button type="button" class="subject_4">
                  7급 공통과목
                </button>
              </li>
              <li>
                <button type="button" class="subject_5">
                  7/9급 전공
                  <br />
                  행정/일반
                </button>
              </li>
              <li>
                <button type="button" class="subject_6">
                  7/9급 전공
                  <br />
                  기술
                </button>
              </li>
              <li>
                <button type="button" class="subject_7">
                  면접
                </button>
              </li>
              <li>
                <button type="button" class="subject_8">
                  검정시험
                </button>
              </li>
              <li>
                <button type="button" class="subject_9">
                  제2외국어
                </button>
              </li>
            </ul>
            <div className="tabcon p_tabcon on">
              <ul className="sub_tab p_sub_tab">
                <li className="on">
                  <a href="javascript:void(0)" className="subject_1">
                    국어
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* //tab_area */}

          <div className="subject_tab_area cf">
            <div className="cf subject_1">
              {/* tab_area-과목별 배너 영역 */}
              <div className="rolling_banner1 fl cf">
                <div className="bxslider-default rolling_bx">
                  <ul className="bxslider banner_slider">
                    <li>
                      <a
                        href="https://egosi.hackers.com/site/?c=event&evt_cd=EG2022113000"
                        target="blank"
                      >
                        <img src="https://gosi.hackers.com/zfiles/teacher_gate/banner/20220711_234654/566x160_01.jpg" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* //tab_area-과목별 배너 영역 */}
              {/* tab_area-대표강의 영역 */}
              <div className="rolling_banner2 fr cf">
                <div className="bxslider-default rolling_bx2">
                  <ul className="bxslider banner_slider2">
                    <li>
                      <div className="sd_box">
                        <div className="tc_name fl">황진선</div>
                        <p className="sd_box_txt fr">
                          [문풀]
                          <br />
                          비비안 영어
                          <br />
                          기출의 모든것
                        </p>
                      </div>
                      <div className="bar_menu">
                        <ul>
                          <li>
                            <span>OT</span>
                          </li>
                          <li>
                            <span>대표 강의</span>
                          </li>
                          <li>
                            <span>자세히보기</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* //tab_area-대표강의 영역 */}
            </div>
            {/* teacher_notice */}
            <div className="teacher_notice">
              <p className="tit fl">
                <img
                  src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/notice_icon2.png"
                  alt="공지사항 아이콘"
                />
                선생님 공지
              </p>
              <div className="tc_notice_slider p_tc_notice_slider">
                <ul className="bxslider">
                  <li>
                    <Link
                      to={
                        "https://gosi.hackers.com/html/professor/?user_num=540#/notice_view/1205"
                      }
                    >
                      <strong>&#91;고혜원&#93;</strong> 2024 대비 혜원국어 강의
                      커리큘럼 안내
                      <img
                        src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/new_icon.png"
                        class="new_icon"
                        alt="new 아이콘"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* //teacher_notice */}
            {/* teacher_face */}
            <div className="teacher_face_area">
              <div className="teacher_face">
                <ul>
                  <li className="teacher_box">
                    <Link
                      to={
                        "https://gosi.hackers.com/html/professor/?user_num=73#/"
                      }
                    >
                      <p className="teacher_info_text">
                        <span className="teacher_name_code">신민숙 선생님</span>
                        <span className="teacher_slogan">
                          쌩기초 입문생도
                          <br />
                          국어가 쉽게 느껴지는
                          <br />
                          쉬운국어, 신민숙
                        </span>
                      </p>
                      <span className="teacher_face_img">
                        <img src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/user_num73_img_200615103916.png" />
                      </span>
                      <div className="teacher_info">
                        <ul className="tch_info_btns ov">
                          <li>
                            <a
                              href="javascript:void(0);"
                              onclick="tc_movie('https://cdndown.hackers.com/pass/no/mp4/promotion/230621/2024_sms_youtube.mp4', 750, 450)"
                            >
                              OT
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              onclick="tc_movie('https://youtu.be/O4druyNe6Io', 750, 450)"
                            >
                              대표 강의
                            </a>
                          </li>
                          <li>
                            <Link
                              to={
                                "https://gosi.hackers.com/html/professor/?user_num=73#/notice"
                              }
                            >
                              공지사항
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={
                                "https://gosi.hackers.com/html/professor/?user_num=73#/freelecture"
                              }
                            >
                              무료강의
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </li>
                  <li className="teacher_box">
                    <Link
                      to={
                        "https://gosi.hackers.com/html/professor/?user_num=73#/"
                      }
                    >
                      <p className="teacher_info_text">
                        <span className="teacher_name_code">신민숙 선생님</span>
                        <span className="teacher_slogan">
                          쌩기초 입문생도
                          <br />
                          국어가 쉽게 느껴지는
                          <br />
                          쉬운국어, 신민숙
                        </span>
                      </p>
                      <span className="teacher_face_img">
                        <img src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/user_num73_img_200615103916.png" />
                      </span>
                      <div className="teacher_info">
                        <ul className="tch_info_btns ov">
                          <li>
                            <a
                              href="javascript:void(0);"
                              onclick="tc_movie('https://cdndown.hackers.com/pass/no/mp4/promotion/230621/2024_sms_youtube.mp4', 750, 450)"
                            >
                              OT
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0);"
                              onclick="tc_movie('https://youtu.be/O4druyNe6Io', 750, 450)"
                            >
                              대표 강의
                            </a>
                          </li>
                          <li>
                            <Link
                              to={
                                "https://gosi.hackers.com/html/professor/?user_num=73#/notice"
                              }
                            >
                              공지사항
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={
                                "https://gosi.hackers.com/html/professor/?user_num=73#/freelecture"
                              }
                            >
                              무료강의
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* //teacher_face */}
          </div>
        </div>
      </div>
    </>
  );
}
