import { AppService } from './app.service';
import { MethodDto } from "./dto/method.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getMethod(value: string): MethodDto;
    saveMethod(dto: MethodDto): MethodDto;
    openMethod(value: string): MethodDto;
    getAllSavedMethod(): MethodDto[];
    getNamesMethod(): string[];
}
