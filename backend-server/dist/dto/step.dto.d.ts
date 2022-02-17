interface StepDtoCreationAttr {
    selected: boolean;
    ramp: string;
    rate: number;
    value: number;
    holdTime: number;
    runTime: number;
}
export declare class StepDto {
    readonly selected: boolean;
    readonly ramp: string;
    readonly rate: number;
    readonly value: number;
    readonly holdTime: number;
    readonly runTime: number;
    constructor(step: StepDtoCreationAttr);
}
export {};
