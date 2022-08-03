import React from "react";
import { StyleProp, Text, TextInput, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface Props {
    userInput: string;
    setUserInput: (e: React.SetStateAction<string>) => void;
    label?: string;
    style?: StyleProp<ViewStyle>;
    secure?: boolean;
}

const InputBox: React.FC<Props> = ({ userInput, setUserInput, label, style, secure = false }) => {
    return (
        <View style={[styles.container, style]}>
            {label && <Text style={styles.text}>{label}</Text>}
            <TextInput
                value={userInput}
                onChangeText={setUserInput}
                style={styles.input}
                secureTextEntry={secure}
            />
        </View>
    )
}

export default InputBox;