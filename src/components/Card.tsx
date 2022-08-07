import { View, StyleSheet, Text } from "react-native";
import Size from "../constants/Layout";

interface Props {
    id?: string;
    shippedDate?: string;
    arrivalDate?: string;
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
            <Text>{itemName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Size.window.height / 5,
        width: "100%",
        backgroundColor: "#fff",
    }
})

export default Card;