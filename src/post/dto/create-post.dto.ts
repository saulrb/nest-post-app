import { IsNotEmpty } from 'class-validator';


export class CreatePostDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  constructor(title: string, description: string) {
    this.description = description;
    this.title = title;
  }
}
