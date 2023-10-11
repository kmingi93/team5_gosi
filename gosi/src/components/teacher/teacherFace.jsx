import React from "react";
import { Link } from "react-router-dom";

export default function TeacherFace() {
  return (
    <>
      <div className="teacher_face_area">
        <div className="teacher_face">
          <ul>
            <li className="teacher_box">
              <Link
                to={"https://gosi.hackers.com/html/professor/?user_num=73#/"}
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
                to={"https://gosi.hackers.com/html/professor/?user_num=73#/"}
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
    </>
  );
}
