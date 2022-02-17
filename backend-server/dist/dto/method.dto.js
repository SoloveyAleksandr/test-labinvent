"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodDto = void 0;
class MethodDto {
    constructor(method) {
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
exports.MethodDto = MethodDto;
//# sourceMappingURL=method.dto.js.map