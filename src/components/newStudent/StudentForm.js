import React, { useState } from "react";
import "./StudentForm.css";
import dateFormatting from "../../utils/dateUtils";

function StudentForm(props) {
  const [enteredStudentName, setEnteredStudentName] = useState("");
  const [enteredCourseName, setEnteredCourseName] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");

  const studentNameChangeHandler = (event) => {
    setEnteredStudentName(event.target.value);
  };

  const courseNameChangeHandler = (event) => {
    console.log("This is course event name: " + event.target.value);
    console.log("This is props: " + JSON.stringify(props));
    let eneteredCourse = event.target.value;
    setEnteredCourseName(eneteredCourse);
    setEnteredStartDate(
      dateFormatting(props.courses[eneteredCourse].startDate)
    );
  };

  console.log("Componenet StudentForm has rendered");
  return (
    <form>
      <div className="new-registration__contorls">
        <div className="new-registration__control">
          <label>Student Name</label>
          <input
            value={enteredStudentName}
            type="text"
            onChange={studentNameChangeHandler}
            required
          ></input>
        </div>

        <div className="new-registration__control">
          <label>Course Name</label>
          <select
            className="course-selection"
            defaultValue=""
            required
            onChange={courseNameChangeHandler}
            value={enteredCourseName}
          >
            <option value="" disabled>
              Please Choose A Course
            </option>
            <option value="fullstack">Fullstack Course</option>
            <option value="qa">QA Course</option>
            <option value="cyber">Cyber Course</option>
            <option value="product">Product Management Course</option>
          </select>
        </div>

        <div className="new-registration__control">
          <label>Course Start Date</label>
          <input type="date" disabled value={enteredStartDate}></input>
        </div>
        <br></br>
        <div className="ew-registration__actions">
          <button type="button">Cancel</button>
          <button type="submit">Register Student</button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
