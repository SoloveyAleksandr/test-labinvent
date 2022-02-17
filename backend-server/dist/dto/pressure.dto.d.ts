import { StepDto } from "./step.dto";
interface PressureDtoCreationAttr {
    steps: StepDto[];
}
export declare class PressureDto {
    readonly tableSteps: StepDto[];
    constructor(table: PressureDtoCreationAttr);
}
export {};
