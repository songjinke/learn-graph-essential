import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema";
import resolvers from "./data/resolvers";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const rootValue = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(8080, () =>
  console.log("Running server on http://localhost:8080/graphql")
);
