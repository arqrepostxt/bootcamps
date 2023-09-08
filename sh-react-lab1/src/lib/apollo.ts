import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ws5sup08js01un0o2jajy7/master',
    cache: new InMemoryCache()
})
