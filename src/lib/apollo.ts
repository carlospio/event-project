import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4of6mqd26oc01xxghlfar96/master',
    cache: new InMemoryCache()
})