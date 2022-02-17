interface ColumnDtoCreationAttr {
    controlOn: boolean;
    flow: number;
    pressure: number;
    averageVelocity: number;
    holdupTime: number;
    postRun: number;
}
export declare class ColumnDto {
    readonly controlOn: boolean;
    readonly flow: number;
    readonly pressure: number;
    readonly averageVelocity: number;
    readonly holdupTime: number;
    readonly postRun: number;
    constructor(attr: ColumnDtoCreationAttr);
}
export {};
