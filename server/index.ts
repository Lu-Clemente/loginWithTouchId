import { gql, ApolloServer } from "apollo-server";

// Fake databse
const orders = [];

//Types
const typeDefs = gql`
    type Order {
        id: ID!
        shippedDate: String
        arrivalDate: String
        itemName: String
        value: Float
    }

    type Query {
        orders: [Order]
        order(id: ID!): Order
    }

    type Mutation {
        create(id: ID!, shippedDate: String!, arrivalDate: String!, itemName: String!, value: Int): Order
        update(id: ID!, shippedDate: String, arrivalDate: String, itemName: String, value: Int): Order
        delete(id: ID!): Boolean
    }
`