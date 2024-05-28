import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Student } from './Student.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  authorId: number;

  @Field((type) => Student)
  student?: Student;
}
