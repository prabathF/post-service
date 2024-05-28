import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { Student } from './models/Student.model';
import { PostsService } from './posts.service';

@Resolver((of) => Student)
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField((of) => [Student])
  public posts(@Parent() user: Student): Post[] {
    return this.postsService.findAllByAuthorId(user.id);
  }
}
