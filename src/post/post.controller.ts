import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { TransformDtoInterceptor } from '../interceptors/transform-dto.interceptor';

@Controller('posts')
@UseInterceptors(TransformDtoInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  create(@Body() data: CreatePostDto) {
    return this.postService.create(data);
  }
  @Get('/all')
  findAll() {
    return this.postService.findAll();
  }
}
