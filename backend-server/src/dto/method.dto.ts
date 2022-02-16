import { ColumnDto } from "./column.dto";
import { PressureDto } from "./pressure.dto";


interface MethodDtoCreationAttr {
   name: string;
   currentTime: number;
   totalTime: number;
   column: ColumnDto;
   pressure: PressureDto;
   runTime: number;
   countInjections: number;
   status: string;
}

export class MethodDto {
  name: string;
  readonly currentTime: number; //seconds
  readonly totalTime: number; //seconds
  readonly column: ColumnDto;
  readonly pressure: PressureDto;
  readonly runTime: number; //seconds
  readonly countInjections: number;
  readonly status: string; // RUN, STOPPED


  constructor(method: MethodDtoCreationAttr) {
    this.name = method.name;
    this.totalTime = method.totalTime;
    this.currentTime = method.currentTime;
    this.column = method.column;
    this.pressure = method.pressure;
    this.runTime = method.runTime;
    this.countInjections = method.countInjections;
    this.status = method.status;
  }
}