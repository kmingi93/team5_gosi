import LectureTap from "components/enrolment/lectureTap";
import Lnb from "components/enrolment/lnb";
import "scss/Enrolment.scss";

export default function Index() {
  return (
    <div className="enrolment_wrap">
      <Lnb />
      <LectureTap />
    </div>
  );
}
