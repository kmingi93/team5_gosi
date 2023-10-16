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
                target="blank"
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
                      <Link to={"javascript:void(0)"}>OT</Link>
                    </li>
                    <li>
                      <Link to={"javascript:void(0)"}>대표 강의</Link>
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
                to={"https://gosi.hackers.com/html/professor/?user_num=112"}
                target="blank"
              >
                <p className="teacher_info_text">
                  <span className="teacher_name_code">양효주 선생님</span>
                  <span className="teacher_slogan">
                    공무원 국어에
                    <br />
                    딱 맞는 강의
                    <br />
                    효주 국어
                  </span>
                </p>
                <span className="teacher_face_img">
                  <img src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/user_num112_img_200610085044.png" />
                </span>
                <div className="teacher_info">
                  <ul className="tch_info_btns ov">
                    <li>
                      <Link to={"javascript:void(0)"}>OT</Link>
                    </li>
                    <li>
                      <Link to={"javascript:void(0)"}>대표 강의</Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://gosi.hackers.com/html/professor/?user_num=112#/notice"
                        }
                      >
                        공지사항
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://gosi.hackers.com/html/professor/?user_num=112#/freelecture"
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
                to={"https://gosi.hackers.com/html/professor/?user_num=485#/"}
                target="blank"
              >
                <p className="teacher_info_text">
                  <span className="teacher_name_code">황진선 선생님</span>
                  <span className="teacher_slogan">
                    암기가 필요없는
                    <br />
                    이해 중심 수업!
                    <br />
                    이해 국어, 황진선
                  </span>
                </p>
                <span className="teacher_face_img">
                  <img src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/user_num485_img_220905141240.png" />
                </span>
                <div className="teacher_info">
                  <ul className="tch_info_btns ov">
                    <li>
                      <Link to={"javascript:void(0)"}>OT</Link>
                    </li>
                    <li>
                      <Link to={"javascript:void(0)"}>대표 강의</Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://gosi.hackers.com/html/professor/?user_num=485#/notice"
                        }
                      >
                        공지사항
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://gosi.hackers.com/html/professor/?user_num=485#/freelecture"
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
                to={"https://gosi.hackers.com/html/professor/?user_num=340/"}
                target="blank"
              >
                <p className="teacher_info_text">
                  <span className="teacher_name_code">최정 선생님</span>
                  <span className="teacher_slogan">
                    빠른 합격의 비결
                    <br />
                    공무원국어
                    <br />
                    출제공식 마스터
                  </span>
                </p>
                <span className="teacher_face_img">
                  <img src="https://cdn.hackers.com/gosi/images/teacher_info/teacher_mg/teacher_gate/user_num340_img_200708160432.png" />
                </span>
                <div className="teacher_info">
                  <ul className="tch_info_btns ov">
                    <li>
                      <Link to={"javascript:void(0)"}>OT</Link>
                    </li>
                    <li>
                      <Link to={"javascript:void(0)"}>대표 강의</Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://gosi.hackers.com/html/professor/?user_num=340#/notice"
                        }
                      >
                        공지사항
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          "https://gosi.hackers.com/html/professor/?user_num=340#/freelecture"
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
