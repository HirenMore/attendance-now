import { injectable } from "inversify";
import Classroom from "../../classes/classroom";
@injectable()
class ClassroomSerivce {
  private static classroomId: number = 0;
  getClassroomList = (): Array<Classroom> => {
    var classroomList: Array<Classroom> = new Array<Classroom>();
    classroomList.push(new Classroom("1-1"));
    classroomList.push(new Classroom("1-2"));
    classroomList.push(new Classroom("1-3"));
    classroomList.push(new Classroom("1-4"));
    classroomList.push(new Classroom("2-1"));
    classroomList.push(new Classroom("2-2"));

    return classroomList;
  };
  public static getNewClassroomId() {
    this.classroomId++;
    return this.classroomId;
  }
}
export default ClassroomSerivce;
