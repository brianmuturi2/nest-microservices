import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller('add')
export class AppController {
  constructor(private readonly appService: AppService,
              @Inject('MATH_SERVICE') private client: ClientProxy) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  accumulate(@Body('data') data: any): Observable<number> {
    return this.client.send<number, number[]>('add', data);
  }
}
