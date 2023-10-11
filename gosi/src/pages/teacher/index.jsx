import TeacherLnb from "components/teacher/lnb";
import TabRollingLec from "components/teacher/tabRollingLec";
import TabRollingBnr from "components/teacher/tabRollingBnr";
import Notice from "components/teacher/notice";
import TabNotice from "components/teacher/tabNotice";
import TeacherFace from "components/teacher/teacherFace";
import "scss/Teacher.scss";

export default function Index() {
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
          {/* 상단 공지사항 */}
          <Notice />
        </div>
      </div>
      <div className="teacher_gate teacher_inner">
        <TeacherLnb />
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
              {/* 과목별 배너 영역 */}
              <TabRollingLec />
              {/* 대표강의 영역 */}
              <TabRollingBnr />
            </div>
            {/* 선생님 탭 내 공지사항 */}
            <TabNotice />
            {/* 선생님 얼굴 */}
            <TeacherFace />
          </div>
        </div>
      </div>
    </>
  );
}
