import {Field, ID, Int, ObjectType} from "type-graphql";

@ObjectType({ description: 'Leaderboard' })
export class Leaderboard {

  @Field(() => String)
  tier: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Int)
  earnings: number;

}