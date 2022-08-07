import { gql } from "@apollo/client";

const allOrders = gql`
    query Query {
        orders {
            id
            itemName
            value
            shippedDate
            arrivalDate
        }
    }
`;

// const oneOrder = gql`
//     query {
//         order(id): {
//             itemName
//             arrivalDate
//             shippedDate
//         }
//     }
// `;

export { allOrders };