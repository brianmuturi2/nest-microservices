import { Controller, Get, Logger } from '@nestjs/common';

import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math/math.service';

@Controller()
export class AppController {

  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService,
              private mathService: MathService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
