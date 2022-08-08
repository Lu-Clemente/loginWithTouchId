import { ApolloClient, InMemoryCache } from "@apollo/client";
import serverURL from "./serverURL"

const { androidEmulator, port } = serverURL;

const client = new ApolloClient({
    uri: `${androidEmulator}:${port}/`,
    cache: new InMemoryCache()
});

export default client;