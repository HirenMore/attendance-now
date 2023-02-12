import { Container } from "inversify";
import "reflect-metadata";
import ClassroomSerivce from "./classroom/classroomService";
import { TYPES } from "./types";
const DIContainer = new Container();
DIContainer.bind<ClassroomSerivce>(TYPES.ClassroomService).to(ClassroomSerivce);

export { DIContainer };
