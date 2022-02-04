import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/creare-post.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {

    constructor(@InjectModel(Post) private postRepository: typeof Post, 
    private filesService: FilesService){}

    async create(dto: CreatePostDto, image: any){
        const fileName = 'qwerty'
        const post = await this.postRepository.create({...dto, image: fileName})
        return post
    }
}
