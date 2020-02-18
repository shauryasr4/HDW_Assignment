import { createApolloFetch } from "apollo-fetch";

const apolloFetch = createApolloFetch({
  uri: "https://api.devcdc.com/cricket"
});

export default apolloFetch;
