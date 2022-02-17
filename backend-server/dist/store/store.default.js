"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreDefault = void 0;
const method_dto_1 = require("../dto/method.dto");
const common_1 = require("@nestjs/common");
const column_dto_1 = require("../dto/column.dto");
const pressure_dto_1 = require("../dto/pressure.dto");
const step_dto_1 = require("../dto/step.dto");
const methodFirst = `method_1.amx`;
const methodSecond = `method_2.amx`;
const defMethod = `default.amx`;
let StoreDefault = class StoreDefault {
    constructor() {
        this.methods = this.initialize();
        this.current = this.methods.get(defMethod);
    }
    initialize() {
        const methods = new Map();
        methods.set(methodFirst, this.generateDefaultMethod(methodFirst));
        methods.set(methodSecond, this.generateDefaultMethod(methodSecond));
        methods.set(defMethod, this.generateDefaultMethod(defMethod));
        return methods;
    }
    generateDefaultMethod(name) {
        if (name === methodFirst) {
            return this.firstMethod(name);
        }
        else if (name === methodSecond) {
            return this.secondMethod(name);
        }
        else {
            return this.defaultMethod(name);
        }
    }
    firstMethod(name) {
        const column = new column_dto_1.ColumnDto({
            controlOn: false,
            flow: 17.345,
            pressure: 23.56,
            averageVelocity: 298.05,
            holdupTime: 0.3444,
            postRun: 167.45
        });
        const pressure = new pressure_dto_1.PressureDto({
            steps: [
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 1',
                    rate: 10,
                    value: 16.849,
                    holdTime: 0,
                    runTime: 0
                }),
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 2',
                    rate: 20,
                    value: 16.849,
                    holdTime: 5,
                    runTime: 26
                }),
            ]
        });
        const method = new method_dto_1.MethodDto({
            name: name,
            currentTime: 2134,
            totalTime: 4567,
            column: column,
            pressure: pressure,
            runTime: 4456,
            countInjections: 23,
            status: 'RUN'
        });
        return method;
    }
    secondMethod(name) {
        const column = new column_dto_1.ColumnDto({
            controlOn: true,
            flow: 16.345,
            pressure: 11.56,
            averageVelocity: 345.05,
            holdupTime: 1.3444,
            postRun: 135.45
        });
        const pressure = new pressure_dto_1.PressureDto({
            steps: [
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 1',
                    rate: 10,
                    value: 16.849,
                    holdTime: 0,
                    runTime: 0
                }),
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 2',
                    rate: 20,
                    value: 16.849,
                    holdTime: 5,
                    runTime: 26
                }),
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 3',
                    rate: 40,
                    value: 18.849,
                    holdTime: 9,
                    runTime: 34
                }),
            ]
        });
        const method = new method_dto_1.MethodDto({
            name: name,
            currentTime: 3456,
            totalTime: 8975,
            column: column,
            pressure: pressure,
            runTime: 4567,
            countInjections: 32,
            status: 'STOPPED'
        });
        return method;
    }
    defaultMethod(name) {
        const column = new column_dto_1.ColumnDto({
            controlOn: true,
            flow: 16.345,
            pressure: 11.56,
            averageVelocity: 345.05,
            holdupTime: 1.3444,
            postRun: 135.45
        });
        const pressure = new pressure_dto_1.PressureDto({
            steps: [
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 1',
                    rate: 10,
                    value: 16.849,
                    holdTime: 0,
                    runTime: 0
                }),
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 2',
                    rate: 20,
                    value: 16.849,
                    holdTime: 5,
                    runTime: 26
                }),
                new step_dto_1.StepDto({
                    selected: false,
                    ramp: 'Ramp 3',
                    rate: 40,
                    value: 18.849,
                    holdTime: 9,
                    runTime: 34
                }),
            ]
        });
        const method = new method_dto_1.MethodDto({
            name: name,
            currentTime: 3221,
            totalTime: 5443,
            column: column,
            pressure: pressure,
            runTime: 4567,
            countInjections: 32,
            status: 'STOPPED'
        });
        return method;
    }
    getMethod(name) {
        if (name === 'current') {
            return this.current;
        }
        else {
            const method = this.methods.get(name);
            if (!method) {
                const method = this.methods.get(defMethod);
                method.name = name;
            }
            return method;
        }
    }
    getCurrent() {
        return this.current;
    }
    saveMethod(dto) {
        this.methods.set(dto.name, dto);
        this.current = this.methods.get(dto.name);
        return this.getCurrent();
    }
    openMethod(name) {
        const method = this.methods.get(name);
        if (!method) {
            throw new Error('Invalid argument');
        }
        this.current = method;
        return this.getCurrent();
    }
    getAllMethod() {
        return [...this.methods.values()];
    }
    getAllMethodNames() {
        return [...this.methods.values()].map(elem => elem.name);
    }
};
StoreDefault = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], StoreDefault);
exports.StoreDefault = StoreDefault;
//# sourceMappingURL=store.default.js.map