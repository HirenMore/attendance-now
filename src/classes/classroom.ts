import ClassroomSerivce from "./../services/classroom/classroomService";
class Classroom {
  id: number = 0;
  name: string = "";
  seatingCapicity: number = 0;
  constructor(name: string) {
    this.id = ClassroomSerivce.getNewClassroomId();
    this.name = name;
    this.seatingCapicity = 50;
  }
}
export default Classroom;
