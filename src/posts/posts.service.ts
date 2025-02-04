import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { authorId: 4, id: 1, title: 'Lorem Ipsum' },
    { authorId: 4, id: 2, title: 'Foo' },
    { authorId: 4, id: 3, title: 'Bar' },
    { authorId: 5, id: 4, title: 'Hello World' },
  ];

  findAllByAuthorId(authorId: number): Post[] {
    return this.posts.filter((post) => post.authorId === Number(authorId));
  }

  findOne(postId: number): Post {
    return this.posts.find((post) => post.id === postId);
  }

  findAll(): Post[] {
    return this.posts;
  }
}
