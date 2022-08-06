import { gql, ApolloServer } from "apollo-server";

// Database type
interface dbTypes {
    id: string | number;
    shippedDate: string;
    arrivalDate: string;
    itemName: string;
    value?: number;
}

// Fake databse
let orders: dbTypes[] = [];

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
const resolvers = {
    Query: {
        orders: () => {
            return orders
        },
        order: (_: any, { id }: any) => {
            return orders.find(order => order.id === id)
        }
    },
    Mutation: {
        create: (_: any, { id, shippedDate, arrivalDate, itemName, value = 0 }: dbTypes) => {
            const order = { id, shippedDate, arrivalDate, itemName, value };
            orders.push(order);
            return order;
        },
        update: (_: any, { id, shippedDate, arrivalDate, itemName, value }: dbTypes) => {
            const order = orders.find(order => order.id === id);
            
            if(order) {
                order.id = order.id;
                order.shippedDate = shippedDate ? shippedDate : order.shippedDate;
                order.arrivalDate = arrivalDate ? arrivalDate : order.arrivalDate;
                order.itemName = itemName ? itemName : order.itemName;
                order.value = value ? value : order.value;
            }
        },
        delete: (_: any, { id }: any) => {
            const filterOrder = orders.filter(order => order.id !== id)
            orders = filterOrder;
            return true;
        }
    }
}

// Initialize server
const app = new ApolloServer({ typeDefs, resolvers })
app.listen().then(({ url }) => console.log(`Server running at ${url}`))