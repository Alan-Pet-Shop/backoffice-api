import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Xin chào, chào ngày mới vui vẻ';
  }
}
