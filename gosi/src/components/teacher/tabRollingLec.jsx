import React from "react";
import { Link } from "react-router-dom";

export default function TabRollingLec() {
  return (
    <>
      <div className="rolling_banner1 fl cf">
        <div className="bxslider-default rolling_bx">
          <ul className="bxslider banner_slider">
            <li>
              <Link
                to={
                  "https://egosi.hackers.com/site/?c=event&evt_cd=EG2022113000"
                }
                target="blank"
              >
                <img src="https://gosi.hackers.com/zfiles/teacher_gate/banner/20220711_234654/566x160_01.jpg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
