## Racino Backend test task

This service resembles a small excerpt of functionality that is part of Racino Platform: Leaderboard, a table of best performing cars in certain period. Service is GraphQL based. 

Currently, the service has one resolver that fetches fake leaderboard data. As part of the task, you are expected to: 

1. Clone the repository, start the project locally and fetch existing leaderboard data via graphql sandbox. 
2. Implement the filters that would allow to fetch: 
   1. Only data for certain race tier: `bronze`, `silver`, `gold`.
   2. Only data based on leaderboard time: `daily`, `weekly`, `season` (the latter is equal to one month). Correspondingly, the response should contain only the data for today, for the last week, and for the season. 

Although in real life app a lot of this filtering will be performed using database means, for the purpose of this task you are expected to perform manual code based filtering of mock data. 