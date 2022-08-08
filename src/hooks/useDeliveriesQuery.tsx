import React, {
    createContext, useContext, useEffect, useState
} from 'react';
import { ApolloError, useQuery } from '@apollo/client';
import { allOrders } from '../graphQL/queires';
import { dateStringToTimestamp, todayDateString } from '../helpers/dates';

interface DeliveriesContextData {
    checkDate: (value: string) => string;
    pendings: IData[];
    delivereds: IData[];
    loading: boolean;
    error: ApolloError | undefined;
}

interface IData {
    id: string;
    shippedDate: string;
    arrivalDate: string;
    itemName: string;
    value?: number;
}

const DeliveriesContext = createContext<DeliveriesContextData>({} as DeliveriesContextData);

const DeliveriesProvider = function ({ children }: { children: any }) {

    const { loading, error, data } = useQuery(allOrders);
    const [delivereds, setDelivereds] = useState<IData[]>([]);
    const [pendings, setPendings] = useState<IData[]>([]);

    const checkDate = (arrivalDate: string) => {
        // Format("2022-08-07 05:10:06")
        // const today = dateStringToDateFormat(todayDateString())
        const today = dateStringToTimestamp(todayDateString())

        if (dateStringToTimestamp(arrivalDate) < today) {
            return "delivered"
        } else {
            return "pending"
        }
    }

    useEffect(() => {
        if (data) {
            data.orders.map((o: any) => {
                if (checkDate(o.arrivalDate) === "delivered") {
                    setDelivereds(oldArray => [...oldArray, o])
                } else {
                    setPendings(oldArray => [...oldArray, o])
                }
            })
        }
    }, [data])

    return (
        <DeliveriesContext.Provider
            value={{
                delivereds,
                pendings,
                checkDate,
                loading,
                error
            }}
        >
            {children}
        </DeliveriesContext.Provider>
    );
};

function useDeliveriesQuery(): DeliveriesContextData {
    const context = useContext(DeliveriesContext);

    return context;
}

export { DeliveriesProvider, useDeliveriesQuery };