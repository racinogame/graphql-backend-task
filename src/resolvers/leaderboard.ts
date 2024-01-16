import {Arg, Field, InputType, Query, Resolver} from "type-graphql";
import {Leaderboard} from "../entities/leaderboard";
import dayjs from 'dayjs';

@InputType({description: 'used to choose leaderboard'})
export class LeaderboardFilter {
  @Field(() => String, {nullable: true, description: "Leaderboard period: can be daily, weekly, season"})
  leaderboardType: string;
  @Field(() => String, {nullable: true, description: "Cars tier"})
  tier: string;
}

@Resolver(() => Leaderboard)
export class LeaderboardResolver {

  @Query(() => [Leaderboard], {
    description: 'Get leaderboard according to period',
  })
  async getLeaderboard(
    @Arg('filter', () => LeaderboardFilter, { nullable: true }) filter?: LeaderboardFilter
  ): Promise<Leaderboard[]> {
    return this.mockFetchData();
  }

  async mockFetchData() {
    const today = dayjs();
    const dataPoints = [];
    for (const tier of ["bronze", "silver", "gold"]) {
      for (let i = 0; i < 7; i++) {
        dataPoints.push({
          tier: tier,
          startDate: today.startOf('day').subtract(i).toDate(),
          earnings: (10 - i) * 10,
        } as Leaderboard);
      }
      dataPoints.push({
        tier: tier,
        startDate: today.startOf('day').subtract(25).toDate(),
        earnings: 10,
      } as Leaderboard);
    }
    return dataPoints;
  }

}