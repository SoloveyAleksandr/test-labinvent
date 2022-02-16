import { Injectable } from '@nestjs/common';
import { StoreDefault } from "./store/store.default";
import { MethodDto } from "./dto/method.dto";

@Injectable()
export class AppService {

  constructor(private storeDefault: StoreDefault) {
  }
  getMethod(name: string): MethodDto {
    return this.storeDefault.getMethod(name);
  }

  saveMethod(dto: MethodDto) {
    return this.storeDefault.saveMethod(dto);
  }

  openMethod(method: string) {
    return this.storeDefault.openMethod(method);
  }

  getAllSaved(): MethodDto[] {
    return this.storeDefault.getAllMethod();
  }

  getNamesMethod(): string[] {
    return this.storeDefault.getAllMethodNames();
  }
}
