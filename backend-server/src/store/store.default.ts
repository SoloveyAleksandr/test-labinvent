import {MethodDto} from "../dto/method.dto";
import {Injectable} from "@nestjs/common";
import {ColumnDto} from "../dto/column.dto";
import {PressureDto} from "../dto/pressure.dto";
import {StepDto} from "../dto/step.dto";

const methodFirst: string = `method_1.amx`
const methodSecond: string = `method_2.amx`
const defMethod: string = `default.amx`

@Injectable()
export class StoreDefault {
    readonly methods: Map<string, MethodDto>;
    current: MethodDto;

    constructor() {
        this.methods = this.initialize();
        this.current = this.methods.get(defMethod);
    }

    private initialize(): Map<string, MethodDto> {
        const methods: Map<string, MethodDto> = new Map<string, MethodDto>();
        methods.set(methodFirst, this.generateDefaultMethod(methodFirst));
        methods.set(methodSecond, this.generateDefaultMethod(methodSecond));
        methods.set(defMethod, this.generateDefaultMethod(defMethod));
        return methods;
    }

    private generateDefaultMethod(name: string): MethodDto {
        if (name === methodFirst) {
            return this.firstMethod(name);
        } else if (name === methodSecond) {
            return this.secondMethod(name);
        } else {
            return this.defaultMethod(name);
        }
    }

    private firstMethod(name: string): MethodDto {
        const column: ColumnDto = new ColumnDto(
            {
                controlOn: false,
                flow: 17.345,
                pressure: 23.56,
                averageVelocity: 298.05,
                holdupTime: 0.3444,
                postRun: 167.45
            }
        );

        const pressure: PressureDto = new PressureDto(
            {
                steps: [
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 1',
                            rate: 10,
                            value: 16.849,
                            holdTime: 0,
                            runTime: 0
                        }
                    ),
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 2',
                            rate: 20,
                            value: 16.849,
                            holdTime: 5,
                            runTime: 26
                        }
                    ),
                ]
            }
        );

        const method: MethodDto
            = new MethodDto(
            {
                name: name,
                currentTime: 2134,
                totalTime: 4567,
                column: column,
                pressure: pressure,
                runTime: 4456,
                countInjections: 23,
                status: 'RUN'
            }
        );
        return method;
    }

    private secondMethod(name: string) {
        const column: ColumnDto = new ColumnDto(
            {
                controlOn: true,
                flow: 16.345,
                pressure: 11.56,
                averageVelocity: 345.05,
                holdupTime: 1.3444,
                postRun: 135.45
            }
        );

        const pressure: PressureDto = new PressureDto(
            {
                steps: [
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 1',
                            rate: 10,
                            value: 16.849,
                            holdTime: 0,
                            runTime: 0
                        }
                    ),
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 2',
                            rate: 20,
                            value: 16.849,
                            holdTime: 5,
                            runTime: 26
                        }
                    ),
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 3',
                            rate: 40,
                            value: 18.849,
                            holdTime: 9,
                            runTime: 34
                        }
                    ),
                ]
            }
        );

        const method: MethodDto
            = new MethodDto(
            {
                name: name,
                currentTime: 3456,
                totalTime: 8975,
                column: column,
                pressure: pressure,
                runTime: 4567,
                countInjections: 32,
                status: 'STOPPED'
            }
        );
        return method;
    }

    private defaultMethod(name: string) {
        const column: ColumnDto = new ColumnDto(
            {
                controlOn: true,
                flow: 16.345,
                pressure: 11.56,
                averageVelocity: 345.05,
                holdupTime: 1.3444,
                postRun: 135.45
            }
        );

        const pressure: PressureDto = new PressureDto(
            {
                steps: [
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 1',
                            rate: 10,
                            value: 16.849,
                            holdTime: 0,
                            runTime: 0
                        }
                    ),
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 2',
                            rate: 20,
                            value: 16.849,
                            holdTime: 5,
                            runTime: 26
                        }
                    ),
                    new StepDto(
                        {
                            selected: false,
                            ramp: 'Ramp 3',
                            rate: 40,
                            value: 18.849,
                            holdTime: 9,
                            runTime: 34
                        }
                    ),
                ]
            }
        );

        const method: MethodDto
            = new MethodDto(
            {
                name: name,
                currentTime: 3221,
                totalTime: 5443,
                column: column,
                pressure: pressure,
                runTime: 4567,
                countInjections: 32,
                status: 'STOPPED'
            }
        );
        return method;
    }

    public getMethod(name: string): MethodDto {
        if (name === 'current') {
            return this.current;
        } else {
            const method: MethodDto = this.methods.get(name);
            if (!method) {
                const method: MethodDto = this.methods.get(defMethod);
                method.name = name;
            }
            return method;
        }
    }


    public getCurrent(): MethodDto {
        return this.current;
    }

    public saveMethod(dto: MethodDto): MethodDto {
        this.methods.set(dto.name, dto);
        this.current = this.methods.get(dto.name);
        return this.getCurrent();
    }

    public openMethod(name: string): MethodDto {
        const method: MethodDto = this.methods.get(name);
        if (!method){
            throw new Error('Invalid argument');
        }
        this.current = method
        return this.getCurrent();
    }

    public getAllMethod(): MethodDto[] {
        return [ ...this.methods.values()];
    }

    public getAllMethodNames(): string[] {
        return [ ...this.methods.values()].map(elem => elem.name);
    }

}