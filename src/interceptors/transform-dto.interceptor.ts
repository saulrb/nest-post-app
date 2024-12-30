import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
import { ResponsePostDto } from '../post/dto/response-post.dto';

@Injectable()
export class TransformDtoInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return plainToInstance(ResponsePostDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
