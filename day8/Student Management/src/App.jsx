import { useState } from "react";
import "./App.css";

const studentsData = [
  // ===== Section A =====
  { id: 1, name: "Muneeswari", section: "A", attendance: "Absent" },
  { id: 2, name: "Rahul", section: "A", attendance: "Absent" },
  { id: 3, name: "Priya", section: "A", attendance: "Absent" },
  { id: 4, name: "Arun", section: "A", attendance: "Absent" },
  { id: 5, name: "Kavin", section: "A", attendance: "Absent" },
  { id: 6, name: "Divya", section: "A", attendance: "Absent" },
  { id: 7, name: "Nisha", section: "A", attendance: "Absent" },
  { id: 8, name: "Ajay", section: "A", attendance: "Absent" },
  { id: 9, name: "Sanjay", section: "A", attendance: "Absent" },
  { id: 10, name: "Keerthi", section: "A", attendance: "Absent" },

  // ===== Section B =====
  { id: 11, name: "Akash", section: "B", attendance: "Absent" },
  { id: 12, name: "Harini", section: "B", attendance: "Absent" },
  { id: 13, name: "Vignesh", section: "B", attendance: "Absent" },
  { id: 14, name: "Karthik", section: "B", attendance: "Absent" },
  { id: 15, name: "Sneha", section: "B", attendance: "Absent" },
  { id: 16, name: "Surya", section: "B", attendance: "Absent" },
  { id: 17, name: "Monisha", section: "B", attendance: "Absent" },
  { id: 18, name: "Praveen", section: "B", attendance: "Absent" },
  { id: 19, name: "Anitha", section: "B", attendance: "Absent" },
  { id: 20, name: "Rohit", section: "B", attendance: "Absent" },
];

function App() {
  // Store all students
  const [students, setStudents] = useState(studentsData);

  // Default section is A
  const [selectedSection, setSelectedSection] = useState("A");

  // Students of the selected section
  const filteredStudents = students.filter(
    (student) => student.section === selectedSection
  );

  // Toggle attendance
  const toggleAttendance = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              attendance:
                student.attendance === "Present" ? "Absent" : "Present",
            }
          : student
      )
    );
  };

  // Attendance summary
  const totalStudents = filteredStudents.length;

  const presentStudents = filteredStudents.filter(
    (student) => student.attendance === "Present"
  ).length;

  const absentStudents = filteredStudents.filter(
    (student) => student.attendance === "Absent"
  ).length;

  return (
    <div className="container">
      <h1>CSE Student Attendance Management</h1>

      <h3>Department : CSE</h3>

      <div className="section-buttons">
        <button
          className={selectedSection === "A" ? "active" : ""}
          onClick={() => setSelectedSection("A")}
        >
          Section A
        </button>

        <button
          className={selectedSection === "B" ? "active" : ""}
          onClick={() => setSelectedSection("B")}
        >
          Section B
        </button>
      </div>
            <table className="attendance-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Section</th>
            <th>Attendance</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.section}</td>

              <td>
                <span
                  className={
                    student.attendance === "Present"
                      ? "present"
                      : "absent"
                  }
                >
                  {student.attendance}
                </span>
              </td>

              <td>
                <button
                  className="attendance-btn"
                  onClick={() => toggleAttendance(student.id)}
                >
                  {student.attendance === "Present"
                    ? "Mark Absent"
                    : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="summary">
        <div className="card">
          <h2>{totalStudents}</h2>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h2>{presentStudents}</h2>
          <p>Present</p>
        </div>

        <div className="card">
          <h2>{absentStudents}</h2>
          <p>Absent</p>
        </div>
      </div>
    </div>
  );
}

export default App; 

App.jsx