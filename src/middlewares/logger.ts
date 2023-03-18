import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { getDatetime } from '../utils/datetime/datetime';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private logging = new Logger('HTTP');

  use(req: Request, res: Response, next: Function) {
    this.setLogger(req, res);
    console.log('Request...');
    next();
  }

  setLogger(req: Request, res: Response): void {
    const start = getDatetime();
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');

      const resTime = getDatetime().diff(start, 'ms');
      this.logging.log(`${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} - ${resTime}ms`);
    });
  }
}
