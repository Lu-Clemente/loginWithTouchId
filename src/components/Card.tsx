import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";
import Size from "../constants/Layout";

interface Props {
    id?: string;
    shippedDate: string;
    arrivalDate: string;
    itemName: string;
    value?: number;
}

const Card: React.FC<Props> = ({
    id,
    shippedDate,
    arrivalDate,
    itemName,
    value
}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{itemName}</Text>
            <View style={styles.datesView}>
                <Text style={styles.shipped}>{`Shipped: ${shippedDate}`}</Text>
                <FontAwesomeIcon
                    icon={faArrowRightLong}
                    size={18}
                    style={styles.arrow}
                />
                <Text style={styles.arrival}>{`Arrival: ${arrivalDate}`}</Text>
            </View>
            <View style={styles.price}>
                <Text>{value ? `Price: $${value.toFixed(2)}` : "Price: --.--"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Size.window.height / 6,
        marginHorizontal: 15,
        backgroundColor: "#eee",
        elevation: 10,
        borderRadius: 8,
        padding: 15,
        justifyContent: "space-between",
        marginTop: 10
    },
    title: {
        textAlign: "center",
        color: "#000",
        fontSize: 17,
        fontWeight: "600"
    },
    datesView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 10,
    },
    shipped: {
        color: "#FF6E1C",
        fontSize: 15,
    },
    arrow: {
        alignSelf: "center"
    },
    arrival: {
        color: "green",
        fontSize: 15,
        fontWeight: "500"
    },
    price: {
        alignSelf: "flex-end"
    }
})

export default Card;