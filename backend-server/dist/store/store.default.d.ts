import { MethodDto } from "../dto/method.dto";
export declare class StoreDefault {
    readonly methods: Map<string, MethodDto>;
    current: MethodDto;
    constructor();
    private initialize;
    private generateDefaultMethod;
    private firstMethod;
    private secondMethod;
    private defaultMethod;
    getMethod(name: string): MethodDto;
    getCurrent(): MethodDto;
    saveMethod(dto: MethodDto): MethodDto;
    openMethod(name: string): MethodDto;
    getAllMethod(): MethodDto[];
    getAllMethodNames(): string[];
}
