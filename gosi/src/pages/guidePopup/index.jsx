import { useState } from "react";
import "scss/guidePopup.scss";
export default function Index() {
  const [tabActive, SetTabActive] = useState(0);
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
          <div className={tabActive === 0 ? "tabcon active" : "tabcon"}>0</div>
          <div className={tabActive === 1 ? "tabcon active" : "tabcon"}>1</div>
        </div>
      </div>
    </>
  );
}
