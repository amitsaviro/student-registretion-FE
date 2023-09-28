import React from "react";
import RegisteredStudent from "./components/RegisteredStudent/RegisteredStudent";

const DUMMY_REGISTERED_STUDENTS = [
  {
    id: "1",
    studnetName: "Yonit Levi",
    course: "fullstack",
  },
  {
    id: "2",
    studnetName: "Eli Finish",
    course: "qa",
  },
];

function App() {
  return (
    <div>
      <RegisteredStudent registeredStudent={DUMMY_REGISTERED_STUDENTS[0]} />
      <RegisteredStudent registeredStudent={DUMMY_REGISTERED_STUDENTS[1]} />
    </div>
  );
}

export default App;
