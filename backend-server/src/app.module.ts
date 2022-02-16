import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { StoreDefault } from "./store/store.default";

@Module({
  imports: [
    ConfigModule.forRoot(
    {
      envFilePath: `${process.env.NODE_ENV}.env`
    }
  ),],
  controllers: [AppController],
  providers: [AppService, StoreDefault],
})
export class AppModule {}
