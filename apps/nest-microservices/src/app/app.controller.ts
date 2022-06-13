import { Body, Controller, Get, Logger, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { MathService } from './math/math.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('add')
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService,
              private mathService: MathService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  // Define the message pattern for this method
  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
