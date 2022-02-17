"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnDto = void 0;
class ColumnDto {
    constructor(attr) {
        this.controlOn = attr.controlOn;
        this.flow = attr.flow;
        this.pressure = attr.pressure;
        this.averageVelocity = attr.averageVelocity;
        this.holdupTime = attr.holdupTime;
        this.postRun = attr.postRun;
    }
}
exports.ColumnDto = ColumnDto;
//# sourceMappingURL=column.dto.js.map