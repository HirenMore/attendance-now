import "./App.scss";
import React from "react";
import ClassroomList from "./classroom/classroom-list/classroomListComponent";
function App() {
  console.log(ClassroomList);
  return (
    <div className="App">
      <ClassroomList></ClassroomList>
    </div>
  );
}

export default App;
