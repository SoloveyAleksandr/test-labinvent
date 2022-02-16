import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AppService } from './app.service';
import { MethodDto } from "./dto/method.dto";

@Controller('api/v1/method')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:value')
  getMethod(@Param('value') value: string): MethodDto {
    return this.appService.getMethod(value);
  }

  @Post('/save')
  saveMethod(@Body() dto: MethodDto): MethodDto {
    return this.appService.saveMethod(dto);
  }

  @Get('/open/:value')
  openMethod(@Param('value') value: string): MethodDto {
    return this.appService.openMethod(value);
  }

  @Get('/all/saved')
  getAllSavedMethod(): MethodDto[] {
    return this.appService.getAllSaved();
  }

  @Get('/name/saved')
  getNamesMethod(): string[] {
    return this.appService.getNamesMethod();
  }

}
