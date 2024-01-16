import "reflect-metadata";
import {buildSchema} from "type-graphql";
import * as path from "path";
import {LeaderboardResolver} from "./resolvers/leaderboard";
import {startStandaloneServer} from "@apollo/server/standalone";
import {ApolloServer} from "@apollo/server";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [LeaderboardResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`GraphQL server ready at ${url}`);
}

bootstrap().catch(console.error);