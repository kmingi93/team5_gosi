import React from "react";
import "scss/Exam.scss";

export default function TabContent(props) {
  if (props.clickedTab === 0) {
    return (
      <div className="examTabcon main">
        <div className="cont01">
          <div className="inner">
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/tab01_con01.png"
              alt="해커스공무원 스타강사진과 해커스공무원 연구소의 합작!"
              className="ml50"
            />
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/tab01_con02.png"
              alt="1위 해커스공무원의 고퀄리티 모의고사"
              className="ml50"
            />
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/tab01_con03.png"
              alt="성적분석 시스템 및 해설강의 제공"
              className="ml50"
            />
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/tab01_con04.png"
              alt="실제 공무원 시험장의 현장감까지 100% 그대로 재현"
              className="ml50"
            />
            <button type="button" className="clickBtn">
              합격예측 모의고사 신청하러 가기
            </button>
          </div>
        </div>
        <div className="cont02">
          <div className="inner">
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/img04.png"
              alt="9,7급 공무원 70개 직렬 합격자 배출한 1위 해커스공무원"
            />
          </div>
        </div>
        <div className="cont03">
          <div className="inner">
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/img_step.png"
              alt="소문내고 모의고사 무료 응시권 받자"
              className="ml50"
              id="somun"
            />
            <span className="date_txt">
              기간한정 : 2023년 09월 26일(화) 까지
            </span>
            <div className="step_btn">
              <button type="button">소문내기 이미지 다운로드</button>
              <button type="button">페이지 url 복사</button>
            </div>
            <ul className="community_area">
              <li>
                <a href="https://cafe.daum.net/9glade" target="_blank">
                  구꿈사
                </a>
              </li>
              <li>
                <a href="https://cafe.naver.com/kts9719" target="_blank">
                  닥공사
                </a>
              </li>
              <li className="step_blog">
                <a href="https://section.blog.naver.com/" target="_blank">
                  블로그
                </a>
              </li>
              <li>
                <a href="https://cafe.naver.com/m2school" target="_blank">
                  독공사
                </a>
              </li>
              <li>
                <a href="https://cafe.naver.com/gugrade" target="_blank">
                  공드림
                </a>
              </li>
              <li>
                <a href="https://cafe.daum.net/ok1221" target="_blank">
                  다음 쭉빵
                </a>
              </li>
              <li>
                <a href="https://www.ppomppu.co.kr/" target="_blank">
                  뽐뿌
                </a>
              </li>
              <li>
                <a href="https://theqoo.net/" target="_blank">
                  더쿠
                </a>
              </li>
              <li>
                <a href="https://web.humoruniv.com/main.html" target="_blank">
                  웃긴대학
                </a>
              </li>
            </ul>
            <div className="evt_box">
              <input
                type="text"
                className="p_share_url"
                placeholder="소문내기 한 커뮤니티 게시글의 URL을 등록해주세요:)"
              />
              <button type="button">인증하기 &#62;</button>
            </div>
          </div>
        </div>
        <div className="cont04">
          <div className="inner">
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/img05.png"
              alt="모의고사 성적 우수자 장학금 혜택 증정"
            />
            <span className="date_txt">기간한정 : 2023.09.22 (금)까지</span>
            <p>
              &#8251; 유의사항
              <br />
              이벤트 세부내용은 아래 유의사항을 참고해주세요.
            </p>
            <div className="evt_box">
              <input
                type="text"
                className="scholarship_input"
                placeholder="작성한 모의고사 후기 URL을 입력해주세요."
              />
              <button type="button">후기 인증하기&gt;</button>
            </div>
          </div>
        </div>
        <div className="cont05">
          <div className="inner">
            <img
              src="https://cdn.hackers.com/gosi/images/exam9/319/img06.png"
              alt="1위 해커스가 만든 합격예측 전국 모의고사"
            />
            <div className="txt_box">
              <p>
                <strong>&#60;모의고사 관련 유의사항&#62;</strong>
                &#8251; 모의고사 환불은 응시 전에만 가능 하며, 응시일 경과 시
                환불이 불가 합니다.
                <br />
                <br />
                <strong>1. 시험지 다운로드 관련 모의고사 정책 변경 사항</strong>
                &#9424; 시험지 및 해설지의 경우, 자신이 선택한 과목에 대한
                파일만 다운로드 가능 합니다.
                <br />
                &#9425; 시험지 및 해설지 파일 다운로드의 경우 &#91;2회&#93; 만
                다운로드 가능합니다.
                <br />
                &#9426; 선택 과목의 경우, 응시창에서 셀렉박스 선택 후
                &#91;응시하기&#93; 버튼 혹은 &#91;시험지 다운로드&#93; 버튼 클릭
                시 변경 불가합니다.
                <br />
                2. 크롬 브라우저 이용 시, 시험 제출에 오류가 생길 수 있으므로
                크롬 외의 다른 브라우저 사용하여 응시하시는 것을 권장드립니다.
                <br />
                3. 오프라인 모의고사 응시자는 반드시 15분 전에 입실하시기
                바랍니다.
                <br />
                <br />
                <strong>&#60;소문내기 이벤트 유의사항&#62;</strong>
                소문내기 이벤트 가이드 및 유의사항을 꼭 확인하고 참여해주시길
                바라며, 아래 유의사항 중 하나라도 지켜지지 않을 경우에는 혜택이
                지급되지 않습니다.
                <br />
                1. 해당 페이지 소문내기 이미지+URL+글 순서로 모두 첨부되지 않은
                게시글은 인정되지 않습니다.
                <br />
                2. 아래의 예시처럼 게시글의 제목에 '해커스공무원' 이 반드시
                기입되어야 하며, 제목을 모두 다르게 해야 전원 증정 혜택이
                제공됩니다.
                <br />
                EX&#41; 해커스공무원 모의고사 보러 ㄱㄱ / 해커스공무원 모의고사
                보고 50만원 받자
                <br />
                *동일한 제목으로 도배 시 하나의 게시글로 인정됩니다.
                <br />
                3. 소문내기 게시글 20건 중 5건은 반드시 블로그에 작성되어야
                합니다.
                <br />
                4. 모의고사 무료응시권의 경우에는 지정 커뮤니티 어느 곳에나
                1건만 작성하여도 즉시 지급됩니다
                <br />
                <br />
                <strong>&#60;장학혜택 이벤트 유의사항&#62;</strong>
                1. 모든 성적 기준은 과락 없이 과목 평균 점수입니다.
                <br />
                2. 온라인 모의고사 장학혜택 기준 석차는 평균 점수를 기준으로
                산출됩니다.
                <br />
                3. 온라인 모의고사 장학혜택 이벤트는 시험 당일 14:00까지 답안을
                제출한 응시자에 한해 참여가 가능합니다.
                <br />
                4. 성적우수자에게는 별도 안내가 진행될 예정이며, 모의고사 후기를
                작성하여 안내된 방법으로 전달주시면 장학금 혜택이 지급됩니다.
                <br />
                5. 반드시 모의고사 응시 결과&#40;인증 이미지&#41;를 첨부한 후,
                모의고사 관련 후기를 500자 이상 작성해주시기 바랍니다 .<br />
                *작성기준에 충족되지 않으면 혜택 지급이 불가합니다.
                <br />
                6. 장학혜택 지급 대상자에게는 이벤트 혜택 대상자로 선정되었다는
                알림 문자 발송 예정이며, 혜택은 이벤트 마감일을 기준으로 2주
                이내 순차 지급됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.clickedTab === 1) {
    return (
      <div className="examTabcon tab01">
        <div className="inner">
          <div className="exam_tit">
            <p>
              모의고사 <span>정답확인</span>
            </p>
            <span className="s_txt">
              - 2023년 8월 13일(일)에 실시한 해커스 공무원 합격예측 모의고사
              정답을 확인하실 수 있습니다.
            </span>
          </div>
          <p></p>
          <div className="exam_sub_tit">
            <p>2024대비 제3회 9급 합격예측모의고사 정답 확인</p>
          </div>

          <div className="con_wrap">
            <table className="exam_apply_table3" summary="정답확인">
              <tbody>
                <tr>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                </tr>
                <tr>
                  <td className="b">국어</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">2</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">영어</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">3</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">한국사</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">3</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">행정법(A3)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">1</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="exam_apply_table3" summary="정답확인">
              <tbody>
                <tr>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                </tr>
                <tr>
                  <td className="b">행정학(A5)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">2</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">세법(B5)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">사회복지학(C3)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">2</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">회계학(C1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">3</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="exam_apply_table3" summary="정답확인">
              <tbody>
                <tr>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                </tr>
                <tr>
                  <td className="b">국제법(E4)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">형법(D1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">2</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">형사소송법(D3)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">교육학(E5)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="exam_apply_table3" summary="정답확인">
              <tbody>
                <tr>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                </tr>
                <tr>
                  <td className="b">교정학(E6)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">3</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">노동법개론(F2)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">3</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">관세법(F1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">회계원리(Q1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="exam_apply_table3" summary="정답확인">
              <tbody>
                <tr>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                </tr>
                <tr>
                  <td className="b">공중보건(L2)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">1</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">보건행정(L1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">2</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">기계일반(H1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">4</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">기계설계(G2)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">1</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="exam_apply_table3" summary="정답확인">
              <tbody>
                <tr>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                  <th className="w60">과목</th>
                  <th className="w60">번호</th>
                  <th className="w60">정답</th>
                </tr>
                <tr>
                  <td className="b">컴퓨터일반(I1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">3</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>

                  <td className="b">정보보호론(J1)</td>
                  <td colspan="2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="w60">1</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">2</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">3</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">4</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">5</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">6</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">7</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">8</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">9</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">10</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">11</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">12</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">13</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">14</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">15</td>
                          <td className="w60">2</td>
                        </tr>
                        <tr>
                          <td className="w60">16</td>
                          <td className="w60">4</td>
                        </tr>
                        <tr>
                          <td className="w60">17</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">18</td>
                          <td className="w60">1</td>
                        </tr>
                        <tr>
                          <td className="w60">19</td>
                          <td className="w60">3</td>
                        </tr>
                        <tr>
                          <td className="w60">20</td>
                          <td className="w60">1</td>
                        </tr>{" "}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="apply_btn_box">
            <button
              type="button"
              onclick="location.href='/html/mmove.htm?id=testexam2&amp;tab=4&amp;EXAM_ID=00000319#tab_menu_content'"
            >
              모의고사 해설지 다운받기 &gt;
            </button>
            <button
              type="button"
              onclick="location.href='/html/mmove.htm?id=testexam2&amp;tab=4&amp;EXAM_ID=00000319#tab_menu_content'"
            >
              무료 해설강의 보러가기 &gt;
            </button>
          </div>
        </div>
      </div>
    );
  } else if (props.clickedTab === 2) {
    return (
      <div className="examTabcon tab02">
        <div class="inner">
          <div class="exam_tit">
            <p>
              모의고사 <span>성적확인</span>
            </p>
          </div>
          <div class="exam_sub_tit">
            <p>수험자 정보</p>
          </div>
          <table class="exam_apply_table">
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>응시일</th>
                <th>이름</th>
                <th>생년월일</th>
                <th>연락처</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023년 09월 17일 </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div class="apply_btn_box v2">
            <button type="button">성적확인 바로가기 &gt;</button>
          </div>
        </div>
      </div>
    );
  } else if (props.clickedTab === 3) {
    return (
      <div className="examTabcon tab03">
        <div class="inner">
          <div class="exam_tit">
            <p>
              합격예측 모의고사 <span>해설강의 보기</span>
            </p>
          </div>

          <table class="exam_apply_table">
            <colgroup>
              <col width="25%" />
              <col width="35%" />
              <col width="10%" />
            </colgroup>
            <thead>
              <tr>
                <th>선생님</th>
                <th>강좌명</th>
                <th>수강하기</th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <div class="apply_btn_box">
            <button type="button">모의고사 전과목 해설지 다운로드 &gt;</button>
          </div>
        </div>
      </div>
    );
  } else if (props.clickedTab === 4) {
    return <div className="examTabcon tab04">sdf</div>;
  }
}
