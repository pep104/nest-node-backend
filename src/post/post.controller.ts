import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { CreatePostDto } from './dto/creare-post.dto';
import { PostService } from './post.service'

@Controller('post')
export class PostController {

    constructor(private postService: PostService){}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto, @UploadedFile() image){
        return this.postService.create(dto, image)
    }

}
