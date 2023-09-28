import React from "react";
import "./RegisteredStudent.css";

function RegisteredStudent(props) {
  return (
    <div>
      <div className="registration-student__description">
        <h2>{props.registeredStudent.studnetName}</h2>
        <div className="registration-student__course">
          {props.registeredStudent.course}
        </div>
      </div>
    </div>
  );
}

export default RegisteredStudent;
