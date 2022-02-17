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
export declare class MethodDto {
    name: string;
    readonly currentTime: number;
    readonly totalTime: number;
    readonly column: ColumnDto;
    readonly pressure: PressureDto;
    readonly runTime: number;
    readonly countInjections: number;
    readonly status: string;
    constructor(method: MethodDtoCreationAttr);
}
export {};
