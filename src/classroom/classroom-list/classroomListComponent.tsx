import ClassroomSerivce from "../../services/classroom/classroomService";
import { DIContainer } from "../../services/inversify.config";
import { TYPES } from "../../services/types";
import React from "react";
import Classroom from "../classroomComponent";
import ClassroomListHeader from "../classroomListHeaderComponent";
const ClassroomList: any = (props: any) => {
  const classroomService = DIContainer.get<ClassroomSerivce>(
    TYPES.ClassroomService
  );
  const classroomList = classroomService.getClassroomList();
  console.log(classroomList);
  return (
    <div>
      <ClassroomListHeader></ClassroomListHeader>
      {classroomList.map((classroom) => (
        <Classroom classroom={classroom}></Classroom>
      ))}
    </div>
  );
};
export default ClassroomList;
