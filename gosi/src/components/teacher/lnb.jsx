import { useState } from "react";
import { Link } from "react-router-dom";

export default function TeacherLnb() {
  const [lnbToggle, setLnbToggle] = useState("on");
  const clickedLnbToggle = () => {
    setLnbToggle((prev) => !prev);
  };
  return (
    <div className="left_wrap">
      <div className="left_title">공무원 선생님</div>
      <div className="lec_menu">
        <dl>
          <dt>
            <p>9급 공통과목</p>
            <dd>
              <p id="subject_1" onClick={clickedLnbToggle} toggle={lnbToggle}>
                국어
              </p>
              <ul className="teacher_name">
                <li>
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=73"}
                  >
                    신민숙
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=112"}
                  >
                    양효주
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=485"}
                  >
                    황진선
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=340"}
                  >
                    최정
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=65"}
                  >
                    유정민
                  </Link>
                </li>
                <li>
                  <Link
                    to={"https://gosi.hackers.com/html/professor/?user_num=540"}
                  >
                    고혜원
                  </Link>
                </li>
              </ul>
            </dd>
          </dt>
        </dl>
      </div>
    </div>
  );
}
