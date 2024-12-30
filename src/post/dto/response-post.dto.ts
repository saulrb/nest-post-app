import { Expose } from 'class-transformer';

export class ResponsePostDto {
  @Expose()
  _id: string;
  @Expose()
  title: string;
  @Expose()
  description: string;
}
