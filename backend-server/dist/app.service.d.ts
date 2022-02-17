import { StoreDefault } from "./store/store.default";
import { MethodDto } from "./dto/method.dto";
export declare class AppService {
    private storeDefault;
    constructor(storeDefault: StoreDefault);
    getMethod(name: string): MethodDto;
    saveMethod(dto: MethodDto): MethodDto;
    openMethod(method: string): MethodDto;
    getAllSaved(): MethodDto[];
    getNamesMethod(): string[];
}
