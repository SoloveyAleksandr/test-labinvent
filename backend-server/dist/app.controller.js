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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const method_dto_1 = require("./dto/method.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getMethod(value) {
        return this.appService.getMethod(value);
    }
    saveMethod(dto) {
        return this.appService.saveMethod(dto);
    }
    openMethod(value) {
        return this.appService.openMethod(value);
    }
    getAllSavedMethod() {
        return this.appService.getAllSaved();
    }
    getNamesMethod() {
        return this.appService.getNamesMethod();
    }
};
__decorate([
    (0, common_1.Get)('/:value'),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", method_dto_1.MethodDto)
], AppController.prototype, "getMethod", null);
__decorate([
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [method_dto_1.MethodDto]),
    __metadata("design:returntype", method_dto_1.MethodDto)
], AppController.prototype, "saveMethod", null);
__decorate([
    (0, common_1.Get)('/open/:value'),
    __param(0, (0, common_1.Param)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", method_dto_1.MethodDto)
], AppController.prototype, "openMethod", null);
__decorate([
    (0, common_1.Get)('/all/saved'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getAllSavedMethod", null);
__decorate([
    (0, common_1.Get)('/name/saved'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getNamesMethod", null);
AppController = __decorate([
    (0, common_1.Controller)('api/v1/method'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map