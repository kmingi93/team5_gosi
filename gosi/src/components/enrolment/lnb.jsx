import { useState } from "react";
import { Link } from "react-router-dom";

export default function Lnb() {
  const [lnbCount, SetLnbCount] = useState("on");
  function lnb_togle(params) {
    if (lnbCount === "on") {
      SetLnbCount("off");
    } else {
      SetLnbCount("on");
    }
  }
  return (
    <div className="lnb_wrap">
      <p className="lnb_title">수강신청</p>
      <div className="lec_menu">
        <dl>
          <dt onClick={lnb_togle}>
            패스상품 수강신청 <span> {lnbCount === "on" ? "▲" : "▼"}</span>
          </dt>
          <dd className={`${lnbCount}`}>
            <p>• 전강좌 무제한 패스</p>
            <ul className="lec_list">
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/?c=event&evt_cd=EG2023051101&sk=typeA"
                  }
                  target="_blank"
                >
                  합격해도,불합격해도 0원
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/?c=event&evt_cd=EG2022112200&utm_source=gosi&utm_medium=sugangsincheongLNB&utm_campaign=gosi_gong_miraclepass2023"
                  }
                  target="_blank"
                >
                  전강좌 무제한 월 3만원
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2022062000"}
                  target="_blank"
                >
                  300% 환급+0원패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2022060300"}
                  target="_blank"
                >
                  대학생 전용 9·7급패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//army.hackers.com/site/?c=event&evt_cd=AR2023021700"}
                  target="_blank"
                >
                  군무원전문반 평생 0원
                </Link>
              </li>
            </ul>
          </dd>
          <dd className={`${lnbCount}`}>
            <p>• 직렬별 패스</p>
            <ul className="lec_list">
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/event/2020/210615_generaladmin/"
                  }
                  target="_blank"
                >
                  일반행정직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/210611_taxpass"}
                  target="_blank"
                >
                  세무직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2021062501"}
                  target="_blank"
                >
                  관세직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/event/2020/publicsecurity_pass/"
                  }
                  target="_blank"
                >
                  공안직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2019/0819/"}
                  target="_blank"
                >
                  계리직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/event/2019/facility_security_pass/"
                  }
                  target="_blank"
                >
                  시설관리 · 방호직패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2019/local_pass/"}
                  target="_blank"
                >
                  지역인재 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2023081700"}
                  target="_blank"
                >
                  사회복지직 인강관리반
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2023030902"}
                  target="_blank"
                >
                  사회복지직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2023042800"}
                  target="_blank"
                >
                  교육행정직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/event/2019/foreignconsular_pass/"
                  }
                  target="_blank"
                >
                  외무영사직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/210604/"}
                  target="_blank"
                >
                  회계/재경직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/0622_registpass/"}
                  target="_blank"
                >
                  전산직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "//egosi.hackers.com/site/index.php?c=event&evt_cd=EG2021072302"
                  }
                  target="_blank"
                >
                  간호/보건직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/0622_electropass/"}
                  target="_blank"
                >
                  전기직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/vote_pass/"}
                  target="_blank"
                >
                  선거행정직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/assembly_pass/"}
                  target="_blank"
                >
                  국회직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/event/2020/0710_machinepass/"}
                  target="_blank"
                >
                  기계직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2023020902"}
                  target="_blank"
                >
                  운전직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2021072301"}
                  target="_blank"
                >
                  고용노동직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//egosi.hackers.com/site/?c=event&evt_cd=EG2022062100"}
                  target="_blank"
                >
                  직업상담직 패스
                </Link>
              </li>
              <li>
                <Link
                  to={"//army.hackers.com/site/?c=event&evt_cd=AR2023010900"}
                  target="_blank"
                >
                  군무원 패스
                </Link>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}
