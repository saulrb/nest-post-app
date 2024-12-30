import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
  async create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }
  async findAll() {
    return await this.postModel.find().exec();
  }
}
